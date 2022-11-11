import colors from "../../helpers/colors";
import device from "../../helpers/device";
import { underline } from "../../helpers/mixins";
import typography from "../../helpers/typography";
import {
  CONTAINER_WIDTH,
  DESKTOP_SIDE_SPACE,
  MOBILE_SIDE_SPACE,
} from "../../helpers/variables";
import img from "../../images/dsamember-badge.svg";

import styled from "styled-components";

export const Footer = styled.footer`
  position: relative;
  padding-top: 24px;
  padding-bottom: 40px;
  padding-left: ${MOBILE_SIDE_SPACE};
  padding-right: ${MOBILE_SIDE_SPACE};
  background-color: ${colors.BLACK};

  @media ${device.LAPTOP} {
    padding-bottom: 60px;
    padding-left: ${DESKTOP_SIDE_SPACE};
    padding-right: ${DESKTOP_SIDE_SPACE};
  }

  @media ${device.DESKTOP} {
    padding-top: 70px;
    padding-bottom: 70px;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-sizing: border-box;
  width: 100%;
  max-width: ${CONTAINER_WIDTH};
  margin: 0 auto;

  @media ${device.DESKTOP} {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const TopContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  @media ${device.MOBILE_LARGE} {
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 40px;
  }

  @media ${device.LAPTOP} {
    margin-bottom: 40px;
  }

  @media ${device.DESKTOP} {
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    width: auto;
    margin-bottom: 0;
  }
`;

export const LogoWrapper = styled.a`
  display: inline-block;
  height: 13px;
  font-size: 0;

  @media ${device.MOBILE_LARGE} {
    width: 136px;
    height: 20px;
  }
`;

export const PoliciesDesktop = styled.ul`
  display: none;

  @media ${device.LAPTOP} {
    display: block;
    height: 100%;
  }
`;

export const Navigation = styled.nav`
  display: grid;
  grid-template-columns: repeat(2, minmax(min-content, max-content));
  grid-template-rows: repeat(4, auto);
  grid-column-gap: 16px;
  justify-content: space-between;

  @media ${device.MOBILE_LARGE} {
    padding: 0 40px;
  }

  @media ${device.TABLET} {
    padding: 0;
    grid-template-columns: repeat(3, minmax(min-content, max-content));
    grid-template-rows: repeat(2, auto);
    grid-row-gap: 40px;
  }

  @media ${device.LAPTOP} {
    grid-template-columns: repeat(5, minmax(min-content, max-content));
    grid-row-gap: 0;
  }

  @media ${device.DESKTOP} {
    grid-column-gap: 70px;
  }
`;

export const Audits = styled.div`
  grid-row-start: 1;
  grid-row-end: 2;
`;

export const Chains = styled.div`
  @media ${device.TABLET} {
    margin-top: 34px;
  }
`;

export const AuditsTypes = styled.div`
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 2;
`;

export const Products = styled.div`
  grid-row-start: 2;
  grid-row-end: 3;

  @media ${device.TABLET} {
    grid-column-start: 3;
    grid-column-end: 4;
    grid-row-start: 1;
    grid-row-end: 2;
  }

  @media ${device.LAPTOP} {
    grid-column-start: 4;
    grid-column-end: 5;
    grid-row-start: 1;
    grid-row-end: 2;
  }
`;

export const Services = styled.div`
  grid-row-start: 3;
  grid-row-end: 4;

  @media ${device.TABLET} {
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 2;
    grid-row-end: 3;
  }

  @media ${device.LAPTOP} {
    grid-column-start: 3;
    grid-column-end: 4;
    grid-row-start: 1;
    grid-row-end: 2;
  }
`;

export const Company = styled.div`
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 2;
  grid-row-end: 3;

  @media ${device.TABLET} {
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 2;
    grid-row-end: 3;
  }

  @media ${device.LAPTOP} {
    grid-column-start: 5;
    grid-column-end: 6;
    grid-row-start: 1;
    grid-row-end: 2;
  }
`;

export const PoliciesMobile = styled.div`
  grid-column-start: 2;
  grid-column-end: 3;
  align-self: end;

  @media ${device.MOBILE_LARGE} {
    grid-row-start: 3;
    grid-row-end: 4;
    align-self: auto;
    margin-top: 30px;
  }

  @media ${device.TABLET} {
    grid-column-start: 3;
    grid-column-end: 4;
    grid-row-start: 2;
    grid-row-end: 3;
    margin-top: 0;
  }

  @media ${device.LAPTOP} {
    display: none;
  }
`;

export const Block = styled.div`
  margin-top: 30px;

  @media ${device.TABLET} {
    margin-top: 0;
  }
`;

export const Title = styled.h3`
  margin-bottom: 24px;
  ${typography.H9};
  font-weight: 500;
  text-transform: uppercase;
  color: ${colors.GREY};
`;

export const TitleLink = styled.a`
  color: ${colors.GREY};
`;

export const Links = styled.ul`
  margin: -10px 0;
`;

export const LinksItem = styled.li`
  margin: 10px 0;
  text-transform: capitalize;
`;

export const Link = styled.a`
  color: ${colors.LIGHT_GREY};
  ${typography.CAPTION1};
  ${underline(colors.GREEN_SECONDARY)}
`;

export const PolicyList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

export const PolicyLinks = styled.ul`
  margin: -10px 0;
  margin-bottom: auto;

  @media ${device.TABLET} {
    margin-top: 0;
  }

  @media ${device.LAPTOP} {
    display: flex;
    align-items: center;
    margin: 0 -36px;
  }

  @media ${device.DESKTOP} {
    flex-direction: column;
    margin: 0;
    align-items: flex-start;
  }
`;

export const Policy = styled.li`
  margin: 10px 0;
  color: ${colors.GREY};
  ${typography.CAPTION1};

  @media ${device.LAPTOP} {
    display: flex;
    margin: 0 36px;
  }

  @media ${device.DESKTOP} {
    margin: 5px 0;
  }
`;

export const PolicyLink = styled.a`
  color: ${colors.GREY};
  ${underline(colors.GREEN_SECONDARY)}
`;

export const AdressBlock = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: auto;
  line-height: 120%;
  margin-top: 36px;
  gap: 15px;

  @media ${device.MOBILE_LARGE} {
    gap: 11px;
    align-items: flex-start;
  }

  @media ${device.TABLET} {
    gap: 15px;
  }

  @media ${device.LAPTOP} {
    position: absolute;
    top: calc(100% - 105px);
    left: calc(100% - 325px);
    gap: 10px;
    align-items: flex-end;
  }

  @media ${device.DESKTOP} {
    position: static;
    margin-top: 0;
    gap: 20px;
  }
`;

export const CompanyAdress = styled.p`
  color: ${colors.GREY};
  ${typography.CAPTION2};
`;

export const Hyphenation = styled.br`
  display: none;

  @media ${device.MOBILE_LARGE} {
    display: block;
  }

  @media ${device.LAPTOP} {
    display: none;
  }
`;

export const DesktopHyphenation = styled.br`
  display: none;

  @media ${device.DESKTOP} {
    display: block;
  }
`;

export const DSAMemberBadge = styled.a`
  width: 115px;
  height: 32px;
  background-image: url(${img});
`;
