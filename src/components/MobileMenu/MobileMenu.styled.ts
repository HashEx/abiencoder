import colors from "../../helpers/colors";
import device from "../../helpers/device";
import { roundedButton, underline } from "../../helpers/mixins";
import typography from "../../helpers/typography";
import headerArrow from "../../images/header-arrow.svg";
import hash from "../../images/hash.svg";
import arrow from "../../images/arrow-white.svg";

import styled from "styled-components";

export const MobileMenu = styled.div`
  @media ${device.LAPTOP} {
    display: none;
  }
`;

export const Menu = styled.aside<{ opened: boolean }>`
  background-color: ${colors.BLACK};
  left: ${({ opened }) => (opened ? 0 : "-100%")};
  box-sizing: border-box;
  width: 100%;
  min-height: 100vh;
  position: fixed;
  top: 0;
  transition: all 0.5s ease-in-out;
  z-index: 11;
`;

export const MenuHeader = styled.div`
  display: flex;
  align-items: center;
  height: 60px;
  padding-left: 16px;

  @media ${device.MOBILE_LARGE} {
    height: 75px;
  }

  @media ${device.TABLET} {
    height: 80px;
  }

  @media ${device.LAPTOP} {
    height: 90px;
    padding: 0;
  }
`;

export const GoBackLink = styled.button<{ visible: boolean }>`
  width: 20px;
  height: 20px;
  border: none;
  background-image: url(${headerArrow});
  background-color: transparent;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  cursor: pointer;
  transform: ${({ visible }) => `translateX(${visible ? 0 : "-40px"})`};
  margin-right: ${({ visible }) => (visible ? "10px" : "-20px")};
  transition: 0.5s ease-in-out;
`;

export const Hash = styled.div`
  width: 20px;
  height: 20px;
  background-image: url(${hash});
  background-repeat: no-repeat;
  background-position: 50% 50%;
`;

export const MenuItemsContainer = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MenuItem = styled.li<{ hasArrow?: boolean; active?: boolean }>`
  margin: 6px 0;
  color: ${({ active }) =>
    active ? colors.GREEN_SECONDARY : colors.LIGHT_GREY};
  cursor: pointer;
  ${typography.BODY5};
  font-weight: 500;
  text-transform: capitalize;

  &:after {
    content: "";
    content: ${({ hasArrow }) => (hasArrow ? "''" : "none")};
    display: inline-block;
    width: 11px;
    height: 9px;
    margin-left: 10px;
    background-image: url(${arrow});
    background-repeat: no-repeat;
    transition: 0.3s;
  }

  &:hover:after {
    transform: translateX(5px);
  }

  &:last-child {
    margin-top: 25px;
  }
`;

export const MenuTitleLink = styled.a`
  color: ${colors.GREEN_SECONDARY};
`;

export const ButtonContainer = styled.div`
  margin-top: 50px;
`;

export const MenuItemLink = styled.a<{ hasArrow?: boolean }>`
  color: ${colors.WHITE};
  ${typography.BODY6};
  font-weight: 400;
  ${({ hasArrow }) => !hasArrow && underline(colors.GREEN_SECONDARY)};

  &:after {
    content: "";
    content: ${({ hasArrow }) => (hasArrow ? "''" : "none")};
    display: inline-block;
    width: 8px;
    height: 6px;
    margin-left: 10px;
    margin-bottom: 2px;
    background-image: url(${arrow});
    background-repeat: no-repeat;
    background-size: cover;
    transition: 0.3s;
  }

  &:hover:after {
    transform: translateX(5px);
  }
`;

export const RestMenuItemsContainer = styled.div`
  margin-top: 50px;

  ${MenuItem}:last-child {
    margin-top: 10px;
  }
`;

export const SubmenuItemsContainer = styled.nav<{ opened: boolean }>`
  background: ${colors.BLACK};
  position: fixed;
  z-index: 100;
  top: 60px;
  left: ${({ opened }) => (opened ? 0 : "-100%")};
  width: 100%;
  height: 100%;
  transition: 0.5s ease-in-out;

  ${MenuItem}:first-child {
    margin-bottom: 16px;
  }
`;

export const Button = styled.button<{ closeBtn?: boolean }>`
  display: block;
  position: relative;
  z-index: 100;
  width: 18px;
  height: 14px;
  padding: 0;
  border: none;
  cursor: pointer;
  background: transparent;
`;

export const ButtonLine = styled.span<{ opened: boolean }>`
  position: absolute;
  top: ${({ opened }) => (opened ? "1px" : 0)};
  left: ${({ opened }) => (opened ? "3px" : 0)};
  display: block;
  width: 100%;
  height: 2px;
  border-radius: 2px;
  background: ${({ opened }) =>
    opened ? colors.GREEN_PRIMARY : colors.LIGHT_GREY};
  transform-origin: left center;
  transition: 0.5s ease-in-out;
  transform: ${({ opened }) => (opened ? "rotate(45deg)" : "none")};

  &:nth-child(2) {
    top: 7px;
    left: 0;
    width: ${({ opened }) => (opened ? 0 : "100%")};
    opacity: ${({ opened }) => (opened ? 0 : 1)};
    transform: none;
  }

  &:nth-child(3) {
    top: 14px;
    left: ${({ opened }) => (opened ? "3px" : 0)};
    transform: ${({ opened }) => (opened ? "rotate(-45deg)" : "none")};
  }
`;

export const RequestLink = styled.a`
  ${typography.BODY6};
  padding: 12px 22px;
  border-radius: 30px;
  ${roundedButton};
  background-color: ${colors.BLACK};
  color: ${colors.LIGHT_GREY};
  transition: 0.3s;
  text-transform: none;

  @media ${device.TABLET} {
    ${typography.BODY5};
    padding: 15px 30px;
  }
`;
