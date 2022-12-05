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

export const Link = styled.a`
  text-decoration: underline;
  color: ${props => props.theme.textColor};
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
  padding: 0 0 45px 0;

  @media ${device.TABLET} {
    padding: 40px 20px 70px;
  }

  @media ${device.LAPTOP} {
    padding: 60px 70px 110px;
  }
`;

export const Title = styled.h3`
  font-family: "Futura";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 120%;
  color: ${props => props.theme.textColor};
  margin-bottom: 20px;

  @media ${device.TABLET} {
    font-size: 24px;
  }

  @media ${device.MOBILE_LARGE} {
    font-size: 24px;
  }
`;

export const SubTitle = styled.span`
  font-family: "Futura";
  font-style: normal;
  font-weight: 700;
  line-height: 120%;
  font-size: 16px;
  color: ${props => props.theme.textColor};
  margin-bottom: 20px;

  @media ${device.TABLET} {
    font-size: 18px;
  }
`;

export const Column = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;

  justify-content: center;
  width: 100%;
`;

export const Row = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  gap: 0;

  @media ${device.TABLET} {
    flex-direction: row;
    align-items: center;
    gap: 0;
  }

  @media ${device.MOBILE_LARGE} {
    gap: 17px;
  }
`;

export const FirstRow = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 35px;
  width: 100%;
  gap: 35px;

  @media ${device.TABLET} {
    flex-direction: row;
    gap: 10%;
    margin-bottom: 55px;
  }
`;

export const Text = styled.p`
  text-align: left;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 130%;
  max-width: max-content;
  color: ${props => props.theme.textColor};

  @media ${device.TABLET} {
    font-size: 16px;
    max-width: 450px;
  }
`;

export const ContactText = styled.p`
  text-align: left;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 130%;
  color: ${props => props.theme.textColor};
  margin-right: 10px;

  @media ${device.TABLET} {
    font-size: 16px;
  }
`;
