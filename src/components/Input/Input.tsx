import plus from "../../images/plus.svg";
import React from "react";

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
}

const Input: React.FC<InputProps> = ({
  className,
  invalid,
  helpText,
  onClear,
  ...props
}) => (
  <s.Wrapper>
    <s.Input className={className} {...props}></s.Input>
    {onClear && (
      <s.Clear
        title="Remove argument"
        className="remove-param"
        onClick={onClear}
      >
        <img src={plus} alt="clear" />
      </s.Clear>
    )}
  </s.Wrapper>
);

export default Input;
