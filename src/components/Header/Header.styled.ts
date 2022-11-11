import colors from "../../helpers/colors";
import device from "../../helpers/device";
import { roundedButton, underline } from "../../helpers/mixins";
import typography from "../../helpers/typography";
import { CONTAINER_WIDTH, DESKTOP_SIDE_SPACE } from "../../helpers/variables";
import styled, { css, keyframes } from "styled-components";

const animateDropdown = keyframes`
    0% {
        opacity: 0;
        transform: rotateX(-90deg);
    }

    50% {
        transform: rotateX(-20deg);
    }

    100% {
        opacity: 1;
        transform: rotateX(0deg);
    }
`;

function applyAnimationDuration() {
  let styles = "";

  for (let i = 0; i < 20; i += 1) {
    styles += `
            &:nth-child(${i + 1}) {
                animation-delay: ${i * 30}ms;
            }
       `;
  }

  return css`
    ${styles}
  `;
}

export const Header = styled.header`
  top: 0;
  position: fixed;
  z-index: 100;
  display: flex;
  box-sizing: border-box;
  width: 100%;
  height: 60px;
  padding-left: 16px;
  padding-right: 16px;
  background-color: ${colors.BLACK};

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

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: ${CONTAINER_WIDTH};
  margin: 0 auto;

  @media ${device.LAPTOP} {
    padding: 0 ${DESKTOP_SIDE_SPACE};
  }
`;

export const LogoWrapper = styled.a`
  width: 87px;
  height: 22px;
  font-size: 0;

  @media ${device.MOBILE_LARGE} {
    width: 120px;
    height: 30px;
  }

  @media ${device.LAPTOP} {
    width: 144px;
    height: 36px;
  }

  @media ${device.DESKTOP} {
    width: 160px;
    height: 40px;
  }
`;

export const Navigation = styled.nav`
  display: none;

  @media ${device.LAPTOP} {
    display: block;
    height: 100%;
  }
`;

export const MenuItemsContainer = styled.ul`
  display: flex;
  height: 100%;
  margin: 0 -14px;

  @media ${device.DESKTOP} {
    margin: 0 -32px;
  }
`;

export const Dropdown = styled.ul`
  position: absolute;
  z-index: 10;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
`;

export const DropdownItem = styled.li`
  padding-top: 10px;
  padding-bottom: 10px;
  display: none;
  padding-left: 24px;
  padding-right: 24px;
  white-space: nowrap;
  text-align: center;
  ${applyAnimationDuration};
  animation-name: ${animateDropdown};
  transform-origin: top center;
  animation-fill-mode: forwards;
  opacity: 0;
  background-color: ${colors.BLACK};
`;

export const MenuDropdownLink = styled.a`
  display: inline-block;
  position: relative;
  ${typography.BODY6};
  color: rgba(241, 241, 241, 0);
  ${underline(colors.GREEN_SECONDARY)};
  transition: 0.6s color;
`;

export const MenuItemLink = styled.a`
  color: rgba(241, 241, 241, 1);

  &:hover {
    color: ${colors.GREEN_SECONDARY};
  }
`;

export const MenuItem = styled.li`
  display: flex;
  align-items: center;
  position: relative;
  padding: 0 14px;
  color: ${colors.WHITE};
  text-transform: capitalize;
  transition: 0.3s;

  @media ${device.DESKTOP} {
    padding: 0 32px;
  }

  &:hover {
    color: ${colors.GREEN_SECONDARY};

    ${DropdownItem} {
      display: block;
    }

    ${MenuDropdownLink} {
      color: rgba(241, 241, 241, 1);
    }
  }
`;

export const LetsTalkLink = styled.a`
  ${typography.BODY6};
  padding: 12px 16px;
  border-radius: 24px;
  ${roundedButton};
  background-color: ${colors.BLACK};
  color: ${colors.LIGHT_GREY};
  transition: 0.3s;

  @media ${device.DESKTOP} {
    ${typography.BODY5};
  }

  & svg {
    fill: ${colors.LIGHT_GREY};
    margin-right: 10px;
    transition: 0.3s;
  }
`;
