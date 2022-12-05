import styled from "styled-components";
import colors from "../../helpers/colors";

export const Switcher = styled.div`
  position: relative;
  display: block;
  border: 2px solid ${colors.DARK_GREY};
  border-radius: 68px;
  width: 62px;
  height: 36px;
  background-color: ${props => props.theme.bgColor};
  cursor: pointer;
  transition: 0.3s;
  box-sizing: border-box;
`;

export const Circle = styled.div<{
  active: boolean;
}>`
  position: absolute;
  width: 28px;
  height: 28px;
  display: block;
  border-radius: 50%;
  top: 2px;
  transition: 0.3s;
  background-color: ${props => props.theme.bgLightColor};
  left: ${({ active }) => active ? '2px' : '28px'};
  align-items: center;
  display: flex;
  justify-content: center;
`;
