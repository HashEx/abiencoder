import colors from "../../helpers/colors";
import device from "../../helpers/device";
import {
  CONTAINER_WIDTH,
  DESKTOP_SIDE_SPACE,
  MOBILE_SIDE_SPACE,
} from "../../helpers/variables";
import styled from "styled-components";
import Button from "../../components/Button";

export const AbiSettings = styled.section`
  position: relative;
  box-sizing: border-box;
  margin: 0 ${MOBILE_SIDE_SPACE};
  margin-top: -280px;

  @media ${device.LAPTOP} {
    margin-left: ${DESKTOP_SIDE_SPACE};
    margin-right: ${DESKTOP_SIDE_SPACE};
  }
`;

export const Content = styled.div`
  z-index: 10;
  width: 100%;
  box-sizing: border-box;
  text-align: center;
  background-color: transparent;

  @media (min-width: 1400px) {
    max-width: ${CONTAINER_WIDTH};
    margin-left: auto;
    margin-right: auto;
  }
`;

export const AddButton = styled(Button)`
  display: flex !important;
  gap: 10px;
  margin-top: 10px;

  @media ${device.TABLET} {
    margin-top: 5px;
  }
`;

export const ManualParameters = styled.div<{
  label: string;
}>`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  @media ${device.TABLET} {
    align-items: flex-start;
  }
`;

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

export const Banner = styled.a`
  flex-direction: column;
  align-items: flex-start;
  display: none;

  @media ${device.LAPTOP_LARGE} {
    display: flex;
  }
`;

export const BannerImg = styled.img``;

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
  font-weight: 400;
  font-size: 20px;
  line-height: 130%;
  color: ${colors.LIGHT_BLACK};
  margin-bottom: 25px;
  text-align: center;

  @media ${device.TABLET} {
    font-weight: 500;
  }

  @media ${device.MOBILE_LARGE} {
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

export const AutoParse = styled.div<{
  label: string;
}>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
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
  @media ${device.TABLET} {
    margin-top: 25px;
  }
`;

export const ClearButton = styled(Button)`
  margin-right: 20px;
  background: transparent;

  :before {
    background: ${colors.DARK_GREY};
  }

  :hover {
    box-shadow: 2px 2px 4px 0px ${colors.DARK_GREY};
  }
`;

export const ModalWrapper = styled.div`
  box-sizing: border-box;
  border-radius: 20px;
  padding: 40px 20px;
  background: ${colors.WHITE};
  display: flex;
  align-items: center;
  gap: 20px;
  flex-direction: column;
`;

export const ModalText = styled.span`
  font-family: "Futura";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 120%;
  width: 90%;
  text-align: center;

  color: ${colors.BLACK};
`;

export const OkButton = styled(Button)`
  width: 100px;
`;
