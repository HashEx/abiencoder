import React from "react";
import Plus from "../Icons/Plus";

import * as s from "./Input.styled";

interface InputProps {
  className?: string;
  onChange: (e: any) => void;
  type?: string;
  value: string;
  placeholder?: string;
  name?: string;
  id?: string;
  invalid?: boolean;
  disabled?: boolean;
  helpText?: any;
  onClear?: (e: any) => void;
  defaultValue?: string;
}

const Input: React.FC<InputProps> = ({
  className,
  invalid,
  helpText,
  onClear,
  defaultValue,
  ...props
}) => (
  <s.Wrapper>
    <s.Input
      defaultValue={defaultValue}
      className={className}
      {...props}
    ></s.Input>
    {onClear && (
      <s.Clear
        title="Remove argument"
        className="remove-param"
        onClick={onClear}
      >
        <Plus />
      </s.Clear>
    )}
  </s.Wrapper>
);

export default Input;
