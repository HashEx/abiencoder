import colors from "../../helpers/colors";
import device from "../../helpers/device";
import { hoverLink } from "../../helpers/mixins";
import typography from "../../helpers/typography";
import {
  CONTAINER_WIDTH,
  DESKTOP_SIDE_SPACE,
  MOBILE_SIDE_SPACE,
} from "../../helpers/variables";
import img from "../../images/service-other-bg.jpeg";
import arrow from "../../images/arrow-white.svg";
import arrowGreenSecondary from "../../images/arrow-green-secondary.svg";
import arrowGreen from "../../images/arrow-green.svg";

import styled from "styled-components";

export const Container = styled.div`
  max-width: ${CONTAINER_WIDTH};
  margin: 0 auto;
  padding: 0 ${MOBILE_SIDE_SPACE};

  @media ${device.LAPTOP} {
    padding: 0 ${DESKTOP_SIDE_SPACE};
  }

  @media ${device.DESKTOP} {
    padding: 0;
  }
`;

export const OtherServicesBlock = styled.section<{ hasTopOffset?: boolean }>`
  background-image: url(${img});
  background-repeat: no-repeat;
  background-size: cover;
  padding: 30px 0 70px;

  @media ${device.TABLET} {
    padding: 60px 0 65px;
  }

  @media ${device.LAPTOP} {
    padding: 90px 0 70px;
    padding-top: ${({ hasTopOffset }) => (hasTopOffset ? "170px" : "90px")};
  }
`;

export const OtherTitle = styled.h2`
  color: ${colors.WHITE};
  ${typography.H4};
  font-family: "Futura";

  @media ${device.MOBILE_LARGE} {
    ${typography.H3};
  }
`;

export const OtherItems = styled.div`
  @media ${device.LAPTOP} {
    display: flex;
    align-items: stretch;
    justify-content: space-between;
    height: 100%;
    flex-grow: 1;
  }
`;

export const OtherItem = styled.div`
  border: 1px solid ${colors.GREEN_SECONDARY};
  border-radius: 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 30px;
  padding: 25px 20px;

  @media ${device.TABLET} {
    padding: 40px 30px;
  }

  &:last-child {
    margin-bottom: 0;
  }

  @media ${device.LAPTOP} {
    width: calc((100% - 80px) / 3);
    min-height: 285px;
    margin-right: 40px;
    margin-bottom: 0;

    &:nth-child(3n) {
      margin-right: 0;
    }
  }
`;

export const OtherItemTitle = styled.h3`
  color: ${colors.WHITE};
  ${typography.BODY3};
  margin-bottom: 25px;
  font-family: "Futura";

  @media ${device.MOBILE_LARGE} {
    ${typography.H7};
  }

  @media ${device.LAPTOP} {
    min-height: 60px;
  }

  @media ${device.DESKTOP} {
    min-height: 0;
  }
`;

export const OtherItemText = styled.div`
  line-height: 130%;
  ${typography.BODY6};
  color: ${colors.LIGHT_GREY};

  @media ${device.MOBILE_LARGE} {
    ${typography.BODY5};
  }
`;

export const OtherItemLink = styled.a`
  align-self: flex-end;
  ${typography.BODY6};
  color: ${colors.WHITE};
  ${hoverLink(colors.GRADIENT)};
  margin-top: 20px;

  &:after {
    content: "";
    display: inline-block;
    width: 11px;
    height: 9px;
    margin-left: 5px;
    background-size: contain;
    background-image: url(${arrow});
    transition: transform 0.3s;
  }

  &:hover:after {
    transform: translateX(3px);
  }

  &:focus {
    color: ${colors.GREEN_PRIMARY};

    &:after {
      background-image: url(${arrowGreenSecondary});
    }
  }

  @media ${device.MOBILE_LARGE} {
    align-self: flex-start;
  }
`;

export const OtherButton = styled.div`
  text-align: center;
  margin-top: 30px;

  @media ${device.MOBILE_LARGE} {
    margin-top: 45px;
  }

  @media ${device.TABLET} {
    margin-top: 70px;
  }
`;

export const TopContainer = styled.div`
  margin-bottom: 35px;

  @media ${device.MOBILE_LARGE} {
    margin-bottom: 50px;
  }

  @media ${device.TABLET} {
    margin-bottom: 65px;
  }

  @media ${device.LAPTOP} {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 45px;
  }

  @media ${device.DESKTOP} {
    margin-bottom: 65px;
  }
`;

export const OurServicesTopContainer = styled.div`
  display: flex;
  gap: 40px;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 35px;
  margin-top: 10px;

  @media ${device.MOBILE_LARGE} {
    margin-top: 30px;
    margin-bottom: 50px;
  }

  @media ${device.TABLET} {
    margin-bottom: 65px;
  }

  @media ${device.LAPTOP} {
    margin-top: 0;
    margin-bottom: 45px;
  }

  @media ${device.DESKTOP} {
    margin-bottom: 65px;
  }
`;

export const ViewProductsLinkContainer = styled.div`
  display: none;
  white-space: nowrap;

  @media ${device.MOBILE_LARGE} {
    display: block;
    position: static;
    transform: none;
  }
`;

export const ViewProductsLinkBottom = styled.div`
  display: block;
  white-space: nowrap;
  text-align: center;
  margin-top: 35px;

  @media ${device.MOBILE_LARGE} {
    display: none;
  }
`;

export const ViewProductsLink = styled.a`
  cursor: pointer;
  ${typography.BODY6};
  color: ${colors.GREEN_SECONDARY};
  ${hoverLink(colors.GRADIENT)};
  transition: 0.3s;

  @media ${device.MOBILE_LARGE} {
    ${typography.BODY4};
  }

  &:after {
    content: "";
    display: inline-block;
    width: 11px;
    height: 9px;
    margin-left: 5px;
    background-size: contain;
    background-image: url(${arrowGreen});
    transition: 0.3s;
  }

  &:hover {
    color: ${colors.WHITE};

    &:after {
      background-image: url(${arrow});
      transform: translateX(3px);
    }
  }

  &:focus {
    color: ${colors.GREEN_PRIMARY};
  }
`;
