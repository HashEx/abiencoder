import colors from "../../helpers/colors";
import device from "../../helpers/device";
import styled from "styled-components";

export const TabsWrapper = styled.div`
  border-radius: 20px;
`;

export const Tabs = styled.ol`
  display: grid;
  align-items: center;
  list-style: none;
  cursor: pointer;
  padding: 0;
  margin: 0;
  border-radius: 20px;
  @media ${device.TABLET} {
    display: flex;
    background: none;
    border-radius: 0;
  }
`;

export const Tab = styled.li<{
  active?: boolean;
}>`
    white-space: nowrap;
    background-color: ${colors.BLACK};
    padding: 17px 26px;
    border-radius: 20px 20px 0px 0px;
    position: relative;
    font-family: 'Futura';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 120%;

    text-align: center;
    color: ${colors.WHITE};
    padding-bottom: 40px;
    positionL relative;
    top: 20px;
    ${({ active }) =>
      active
        ? ""
        : `box-shadow: inset 15px 15px 70px rgba(0,0,0,0.25); color: ${colors.DARK_GREY}; background-color: ${colors.LIGHT_BLACK};`};

    :first-child {
        order: 1;
        z-index: 10;
        position: initial;
        padding-bottom: 17px;

        ${({ active }) =>
          active
            ? ""
            : `box-shadow: inset 0px 10px 10px rgba(0,0,0,0.10); color: ${colors.DARK_GREY}; background-color: ${colors.LIGHT_BLACK};`};

    }

    @media ${device.MOBILE_LARGE} {
        font-size: 16px;
    }

    @media ${device.TABLET} {
        width: 25%;
        :first-child {
            order: 0;
            ${({ active }) =>
              active
                ? ""
                : `box-shadow: inset 0px 0px 10px rgba(0,0,0,0.25); color: ${colors.DARK_GREY}; background-color: ${colors.LIGHT_BLACK};`};
        }
        position: initial;
        padding-bottom: 17px;
        ${({ active }) =>
          active
            ? ""
            : `box-shadow: inset 0px 0px 10px rgba(0,0,0,0.25); color: ${colors.DARK_GREY}; background-color: ${colors.LIGHT_BLACK};`};
    }
`;

export const Content = styled.div`
  background-color: ${colors.BLACK};
  display: flex;
  border-radius: 0 0 20px 20px;
  padding: 40px 40px 45px;
  box-shadow: 2px 4px 15px rgba(0, 0, 0, 0.25);
  @media ${device.TABLET} {
    border-radius: 0 20px 20px 20px;
    padding: 45px 40px 45px 60px;
  }

  @media ${device.TABLET_LARGE} {
    border-radius: 0 20px 20px 20px;
    padding: 60px 50px 45px 70px;
  }
`;
