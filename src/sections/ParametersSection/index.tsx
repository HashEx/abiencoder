import React, { ChangeEvent, useMemo } from 'react';

import Section from '../../components/Section';
import Button from '../../components/Button';
import Input from '../../components/Input';
import { AbiInput, AbiItem, ParameterInput, Parameters } from '../../interfaces';
import FormGroup from '../../components/FormGroup';

import './ParametersSection.css';
import MethodInputs from './MethodInputs';
import Select from '../../components/Select';
import { getStructType, isStructInput } from '../../utils';

interface ParametersSectionProps {
  abiFunctions: { [x: string]: AbiItem };
  onChange: (parameters: Parameters) => void;
  value: Parameters;
  errors?: string[];
}

const generateUintOptions = () => {
  const options = [];
  let i = 0;
  while(i <= 256){
    if(i === 0){
      options.push({value: "uint", label: "Uint"});
      options.push({value: "uint[]", label: "Uint[]"});
    }else{
      options.push({value: `uint${i}`, label: `Uint${i}`});
      options.push({value: `uint${i}[]`, label: `Uint${i}[]`});
    }
    i += 8;
  }
  return options;
}

const generateBytesOptions = () => {
  const options = [
    // {
    //   value: "byte",
    //   label: "Byte"
    // },{
    //   value: "byte[]",
    //   label: "Byte[]"
    // }
  ];
  let i = 0;
  while(i <= 32){
    if(i === 0){
      options.push({value: "bytes", label: "Bytes"});
      options.push({value: "bytes[]", label: "Bytes[]"});
    }else{
      options.push({value: `bytes${i}`, label: `Bytes${i}`});
      options.push({value: `bytes${i}[]`, label: `Bytes${i}[]`});
    }
    i += 1;
  }
  return options;
}

const getStructOptions = (fn?: AbiItem) => {
  const inputs = fn ? (fn.inputs || []) : [];
  const tuples = inputs.filter((input: AbiInput) => isStructInput(input));
  return tuples.map((tuple: AbiInput) => {
    return {
      value: getStructType(tuple),
      label: tuple.internalType,
    }
  })
}

const getArgumentOptions = (fn: any) => {
  const structOptions = getStructOptions(fn);
  return [
    { value: "address", label: "Address", },
    { value: "address[]", label: "Address[]", },
    { value: "string", label: "String", },
    { value: "bool", label: "Bool", },
    { value: "bool[]", label: "Bool[]", },
    ...generateUintOptions(),
    ...generateBytesOptions(),
    ...structOptions
  ];
}


const getTypesOptions = (abiFunctions: any) => {
  const types = Object.keys(abiFunctions).filter((item) => item !== "constructor");
  const typesOptions = [{
    value: "constructor",
    label: "constructor",
    fn: {},
  }, {
    value: "function",
    label: "your function",
    fn: {},
  }];

  types.forEach((item) => {
    typesOptions.push({
      value: item,
      label: item,
      fn: abiFunctions[item],
    });
  });

  return typesOptions;
}


const ParametersSection: React.FC<ParametersSectionProps> = ({ abiFunctions, value, onChange, errors }) => {
  const onChangeFuncName = (e: ChangeEvent<HTMLInputElement>) => {
    onChange({
      ...value,
      funcName: e.target.value,
    })
  }
  const onChangeType = (e: ChangeEvent<HTMLSelectElement>) => {
    const newType = e.target.value;
    const typeDescription = abiFunctions[newType] || {};
    let funcName = "";
    const inputs: any[] = (typeDescription.inputs || []).map((input: any) => {
      return {
        ...input,
        value: "",
      }
    });
    if(["constructor", "function"].indexOf(newType) === -1) funcName = typeDescription.name || "";
    onChange({
      ...value,
      type: newType,
      funcName,
      inputs
    })
  };

  const onAddArgument = () => {
    onChange({
      ...value,
      inputs: [
        ...value.inputs,
        {
          type: "",
          value: ""
        }
      ] as ParameterInput[]
    })
  }

  const onChangeInputs = (inputs: ParameterInput[]) => {
    onChange({
      ...value,
      inputs
    })
  }

  const isConstructor = value.type === "constructor";
  const typesOptions = useMemo(() => getTypesOptions(abiFunctions), [abiFunctions]);
  const argumentOptions = useMemo(() => getArgumentOptions(abiFunctions[value.type]), [abiFunctions, value]);

  return (
    <Section className="section-choose" title="Or enter your parameters manually">
      <div className="row choose">
        <div className="col-md-3">
          <FormGroup label="Function type">
            <div>
              <Select
                value={value.type}
                onChange={onChangeType}
                options={typesOptions}
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
            />
          )}
        </div>
      </div>
      <MethodInputs value={value.inputs} onChange={onChangeInputs} options={argumentOptions} errors={errors} />
      <div className="section-choose__buttons">
        <Button className="add-param" onClick={onAddArgument}>Add argument</Button>
      </div>
    </Section>
  )
}

export default ParametersSection;