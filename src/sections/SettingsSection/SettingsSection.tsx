import React, { ChangeEvent, useMemo, useState } from "react";

import Tabs from "../../components/Tabs";

import * as s from "./SettingsSection.styled";

import {
  pushGtagChooseFunction,
  pushGtagParsesActionButton,
} from "../../utils/gtag";
import Input from "../../components/Input";
import plus from "../../images/plus.svg";
import ad from "../../images/ad.svg";
import FormGroup from "../../components/FormGroup";
import MethodInputs from "./MethodInputs";
import {
  getStructType,
  hasFixedLengthArrayInput,
  isStructInput,
} from "../../utils";
import CodeMirror from "../../components/CodeMirror";
import Button from "../../components/Button";
import Modal from "../../components/Modal";
import laptop from "../../images/laptop.svg";
import {
  AbiItem,
  Parameters,
  AbiTypeEnum,
  AbiInput,
  ParameterInput,
} from "../../interfaces";
import Select from "../../components/Select";
import { TELEGRAM_BOT_URL } from "../../constants/links";

interface ParametersSectionProps {
  abiFunctions: { [x: string]: AbiItem };
  onParametersChange: (parameters: Parameters) => void;
  value: Parameters;
  errors?: string[];
  abi: string;
  onClear: () => void;
  onParse: () => void;
  parseError: string | null;
  onAbiChange: (value: string) => void;
}

const getFunctionOptions = (abiFunctions: any) => {
  const types = Object.keys(abiFunctions).filter(
    (item) => item !== AbiTypeEnum.CONSTRUCTOR
  );
  const typesOptions = [
    {
      value: AbiTypeEnum.CONSTRUCTOR as string,
      label: "Constructor",
      fn: {},
    },
    {
      value: AbiTypeEnum.FUNCTION as string,
      label: "Your function",
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
  const arrays = inputs.filter(
    (input: AbiInput) =>
      hasFixedLengthArrayInput(input) && !isStructInput(input)
  );

  return arrays.map((array: AbiInput) => {
    const type = array.internalType || "";
    const label = type[0].toUpperCase() + type.slice(1);

    return {
      value: array.internalType,
      label,
    };
  });
};

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
    ...fixedLengthArrayOptions,
  ];
};

const checkIfFunctionIsCustom = (value: any, abiFunctions: any) => {
  const { funcName, type } = value;
  const isConstructor = type === AbiTypeEnum.CONSTRUCTOR;
  const isCustomConstructor =
    isConstructor && !Object.keys(abiFunctions).length;
  const isCustomFunction =
    !isConstructor && !abiFunctions[funcName] && !abiFunctions[type];
  return isCustomConstructor || isCustomFunction;
};

const AbiSettings: React.FC<ParametersSectionProps> = ({
  abiFunctions,
  value,
  onParametersChange,
  onAbiChange,
  errors,
  abi,
  onClear,
  onParse,
  parseError,
}) => {
  const isCustomFunction = useMemo(
    () => checkIfFunctionIsCustom(value, abiFunctions),
    [value, abiFunctions]
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

  const [showModal, setShowModal] = useState(false);

  const handleModalClose = () => {
    setShowModal(false);
  };

  return (
    <s.AbiSettings>
      <s.Content>
        <Tabs setShowModal={setShowModal}>
          <s.ManualParameters label="Manual parameters">
            <s.TabTitle>Enter your parameters manually</s.TabTitle>
            <s.Main>
              <s.Column>
                <s.Row>
                  <FormGroup label="Function">
                    <Select
                      value={value.type}
                      onChange={onChangeType}
                      options={functionOptions}
                    />
                  </FormGroup>
                  <Input
                    className="method-input__value"
                    onChange={onChangeFuncName}
                    value={value.funcName}
                    placeholder="Enter function name without arguments"
                    type="text"
                    name="listen"
                    disabled={!isCustomFunction}
                  />
                </s.Row>
                <MethodInputs
                  value={value.inputs}
                  onChange={onChangeInputs}
                  options={argumentOptions}
                  errors={errors}
                  isCustomFunction={isCustomFunction}
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
          <s.AutoParse label="Auto-parse">
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
                    <Button
                      onClick={handleParseClick}
                      type="button"
                      text="Parse"
                    />
                  </s.ParseButtons>
                </s.ParseWrapper>
              </s.ParseColumn>
            </s.Main>
          </s.AutoParse>
        </Tabs>
        <Modal show={showModal} onClose={handleModalClose}>
          <s.ModalWrapper>
            <img src={laptop} alt="desktop" />
            <s.ModalText>Please use the desktop version</s.ModalText>
            <s.OkButton text={"Ok"} onClick={handleModalClose} type="button" />
          </s.ModalWrapper>
        </Modal>
      </s.Content>
    </s.AbiSettings>
  );
};

export default AbiSettings;
