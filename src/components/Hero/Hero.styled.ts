import colors from "../../helpers/colors";
import device from "../../helpers/device";
import typography from "../../helpers/typography";
import {
  CONTAINER_WIDTH,
  DESKTOP_SIDE_SPACE,
  MOBILE_SIDE_SPACE,
} from "../../helpers/variables";
import img from "../../images/analytex-hero-bg.png";
import styled from "styled-components";

export const Hero = styled.section`
  position: relative;
  box-sizing: border-box;
  padding-top: 40px;
  padding-bottom: 300px;
  padding-left: ${MOBILE_SIDE_SPACE};
  padding-right: ${MOBILE_SIDE_SPACE};
  background: linear-gradient(180deg, rgba(19, 19, 19, 0.55) 0%, #131313 100%);
  background-image: url(${img});
  background-repeat: no-repeat;
  background-size: cover;

  @media ${device.MOBILE_LARGE} {
    padding-left: 40px;
    padding-right: 40px;
  }

  @media ${device.TABLET} {
    padding-top: 45px;
    padding-bottom: 300px;
    padding-left: 50px;
    padding-right: 50px;
  }

  @media ${device.LAPTOP} {
    padding-top: 60px;
    padding-left: ${DESKTOP_SIDE_SPACE};
    padding-right: ${DESKTOP_SIDE_SPACE};
    padding-bottom: 280px;
  }

  @media ${device.DESKTOP} {
    padding-top: 130px;
    padding-bottom: 250px;
  }
`;

export const Container = styled.div`
  max-width: ${CONTAINER_WIDTH};
  margin: 0 auto;
`;

export const Content = styled.div`
  position: relative;
  color: ${colors.WHITE};
  overflow: hidden;
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: flex-end;
`;

export const Title = styled.h1`
  text-align: left;
  color: ${colors.WHITE};
  ${typography.H4};
  line-height: 120%;
  font-family: "Futura";

  @media ${device.MOBILE_LARGE} {
    ${typography.H3};
  }

  @media ${device.TABLET} {
    ${typography.H2};
  }

  @media ${device.DESKTOP} {
    ${typography.H1};
  }
`;

export const Summary = styled.h2`
  margin-top: 20px;
  margin-bottom: 15px;
  ${typography.BODY5};
  line-height: 130%;
  text-align: left;
  font-weight: 500;

  @media ${device.MOBILE_LARGE} {
    margin-top: 30px;
    ${typography.BODY4};
  }

  @media ${device.TABLET} {
    margin-top: 35px;
    margin-bottom: 60px;
    ${typography.BODY3};
  }

  @media ${device.LAPTOP} {
    max-width: 620px;
    ${typography.BODY2};
  }

  @media ${device.DESKTOP} {
    margin-top: 30px;
    margin-bottom: 90px;
    ${typography.BODY1};
  }
`;
