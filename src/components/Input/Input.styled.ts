import colors from "../../helpers/colors";
import styled from "styled-components";
import device from "../../helpers/device";

export const Input = styled.input<{
  value?: any
}>`
  border: none;
  outline: none;
  background-color: transparent;

  border-bottom: 1px solid ${({ value }) => (value ? colors.GREEN_SECONDARY : colors.DARK_GREY)};

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

  color: ${colors.LIGHT_GREY};

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
  color: ${colors.GREEN_SECONDARY};
  transform: rotate(45deg);
`;
