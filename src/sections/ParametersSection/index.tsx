import React, { ChangeEvent, useMemo } from "react";

import Section from "../../components/Section";
import Button from "../../components/Button";
import Input from "../../components/Input";
import {
  AbiInput,
  AbiItem,
  AbiTypeEnum,
  ParameterInput,
  Parameters,
} from "../../interfaces";
import FormGroup from "../../components/FormGroup";

import "./ParametersSection.css";
import MethodInputs from "./MethodInputs";
import Select from "../../components/Select";
import { getStructType, isStructInput, hasFixedLengthArrayInput } from "../../utils";
import { pushGtagChooseFunction, pushGtagParsesActionButton } from "../../utils/gtag";

interface ParametersSectionProps {
  abiFunctions: { [x: string]: AbiItem };
  onChange: (parameters: Parameters) => void;
  value: Parameters;
  errors?: string[];
}

const generateNumerableTypeOptions = (
  type: string,
  label: string,
  max: number,
  step: number
) => {
  const options = [];
  let i = 0;
  while (i <= max) {
    if (i === 0) {
      options.push({ value: type, label });
      options.push({ value: `${type}[]`, label: `${label}[]` });
    } else {
      options.push({ value: `${type}${i}`, label: `${label}${i}` });
      options.push({ value: `${type}${i}[]`, label: `${label}${i}[]` });
    }
    i += step;
  }
  return options;
};

const generateUintOptions = () => {
  return generateNumerableTypeOptions("uint", "Uint", 256, 8);
};

const generateBytesOptions = () => {
  return generateNumerableTypeOptions("bytes", "Bytes", 32, 1);
};

const getStructOptions = (fn?: AbiItem) => {
  const inputs = fn ? fn.inputs || [] : [];
  const tuples = inputs.filter((input: AbiInput) => isStructInput(input));
  return tuples.map((tuple: AbiInput) => {
    return {
      value: getStructType(tuple),
      label: tuple.internalType,
    };
  });
};

const getFixedLengthArrayOptions = (fn?: AbiItem) => {
  const inputs = fn ? fn.inputs || [] : [];
  const arrays = inputs.filter((input: AbiInput) => hasFixedLengthArrayInput(input) && !isStructInput(input));

  return arrays.map((array: AbiInput) => {
    const type = array.internalType || '';
    const label = type[0].toUpperCase() + type.slice(1)

    return {
      value: array.internalType,
      label
    }
  });
};

const getArgumentOptions = (fn: any) => {
  const structOptions = getStructOptions(fn);
  const fixedLengthArrayOptions = getFixedLengthArrayOptions(fn);

  return [
    { value: "address", label: "Address" },
    { value: "address[]", label: "Address[]" },
    { value: "string", label: "String" },
    { value: "bool", label: "Bool" },
    { value: "bool[]", label: "Bool[]" },
    ...generateUintOptions(),
    ...generateBytesOptions(),
    ...structOptions,
    ...fixedLengthArrayOptions
  ];
};

const getFunctionOptions = (abiFunctions: any) => {
  const types = Object.keys(abiFunctions).filter(
    (item) => item !== AbiTypeEnum.CONSTRUCTOR
  );
  const typesOptions = [
    {
      value: AbiTypeEnum.CONSTRUCTOR as string,
      label: "constructor",
      fn: {},
    },
    {
      value: AbiTypeEnum.FUNCTION as string,
      label: "your function",
      fn: {},
    },
  ];

  types.forEach((item) => {
    typesOptions.push({
      value: item,
      label: item,
      fn: abiFunctions[item],
    });
  });

  return typesOptions;
};

const checkIfFunctionIsCustom = (value: any, abiFunctions: any) => {
  const { funcName, type } = value;
  const isConstructor = type === AbiTypeEnum.CONSTRUCTOR;
  const isCustomConstructor = (isConstructor && !Object.keys(abiFunctions).length);
  const isCustomFunction = (!isConstructor && !abiFunctions[funcName] && !abiFunctions[type]);
  return isCustomConstructor || isCustomFunction;
}

const ParametersSection: React.FC<ParametersSectionProps> = ({
  abiFunctions,
  value,
  onChange,
  errors,
}) => {
  const onChangeFuncName = (e: ChangeEvent<HTMLInputElement>) => {
    onChange({
      ...value,
      funcName: e.target.value,
    });
  };
  const onChangeType = (e: ChangeEvent<HTMLSelectElement>) => {
    const newType = e.target.value;
    pushGtagChooseFunction(newType);
    const typeDescription = abiFunctions[newType] || {};
    let funcName = "";
    const inputs: any[] = (typeDescription.inputs || []).map((input: any) => {
      return {
        ...input,
        value: "",
      };
    });
    if (
      [AbiTypeEnum.CONSTRUCTOR, AbiTypeEnum.FUNCTION].indexOf(
        newType as AbiTypeEnum
      ) === -1
    )
      funcName = typeDescription.name || "";
    
    
    onChange({
      ...value,
      type: newType,
      funcName,
      inputs,
    });
  };

  const onAddArgument = () => {
    pushGtagParsesActionButton("add");
    onChange({
      ...value,
      inputs: [
        ...value.inputs,
        {
          type: "",
          value: "",
        },
      ] as ParameterInput[],
    });
  };

  const onChangeInputs = (inputs: ParameterInput[]) => {
    onChange({
      ...value,
      inputs,
    });
  };

  const isConstructor = value.type === AbiTypeEnum.CONSTRUCTOR;
  const isCustomFunction = useMemo(() => checkIfFunctionIsCustom(value, abiFunctions), [value, abiFunctions]);
  const functionOptions = useMemo(() => getFunctionOptions(abiFunctions), [
    abiFunctions,
  ]);
  const funcKey = value.type // value.funcName || value.type;
  const argumentOptions = useMemo(
    () => getArgumentOptions(abiFunctions[funcKey]),
    [abiFunctions, funcKey]
  );

  return (
    <Section
      className="section-choose"
      title="Or enter your parameters manually"
    >
      <div className="row choose">
        <div className="col-md-3">
          <FormGroup label="Function">
            <div>
              <Select
                value={value.type}
                onChange={onChangeType}
                options={functionOptions}
              />
            </div>
          </FormGroup>
        </div>
        <div className="col-md-7">
          {!isConstructor && (
            <Input
              className="method-input__value"
              onChange={onChangeFuncName}
              value={value.funcName}
              placeholder="Enter function name without arguments"
              type="text"
              name="listen"
              disabled={!isCustomFunction}
            />
          )}
        </div>
      </div>
      <MethodInputs
        value={value.inputs}
        onChange={onChangeInputs}
        options={argumentOptions}
        errors={errors}
        isCustomFunction={isCustomFunction}
      />
      {isCustomFunction && (
        <div className="section-choose__buttons">
          <Button className="add-param" onClick={onAddArgument}>
            Add argument
          </Button>
        </div>
      )}
    </Section>
  );
};

export default ParametersSection;
