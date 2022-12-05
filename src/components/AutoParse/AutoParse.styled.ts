import colors from "../../helpers/colors";
import device from "../../helpers/device";

import styled from "styled-components";
import Button from "../Button";

export const Main = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  width: 100%;
  gap: 40px;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  @media ${device.TABLET} {
    align-items: flex-start;
  }
`;

export const ParseColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 800px;

  @media ${device.LAPTOP_LARGE} {
    align-items: flex-start;
  }
`;

export const Row = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 30px;
  width: 100%;
  margin-bottom: 40px;

  @media ${device.TABLET} {
    flex-direction: row;
    gap: 40px;
    align-items: flex-end;
    margin-bottom: 20px;
  }
`;

export const TabTitle = styled.h3`
  font-style: normal;
  line-height: 130%;
  color: ${props => props.theme.textColor};
  margin-bottom: 25px;
  text-align: center;
  display: none;

  @media ${device.TABLET} {
    font-weight: 400;
    font-size: 16px;
    display: inline-block;
  }

  @media ${device.LAPTOP} {
    font-weight: 500;
    font-size: 24px;
  }
`;

export const ListElement = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 30px;
  width: 100%;
  margin-bottom: 40px;

  @media ${device.TABLET} {
    gap: 40px;
    flex-direction: row;
    align-items: flex-end;
    margin-bottom: 25px;
  }
`;

export const Error = styled.label`
  position: absolute;
  margin-top: 5px;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 130%;
  -webkit-line-clamp: 1;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-align: start;
  align-items: center;
  color: ${colors.REQUIRED_ERROR};
  @media ${device.TABLET} {
    -webkit-line-clamp: 2;
  }
`;

export const Input = styled.div`
  position: relative;
  width: 100%;
`;

export const AutoParse = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  margin-top: 50px;
  @media ${device.TABLET} {
    margin-top: 0;
  }
`;

export const CodeWrapper = styled.div`
  width: 100%;
  height: 305px;
`;

export const ParseWrapper = styled.div`
  width: 100%;
`;

export const ParseButtons = styled.div`
  margin-top: 35px;
  margin-bottom: 35px;
  @media ${device.TABLET} {
    margin-top: 25px;
    margin-bottom: 25px;
  }
`;

export const ClearButton = styled(Button)`
  margin-right: 20px;
  background: transparent;
  color: ${props => props.theme.textColor};

  :before {
    background: ${colors.DARK_GREY};
  }

  :hover {
    box-shadow: 2px 2px 4px 0px ${colors.DARK_GREY};
  }
`;
