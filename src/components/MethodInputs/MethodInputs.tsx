import React from "react";
import FormGroup from "../../components/FormGroup";
import Input from "../../components/Input";
import Select from "../../components/Select";
import { getPlaceholder, isStructInput } from "../../utils";
import {
  pushGtagChooseArgument,
  pushGtagParsesActionButton,
} from "../../utils/gtag";

import * as s from "./MethodInputs.styled";

interface MethodInputsProps {
  value: any[];
  isCustomFunction?: boolean;
  onChange: (inputs: any[]) => void;
  options: any[];
  errors?: any[];
}

const getStructInputHelpText = (input: any) => {
  const structTypes = (input.components || []).map((c: any) => {
    if (isStructInput(c)) return getStructInputHelpText(c);
    return `${c.name}: ${c.type}`;
  });

  return `Struct: [${structTypes.join(", ")}]`;
};

const getInputHelpText = (input: any) => {
  if (isStructInput(input)) return getStructInputHelpText(input);
  return null;
};

const MethodInputs: React.FC<MethodInputsProps> = ({
  value,
  onChange,
  options,
  errors = [],
  isCustomFunction,
}) => {
  const handleChange = (index: number) => (name: string) => (e: any) => {
    const newValue = e.target.value;
    if (name === "type") {
      const option = options.find((option) => option.value === newValue);
      pushGtagChooseArgument(option.label);
    }
    onChange([
      ...value.slice(0, index),
      {
        ...value[index],
        [name]: newValue,
      },
      ...value.slice(index + 1),
    ]);
  };
  const onRemoveArgument = (index: number) => (e: any) => {
    pushGtagParsesActionButton("remove");
    onChange([...value.slice(0, index), ...value.slice(index + 1)]);
  };

  return (
    <>
      {value.map((item, index) => {
        const handleTypeChange = handleChange(index)("type");
        const handleValueChange = handleChange(index)("value");
        const error = errors[index];
        const { name, type, value } = item;
        const placeholder = getPlaceholder(type, item);
        const helpText = getInputHelpText(item);
        return (
          <s.ListElement key={index}>
            <FormGroup label={name || "Argument"}>
              <Select
                onChange={handleTypeChange}
                value={item.type}
                options={options}
                disabled={!isCustomFunction}
              />
            </FormGroup>
            <s.Input>
              <Input
                value={value}
                onChange={handleValueChange}
                placeholder={placeholder}
                type="text"
                name="listen"
                invalid={!!error}
                helpText={helpText}
                onClear={onRemoveArgument(index)}
              />
              {error && <s.Error>{error}</s.Error>}
            </s.Input>
          </s.ListElement>
        );
      })}
    </>
  );
};

export default MethodInputs;
