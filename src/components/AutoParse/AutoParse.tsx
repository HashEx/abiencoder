import React, { ChangeEvent, FC, useMemo } from "react";
import FormGroup from "../FormGroup";
import Input from "../Input";
import MethodInputs from "../MethodInputs";
import Select from "../Select";

import {
  AbiItem,
  Parameters,
  AbiTypeEnum,
  ParameterInput,
} from "../../interfaces";

import * as s from "./AutoParse.styled";
import { getArgumentOptions, getFunctionOptions } from "../../utils/helpers";
import {
  pushGtagChooseFunction,
  pushGtagParsesActionButton,
} from "../../utils/gtag";
import Button from "../Button";
import CodeMirror from "../CodeMirror";

interface AutoParseProps {
  abi: string;
  parseError: string | null;
  abiFunctions: { [x: string]: AbiItem };
  onAbiChange: (value: string) => void;
  onParametersChange: (parameters: Parameters) => void;
  onClear: () => void;
  onParse: () => void;
  value: Parameters;
  errors?: string[];
  label: string;
  isParsed: boolean;
}

const AutoParse: FC<AutoParseProps> = ({
  abi,
  onAbiChange,
  onParametersChange,
  abiFunctions,
  onParse,
  onClear,
  parseError,
  value,
  errors,
  isParsed,
}) => {
  const isConstructorFunc = useMemo(
    () => value.type === AbiTypeEnum.CONSTRUCTOR,
    [value]
  );

  const functionOptions = useMemo(
    () => getFunctionOptions(abiFunctions),
    [abiFunctions]
  );

  const funcKey = value.type; // value.funcName || value.type;
  const argumentOptions = useMemo(
    () => getArgumentOptions(abiFunctions[funcKey]),
    [abiFunctions, funcKey]
  );

  const onChangeFuncName = (e: ChangeEvent<HTMLInputElement>) => {
    onParametersChange({
      ...value,
      funcName: e.target.value,
    });
  };

  const onChangeInputs = (inputs: ParameterInput[]) => {
    onParametersChange({
      ...value,
      inputs,
    });
  };

  const onChangeType = (e: ChangeEvent<HTMLSelectElement>) => {
    const newType = e.target.value;
    pushGtagChooseFunction(newType);
    const typeDescription = abiFunctions[newType] || ({} as AbiItem);
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

    onParametersChange({
      ...value,
      type: newType,
      funcName,
      inputs,
    });
  };

  const handleParseClick = () => {
    pushGtagParsesActionButton("parse");
    onParse();
  };
  const handleClearClick = () => {
    pushGtagParsesActionButton("clear");
    onClear();
  };

  return (
    <s.AutoParse>
      <s.TabTitle>Enter your contract's ABI to auto-parse</s.TabTitle>
      <s.Main>
        <s.ParseColumn>
          <s.CodeWrapper>
            <CodeMirror
              value={abi}
              onChange={onAbiChange}
              placeholder={`Enter your ABI json  [{"inputs":[], "name": "myFunction", "type":"function"}]`}
            />
          </s.CodeWrapper>
          <s.ParseWrapper>
            {parseError && <s.Error>Enter correct JSON</s.Error>}
            <s.ParseButtons>
              <s.ClearButton
                onClick={handleClearClick}
                text="Clear"
                type="button"
              />
              <Button onClick={handleParseClick} type="button" text="Parse" />
            </s.ParseButtons>
          </s.ParseWrapper>
          {isParsed && (
            <s.Column>
              <s.Row>
                <FormGroup label="Function">
                  <Select
                    value={value.type}
                    onChange={onChangeType}
                    options={functionOptions}
                  />
                </FormGroup>
                {!isConstructorFunc && (
                  <Input
                    className="method-input__value"
                    onChange={onChangeFuncName}
                    value={value.funcName}
                    type="text"
                    name="listen"
                    disabled
                  />
                )}
              </s.Row>
              <MethodInputs
                value={value.inputs}
                onChange={onChangeInputs}
                options={argumentOptions}
                errors={errors}
                isCustomFunction={false}
              />
            </s.Column>
          )}
        </s.ParseColumn>
      </s.Main>
    </s.AutoParse>
  );
};

export default AutoParse;
