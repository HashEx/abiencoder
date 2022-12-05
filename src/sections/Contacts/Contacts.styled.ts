import colors from "../../helpers/colors";
import device from "../../helpers/device";
import { underline } from "../../helpers/mixins";
import typography, { subheading } from "../../helpers/typography";
import {
  CONTAINER_WIDTH,
  DESKTOP_SIDE_SPACE,
  MOBILE_SIDE_SPACE,
} from "../../helpers/variables";
import lightBg from "../../images/contacts-bg-light.png";
import darkBg from "../../images/contacts-bg.png";
import qr from "../../images/tooltip-wechat.svg";

import styled from "styled-components";

interface IContract {
  mode: "light" | "dark";
}

export const Contacts = styled.section<IContract>`
  padding: 40px ${MOBILE_SIDE_SPACE};
  color: ${({ mode }) =>
    mode === "dark" ? colors.LIGHT_GREY : colors.LIGHT_BLACK};
  background-color: ${({ mode }) =>
    mode === "dark" ? colors.BLACK : colors.WHITE};
  background-image: ${({ mode }) =>
    mode === "dark" ? `url(${darkBg})` : `url(${lightBg})`};
  background-repeat: no-repeat;
  background-size: 100% 100%;

  @media ${device.TABLET} {
    padding: 50px ${MOBILE_SIDE_SPACE};
  }

  @media ${device.LAPTOP} {
    padding-top: 100px;
    padding-bottom: 75px;
    padding-left: ${DESKTOP_SIDE_SPACE};
    padding-right: ${DESKTOP_SIDE_SPACE};
  }

  @media ${device.DESKTOP} {
    padding-top: 90px;
    padding-bottom: 125px;
  }
`;

export const Container = styled.div`
  max-width: ${CONTAINER_WIDTH};
  margin: 0 auto;

  @media ${device.LAPTOP} {
    display: flex;
  }
`;

export const Title = styled.h2`
  margin-bottom: 24px;
  box-sizing: border-box;
  ${subheading};
  font-famiy: "Futura";
  width: calc((100% + 30px) / 12 * 10 - 30px);

  @media ${device.MOBILE_LARGE} {
    width: calc((100% + 30px) / 12 * 8 - 30px);
  }

  @media ${device.TABLET} {
    width: 100%;
  }

  @media ${device.LAPTOP} {
    width: calc((100% + 30px) / 12 * 7 - 30px);
    margin-right: calc((100% + 30px) / 12 * 1 + 30px);
    padding-left: 0;
  }

  @media ${device.DESKTOP} {
    width: calc((100% + 30px) / 12 * 5 - 30px);
    margin-right: calc((100% + 30px) / 12 * 2);
  }
`;

export const LinksContainer = styled.div`
  @media ${device.TABLET} {
    box-sizing: border-box;
    width: calc((100% + 30px) / 8 * 3 - 30px);
    padding-right: 40px;
    white-space: nowrap;
  }

  @media ${device.LAPTOP} {
    width: calc((100% + 30px) / 12 * 4 - 30px);
    padding-right: 0;
  }

  @media ${device.DESKTOP} {
    width: calc((100% + 30px) / 12 * 5);
  }
`;

export const Links = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 30px;

  @media ${device.MOBILE_LARGE} {
    justify-content: flex-start;
    flex-direction: row;
    width: 100%;
    margin-left: 0;
    margin-bottom: 40px;
    gap: 40px;
  }

  @media ${device.TABLET} {
    margin-bottom: 30px;
    gap: 100px;
  }

  @media ${device.LAPTOP} {
    flex-direction: column;
    align-items: flex-start;
    gap: 0;
    margin-left: 0;
    margin-right: 0;
    margin-bottom: 55px;
  }
`;

export const TooltipIllustration = styled.div`
  visibility: hidden;
  position: absolute;
  background-image: url(${qr});
  background-repeat: no-repeat;
  background-size: 135px 141px;
  width: 135px;
  height: 141px;
  bottom: 0;
  left: -15px;

  @media ${device.MOBILE_LARGE} {
    bottom: 5px;
  }

  @media ${device.TABLET} {
    bottom: 10px;
  }

  @media ${device.LAPTOP} {
    background-size: 156px 163px;
    width: 156px;
    height: 163px;
    bottom: 20px;
    left: -20px;
  }

  @media ${device.DESKTOP} {
    background-size: 167px 175px;
    width: 167px;
    height: 175px;
  }
`;

export const Link = styled.a<IContract>`
  display: flex;
  cursor: pointer;
  padding-top: 15px;
  padding-bitton: 10px;
  ${typography.BODY6};
  color: ${({ mode }) =>
    mode === "dark" ? colors.LIGHT_GREY : colors.LIGHT_BLACK};
  ${({ mode }) =>
    underline(mode === "dark" ? colors.LIGHT_GREY : colors.LIGHT_BLACK)};

  & svg {
    margin-top: 2px;
    margin-right: 10px;

    @media ${device.MOBILE_LARGE} {
      margin-top: 4px;
    }

    @media ${device.LAPTOP} {
      margin-top: 7px;
    }
  }

  @media ${device.MOBILE_LARGE} {
    margin: 0;
    ${typography.BODY5};
  }

  @media ${device.TABLET} {
    margin: 8px 0;
  }

  @media ${device.LAPTOP} {
    margin: 12px 0;
    ${typography.BODY3};
  }
`;

export const WeChatWrapper = styled.div`
  position: relative;

  &:hover ${TooltipIllustration} {
    visibility: visible;
  }
`;
