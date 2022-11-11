import React from "react";

import * as s from "./FormGroup.styled";

interface FormGroupProps {
  label?: string;
  error?: string;
}

const FormGroup: React.FC<FormGroupProps> = ({ label, children, error }) => {
  return (
    <s.FormGroup>
      <s.FormLabel>{label}</s.FormLabel>
      {children}
      {error && <s.Error>{error}</s.Error>}
    </s.FormGroup>
  );
};

export default FormGroup;
