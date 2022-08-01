import { utils } from 'ethers';

import { AbiInput, AbiInputType, AbiItem, Parameters } from '../interfaces';

export const isArrayType = (type: string) => {
    return type.includes("[]") || type.match( /\[[0-9]+\]/);
}

export const isUintType = (type: string) => {
    return type.toLowerCase().includes("uint");
}

export const isBytesType = (type: string) => {
    return type.toLowerCase().includes("bytes");
}

export const isAddressType = (type: string) => {
    return type.toLowerCase().includes("address");
}

export const isBooleanType = (type: string) => {
    return type.toLowerCase().includes("bool");
}

export const getPlaceholder = (type: string, item?: AbiInput) => {
    const isArray = isArrayType(type);
    const isUint = isUintType(type);
    const isBytes = isBytesType(type);
    const isBoolean = isBooleanType(type);
    const isAddress = isAddressType(type);
    const isStruct = isStructInput(item);
    
    let exampleText = ""; 
    if (isStruct) {
        const components = item ? (item.components || []) : [];
        const structTypesPlaceholders = components.map((c: AbiInput) => {
            const typePlaceholder = getPlaceholder(c.type, c).replace("Example: ", "");

            if (["address", "string"].includes(c.type)) return `"${typePlaceholder}"`;
            
            return typePlaceholder;
        });
        exampleText = `[${structTypesPlaceholders.join(', ')}]`
    } else if(isArray) {
        if(isUint || isBytes) {
            exampleText = "[0,1,2]";
        } else if(isBoolean) {
            exampleText = "[true, false, false]";
        } else if(isAddress) {
            exampleText = `["0x11...11", "0x21...21", "0x31...31"]`;
        } else {
            exampleText = `["str0", "str1", "str2"]`;
        }
    }else{
        if(isUint || isBytes) {
            exampleText = "111222333";
        } else if(isBoolean) {
            exampleText = "false";
        } else if(isAddress) {
            exampleText = `0x11...11`;
        } else {
            exampleText = `str0`;
        }
    }

    return `Example: ${exampleText}`;
    
}


enum VALIDATE_ERROS {
    NOT_ARRAY = "Invalid input: Value is not an array.",
    NOT_BOOLEAN = "Invalid input: bool must be true or false",
    NOT_ADDRESS = "Ivalid input: value is not an address",
}

type Validator = (value: string) => string | null;

type Parser = (value: string) => any;

export const validateArray = (value: string, itemValidator: Validator) => {
    try {
        const parsedValue = JSON.parse(value);
        if(!Array.isArray(parsedValue)) return VALIDATE_ERROS.NOT_ARRAY;
        let message: string | null = null;
        parsedValue.forEach((item) => {
            if(message) return;
            if(typeof item !== "string") item = item.toString();
            message = itemValidator(item);
        })

        return message;
    } catch(e: any) {
        return e.message;
    }
}

export const validateStruct = (value: string) => {
    try {

    } catch(e: any) {
        return e.message;
    }
}

export const encodeSignature = (sig: string) => utils.hexDataSlice(utils.id(sig), 0, 4).slice(2);

const validators: {[x: string]: Validator} = {
    [AbiInputType.ADDRESS]: (value: string) => utils.isAddress(value) ? null : VALIDATE_ERROS.NOT_ADDRESS,
    "address[]": (value: string) => validateArray(value, validators[AbiInputType.ADDRESS] as Validator),
    [AbiInputType.BOOLEAN]: (value: string) => {
        if(!["true", "false"].includes(value)) {
            return VALIDATE_ERROS.NOT_BOOLEAN;
        }
        return null;
    },
    "bool[]": (value: string) => validateArray(value, validators[AbiInputType.BOOLEAN] as Validator),
    [AbiInputType.TUPLE]: validateStruct,
}

const parsers: {[x: string]: Parser} = {
    [AbiInputType.BOOLEAN]: (value: string): boolean => value === 'true',
} 

const abiCoder = new utils.AbiCoder();

