import React, { ChangeEvent, FC, useMemo } from "react";
import { TELEGRAM_BOT_URL } from "../../constants/links";
import FormGroup from "../FormGroup";
import Input from "../Input";
import MethodInputs from "../MethodInputs";
import Select from "../Select";
import plus from "../../images/plus.svg";
import ad from "../../images/ad.svg";

import { Parameters, AbiTypeEnum, ParameterInput } from "../../interfaces";

import * as s from "./ManualParameters.styled";
import { argumentOptions, typesOptions } from "../../utils/helpers";
import {
  pushGtagChooseFunction,
  pushGtagParsesActionButton,
} from "../../utils/gtag";

interface ParametersSectionProps {
  onParametersChange: (parameters: Parameters) => void;
  value: Parameters;
  errors?: string[];
  label: string;
}

const ManualParameters: FC<ParametersSectionProps> = ({
  value,
  onParametersChange,
  errors,
}) => {
  const onChangeFuncName = (e: ChangeEvent<HTMLInputElement>) => {
    onParametersChange({
      ...value,
      funcName: e.target.value,
    });
  };

  const isConstructorFunc = useMemo(
    () => value.type === AbiTypeEnum.CONSTRUCTOR,
    [value]
  );

  const onAddArgument = () => {
    pushGtagParsesActionButton("add");
    onParametersChange({
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
    onParametersChange({
      ...value,
      inputs,
    });
  };

  const onChangeType = (e: ChangeEvent<HTMLSelectElement>) => {
    const newType = e.target.value;
    pushGtagChooseFunction(newType);
    onParametersChange({
      ...value,
      type: newType,
      funcName: "",
      inputs: [],
    });
  };

  return (
    <s.ManualParameters>
      <s.TabTitle>Enter your parameters manually</s.TabTitle>
      <s.Main>
        <s.Column>
          <s.Row>
            <FormGroup label="Function">
              <Select
                value={value.type}
                onChange={onChangeType}
                options={typesOptions}
              />
            </FormGroup>
            {!isConstructorFunc && (
              <Input
                className="method-input__value"
                onChange={onChangeFuncName}
                value={value.funcName}
                placeholder="Enter function name without arguments"
                type="text"
                name="listen"
              />
            )}
          </s.Row>
          <MethodInputs
            value={value.inputs}
            onChange={onChangeInputs}
            options={argumentOptions}
            errors={errors}
            isCustomFunction
          />
          <s.AddButton
            type="button"
            text={
              <>
                <img src={plus} alt="add argument" />
                Add argument
              </>
            }
            onClick={onAddArgument}
          />
        </s.Column>
        <s.Banner
          href={TELEGRAM_BOT_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          <s.BannerImg src={ad} alt="CheckMyTokenBot" />
        </s.Banner>
      </s.Main>
    </s.ManualParameters>
  );
};

export default ManualParameters;
