import colors from "../../helpers/colors";
import styled from "styled-components";
import device from "../../helpers/device";

export const Input = styled.input<{
  value?: any
}>`
  border: none;
  outline: none;
  background-color: transparent;

  border-bottom: 1px solid ${({ value, theme }) => (value ? colors.GREEN_SECONDARY : theme.borderColor)};

  font-family: "PT Mono";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 130%;

  display: flex;
  align-items: center;
  padding: 10px 0;

  width: 100%;
  align-self: end;

  color: ${props => props.theme.textColor3};

  @media ${device.TABLET} {
    font-size: 14px;
  }

  &:disabled {
    background: transparent;
    cursor: not-allowed;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

export const Clear = styled.button`
  position: absolute;
  right: 0;
  border: none;
  background-color: transparent;
  cursor: pointer;
  color: ${props => props.theme.indicatorColor};
  transform: rotate(45deg);
`;
