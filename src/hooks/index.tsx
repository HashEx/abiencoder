import { useState, useEffect } from 'react';

import { AbiInput, AbiItem, AbiTypeEnum, ParameterInput, Parameters } from '../interfaces';

import { encode, parse } from '../utils';

const useAbiParser = () => {
    const [abi, setAbi] = useState<string>("");
    const [parseError, setParseError] = useState<string | null>(null);
    const [abiFunctions, setAbiFunctions] = useState<{[x: string]: AbiItem}>({});

    const onChange = (value: string) => {
        if(parseError) {
            setParseError(null);
        }
        setAbi(value);
        if(!value) {
            setAbiFunctions({});
        }
    }

    const onParse = () => {
        try {
            if(parseError) {
                setParseError(null);
            }
            
            const parsedFunctions = parse(abi);

            setAbi(JSON.stringify(JSON.parse(abi), null, 2));

            setAbiFunctions(parsedFunctions);
            
        } catch(e: any) {
            setParseError(e.message);
        }
    }

    return {
        abi,
        onChange,
        onParse,
        parseError,
        abiFunctions,
    }
}

const useParameters = () => {
    const initialState = {
        type: AbiTypeEnum.CONSTRUCTOR,
        funcName: "",
        inputs: [{
            type: "",
            value: ""
        }] as ParameterInput[],
    };
    const [parameters, setParameters] = useState<Parameters>(initialState);
    const onChange = (parameters: Parameters) => {
        setParameters(parameters)
    }
    const onReset = () => {
        setParameters(initialState);
    }
    return {
        parameters,
        onChange,
        onReset
    }
}

export const useAbiEncoder = () => {
    const [encoded, setEncoded] = useState<string>("");
    const [encodeErrors, setEncodeErrors] = useState<string[]>([]);
    const {
        abi,
        onChange: onAbiChange,
        parseError,
        onParse,
        abiFunctions
    } = useAbiParser();

    const {
        parameters,
        onChange: onParametersChange,
        onReset
    } = useParameters();

    const onClear = () => {
        onAbiChange("");
        onReset();
    }

    const handleParseClick = () => {
        onParse();
        onReset();
    }

    const onChange = (name: string) => (value: string | Parameters) => {
        if(name === "parameters") {
            onParametersChange(value as Parameters)
        } else if(name === "abi") {
            onAbiChange(value as string);
        }
    }

    useEffect(() => {
        const abiContstructor = abiFunctions[AbiTypeEnum.CONSTRUCTOR];
        if(typeof abiContstructor !== "undefined") {
            onParametersChange({
                type: AbiTypeEnum.CONSTRUCTOR,
                funcName: "",
                inputs: (abiContstructor.inputs || []).map(i => ({...i, value: "",})),
            })
        }
    }, [abiFunctions])

    useEffect(() => {
        const {errors, encoded} = encode(parameters);
        setEncoded(encoded);
        setEncodeErrors(errors);
    }, [parameters, parameters.type, parameters.funcName, parameters.inputs])

    return {
        encoded,
        encodeErrors,
        abi,
        onChange,
        parseError,
        onParse: handleParseClick,
        onClear,
        abiFunctions,
        parameters,
    }
}