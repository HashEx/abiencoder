import styled from "styled-components";

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  width: max-content;
`;

export const FormLabel = styled.label`
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 130%;
  color: ${props => props.theme.textColor};
`;

export const Error = styled.div`
  font-size: 10px;
  color: red;
`;