const getTupleArguments = (sig: string) => {
    const argsRegExp = /([^,]+\(.+?\))|([^,]+)/g;
    let args = sig.replace(AbiInputType.TUPLE, "").slice(1, -1).match(argsRegExp) || [];

    args = args.map((arg) => {
        if (arg.includes(AbiInputType.TUPLE)) return getTupleArguments(arg);
        return arg;
    });

    return `(${args.join(",")})`;
}

export const encode = (parameters: Parameters) => {
    const pInputs = (parameters.inputs || [])
    const inputsLength = parameters.inputs.length;
    let types: string[] = [];
    let inputs: any[] = [];
    let errors: string[] = [];
    let valid = true;
    let encoded = "";
    let emptyLines = pInputs.filter((input) => !input.value).length;
    
	if (emptyLines === inputsLength && inputsLength > 0) {
		valid = false;
		return {
            errors,
            encoded,
        }
    }
    
    pInputs.forEach((item, index) => {
        const { value, type, originalType } = item;
        const isStruct = isStructInput(item);
        const isArray = isArrayType(type);
        const parser: any = parsers[type] || ((v: any) => v);
        const keyType = originalType || type;

        const validator: Validator = (validators[keyType] || (() => "")) as Validator;
        types.push(type);
        let errorMessage = validator(value);
            
        if(!errorMessage && isArray) {
            errorMessage = validateArray(value, () => "");
        }
        try {
            if(errorMessage){
                valid = false;
                errors[index] = errorMessage;
                return;
            }else{
                if((isArray || isStruct) && value){
                    inputs.push(JSON.parse(value));
                }else{
                    inputs.push(parser(value));
                }  
            }
        
            abiCoder.encode(types, inputs);
            errors[index] = "";
		} catch (err: any) {
            valid = false;
            errors[index] = `Invalid input: ${err.message}`;
		}

    })
    
	if (valid) {
		if (parameters.type !== 'constructor' && parameters.funcName) {
            const argumentTypes = types.map(type => {
                if (!type.includes(AbiInputType.TUPLE)) return type;
                // remove tuple keyword according to etherscan decoded function calls
                return getTupleArguments(type);
            })
			const sig = parameters.funcName + "(" + argumentTypes.join(",") + ")";
			encoded += encodeSignature(sig);
		}
        if(inputs.length > 0) {
		    encoded += abiCoder.encode(types, inputs).slice(2);
        }
		return {
            errors,
            encoded
        }
	} else {
        return {
            errors,
            encoded
        }
    }
}


type ParsedFunctions = {
    [x: string]: AbiItem
}

export const isStructInput = (input?: AbiInput) => input ? (input.type || "").includes(AbiInputType.TUPLE) : false;
export const hasFixedLengthArrayInput = (input?: AbiInput) => input ? (input.type || "").match( /\[[0-9]+\]/) : false;

export const getStructType = (tuple: AbiInput): string => {
    const tupleArgs = (tuple.components || []).map((c: AbiInput) => {
        if(isStructInput(c)) return getStructType(c);
        return c.type;
    })
    return `tuple(${tupleArgs.join(',')})`
}

export const prepareFunction = (fn: AbiItem) => {
    if (!fn) return fn;
    return {
        ...fn,
        inputs: (fn.inputs || []).map((input: any) => {
            return {
                ...input,
                type: isStructInput(input) ? getStructType(input) : input.type,
                originalType: input.type,
            }
        })
    }
}

const getFunctionArgument = (input: AbiInput): string => {
    if (input.type.includes('tuple')) {
        const tupleArguments = (input.components || []).map(getFunctionArgument).join(",")
        return `(${tupleArguments})`;
    }
    return input.type;
}

const getFunctionKey = (func: AbiItem) => {
    const inputs = func.inputs || [];
    const inputTypesAsString = inputs.map(getFunctionArgument).join(",")
    return func.type === 'constructor' ? func.type : `${func.name}(${inputTypesAsString})`;
}

export const parse = (abi: string): ParsedFunctions => {
    const functions: AbiItem[] = JSON.parse(abi);

    let parsedFunctions: ParsedFunctions = {};

    functions.forEach((func) => {
        if (func.type !== 'event') {
            const key = getFunctionKey(func);
            if (key) {
                parsedFunctions[key] = prepareFunction(func);
            }
        }
    })

    return parsedFunctions;
}
