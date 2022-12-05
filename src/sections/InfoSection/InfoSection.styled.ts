import styled from "styled-components";
import {
  CONTAINER_WIDTH,
  DESKTOP_SIDE_SPACE,
  MOBILE_SIDE_SPACE,
} from "../../helpers/variables";
import device from "../../helpers/device";

export const Wrapper = styled.section`
  box-sizing: border-box;
  margin: 0 ${MOBILE_SIDE_SPACE};

  @media ${device.LAPTOP} {
    margin-left: ${DESKTOP_SIDE_SPACE};
    margin-right: ${DESKTOP_SIDE_SPACE};
  }
  margin-top: 50px;
`;

export const Content = styled.div`
  z-index: 10;
  width: 100%;
  box-sizing: border-box;
  text-align: center;

  @media (min-width: 1400px) {
    max-width: ${CONTAINER_WIDTH};
    margin-left: auto;
    margin-right: auto;
  }

  background-color: ${props => props.theme.bgDarkColor};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0 0 60px 0;

  @media ${device.TABLET} {
    padding: 40px 20px 70px;
  }

  @media ${device.LAPTOP} {
    padding: 60px 70px 110px;
  }
`;

export const Row = styled.div`
  display: flex;
  gap: 20px;
  width: 100%;

  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  text-align: left;

  @media ${device.TABLET} {
    flex-direction: row;
    gap: 10%;
  }
`;

export const FirstText = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 120%;
  color: ${props => props.theme.textColor};
  width: 100%;

  @media ${device.TABLET} {
    width: 60%;
  }

  @media ${device.MOBILE_LARGE} {
    font-size: 20px;
  }
`;

export const SecondText = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 130%;
  color: ${props => props.theme.textColor};
  width: 100%;

  @media ${device.TABLET} {
    width: 65%;
  }

  @media ${device.MOBILE_LARGE} {
    font-size: 14px;
  }
`;
