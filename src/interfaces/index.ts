export type AbiType = "function" | "constructor" | "event" | "fallback";
export type StateMutabilityType = "pure" | "view" | "nonpayable" | "payable";

export interface AbiItem {
  anonymous?: boolean;
  constant?: boolean;
  inputs?: AbiInput[];
  name?: string;
  outputs?: AbiOutput[];
  payable?: boolean;
  stateMutability?: StateMutabilityType;
  type: AbiType;
  gas?: number;
}

export interface IBanner {
  alt: string;
  src: string;
  link: string;
  srcMob: string;
}

export enum AbiTypeEnum {
  "FUNCTION" = "function",
  "CONSTRUCTOR" = "constructor",
}

export enum AbiInputType {
  "TUPLE" = "tuple",
  "STRING" = "string",
  "ADDRESS" = "address",
  "BOOLEAN" = "bool",
}

export enum TabsLabel {
  "MANUAL_PARAMETERS" = "Manual parameters",
  "AUTO_PARSE" = "Auto-parse",
}

export interface AbiInput {
  name: string;
  type: string;
  indexed?: boolean;
  components?: AbiInput[];
  internalType?: string;
}

export interface AbiOutput {
  name: string;
  type: string;
  components?: AbiOutput[];
  internalType?: string;
}

export interface ParameterInput extends AbiInput {
  value: string;
  originalType?: string;
}

export interface Parameters {
  type: string;
  funcName: string;
  inputs: ParameterInput[];
}
