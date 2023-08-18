import { getStructType, hasFixedLengthArrayInput, isStructInput } from ".";
import { banners } from "../constants/banners";
import { AbiInput, AbiItem, AbiTypeEnum } from "../interfaces";

export const typesOptions = [
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

export const getFunctionOptions = (abiFunctions: any) => {
  const types = Object.keys(abiFunctions).filter(
    (item) => item !== AbiTypeEnum.CONSTRUCTOR
  );
  const typesOptions = [
    {
      value: AbiTypeEnum.CONSTRUCTOR as string,
      label: "constructor",
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

export const getStructOptions = (fn?: AbiItem) => {
  const inputs = fn ? fn.inputs || [] : [];
  const tuples = inputs.filter((input: AbiInput) => isStructInput(input));
  return tuples.map((tuple: AbiInput) => {
    return {
      value: getStructType(tuple),
      label: tuple.internalType,
    };
  });
};

export const getFixedLengthArrayOptions = (fn?: AbiItem) => {
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

export const generateNumerableTypeOptions = (
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

export const generateUintOptions = () => {
  return generateNumerableTypeOptions("uint", "Uint", 256, 8);
};

export const generateBytesOptions = () => {
  return generateNumerableTypeOptions("bytes", "Bytes", 32, 1);
};

export const argumentOptions = [
  { value: "address", label: "Address" },
  { value: "address[]", label: "Address[]" },
  { value: "string", label: "String" },
  { value: "bool", label: "Bool" },
  { value: "bool[]", label: "Bool[]" },
  ...generateUintOptions(),
  ...generateBytesOptions(),
];

export const getArgumentOptions = (fn?: any) => {
  const structOptions = getStructOptions(fn);
  const fixedLengthArrayOptions = getFixedLengthArrayOptions(fn);

  return [...argumentOptions, ...structOptions, ...fixedLengthArrayOptions];
};

export const checkIfFunctionIsCustom = (value: any, abiFunctions: any) => {
  const { funcName, type } = value;
  const isConstructor = type === AbiTypeEnum.CONSTRUCTOR;
  const isCustomConstructor =
    isConstructor && !Object.keys(abiFunctions).length;
  const isCustomFunction =
    !isConstructor && !abiFunctions[funcName] && !abiFunctions[type];
  return isCustomConstructor || isCustomFunction;
};

export const getRandomInt = (min: number, max: number) => {
  const ceiledMin = Math.ceil(min);
  const flooredMax = Math.floor(max);
  return Math.floor(Math.random() * (flooredMax - ceiledMin + 1) + ceiledMin); // The maximum is exclusive and the minimum is inclusive
};

export const getBanner = () => {
  const index = getRandomInt(0, banners.length - 1);
  return banners[index];
};
