import React, { ChangeEvent, FC, useMemo } from "react";
import FormGroup from "../FormGroup";
import Input from "../Input";
import MethodInputs from "../MethodInputs";
import Select from "../Select";
import plus from "../../images/plus.svg";

import {
  Parameters,
  AbiTypeEnum,
  ParameterInput,
  IBanner,
} from "../../interfaces";

import * as s from "./ManualParameters.styled";
import { argumentOptions, typesOptions } from "../../utils/helpers";
import {
  pushGtagChooseFunction,
  pushGtagParsesActionButton,
} from "../../utils/gtag";
import Banner from "../Banner";

interface ParametersSectionProps {
  onParametersChange: (parameters: Parameters) => void;
  value: Parameters;
  errors?: string[];
  label: string;
  banner: IBanner;
  width: number;
  hide: boolean;
  setHide: (v: boolean) => void;
}

const getFuncPlaceholder = (width: number) => {
  if (width >= 640 || width === 0)
    return "Enter function name without arguments";
  return "function name without arguments";
};

const ManualParameters: FC<ParametersSectionProps> = ({
  value,
  onParametersChange,
  errors,
  banner,
  width,
  hide,
  setHide,
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

  const funcPlaceholder = useMemo(() => getFuncPlaceholder(width), [width]);

  return (
    <s.ManualParameters>
      <s.TabTitle>Enter your parameters manually</s.TabTitle>
      <s.TopBanner>
        <Banner banner={banner} hide={hide} setHide={setHide} />
      </s.TopBanner>
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
                placeholder={funcPlaceholder}
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
        <s.BannerColumn banner={banner} hide={hide} setHide={setHide} />
      </s.Main>
    </s.ManualParameters>
  );
};

export default ManualParameters;
