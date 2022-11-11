import colors from "../../helpers/colors";
import styled from "styled-components";
import device from "../../helpers/device";

export const Input = styled.input`
  border: none;
  outline: none;
  border-bottom: 1px solid ${colors.GREY};

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

  color: ${colors.LIGHT_BLACK};

  @media ${device.TABLET} {
    font-size: 14px;
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
  color: #929292;
  > img {
    transform: rotate(45deg);
  }
`;
