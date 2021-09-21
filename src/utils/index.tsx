import { utils } from 'ethers';

import { Parameters } from '../interfaces';

export const isArrayType = (type: string) => {
    return type.includes("[]");
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

export const getPlaceholder = (type: string) => {
    const isArray = isArrayType(type);
    const isUint = isUintType(type);
    const isBytes = isBytesType(type);
    const isBoolean = isBooleanType(type);
    const isAddress = isAddressType(type);
    
    let exampleText = ""; 

    if(isArray) {
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

const validateArray = (value: string, itemValidator: Validator) => {
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

const validators: {[x: string]: Validator} = {
    "address": (value: string) => utils.isAddress(value) ? null : VALIDATE_ERROS.NOT_ADDRESS,
    "address[]": (value: string) => validateArray(value, validators.address),
    "bool": (value: string) => {
        if(!["true", "false"].includes(value)) {
            return VALIDATE_ERROS.NOT_BOOLEAN;
        }
        return null;
    },
    "bool[]": (value: string) => validateArray(value, validators.bool)
}

const parsers: {[x: string]: (value: string) => any} = {
    "bool": (value: string): boolean => value === 'true',
} 

const abiCoder = new utils.AbiCoder();

export const encode = (parameters: Parameters) => {
    const inputsLength = parameters.inputs.length;
    let types: string[] = [];
    let inputs: any[] = [];
    let errors: string[] = [];
    let valid = true;
    let encoded = "";
    let emptyLines = parameters.inputs.filter((input) => !input.value).length;
    
	if (emptyLines === inputsLength) {
		valid = false;
		return {
            errors,
            encoded,
        }
    }
    
    parameters.inputs.forEach((item, index) => {
        const { type, value } = item;
        types.push(item.type);
        const validator: Validator = validators[type] || (() => "");
        const isArray = isArrayType(type);
        const parser: any = parsers[type] || ((v: any) => v);
        let errorMessage = validator(value);
        if(!errorMessage && isArray) {
            errorMessage = validateArray(value, () => "");
        }
        if(errorMessage){
            valid = false;
            errors[index] = errorMessage;
            return;
        }else{
            if(isArray && value){
                inputs.push(JSON.parse(value));
            }else{
                inputs.push(parser(value));
            }  
        }
        try {
            abiCoder.encode(types, inputs);
            errors[index] = "";
		} catch (err: any) {
            valid = false;
            errors[index] = `Invalid input: ${err.message}`;
		}

    })
    
	if (valid) {
		if (parameters.type !== 'constructor') {
			const sig = parameters.funcName + "(" + types.join(",") + ")";
			encoded += utils.hexDataSlice(utils.id(sig), 0, 4).slice(2);
		}
		encoded += abiCoder.encode(types, inputs).slice(2);
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


export const parse = (abi: any) => {
    const functions: any[] = JSON.parse(abi);

    let parsedFunctions: {[x: string]: any} = {};

    functions.forEach((func) => {
        if (func.type !== 'event' && typeof func.inputs !== "undefined" && func.inputs.length) {
            if (func.type === 'constructor') {
                parsedFunctions[func.type] = func;
            } else {
                parsedFunctions[func.name] = func;
            }
        }
    })

    return parsedFunctions;
}
