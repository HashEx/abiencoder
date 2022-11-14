import colors from "../../helpers/colors";
import device from "../../helpers/device";

import styled from "styled-components";
import Button from "../Button";

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

export const AddButton = styled(Button)`
  display: flex !important;
  gap: 10px;
  margin-top: 10px;

  @media ${device.TABLET} {
    margin-top: 5px;
  }
`;

export const ManualParameters = styled.div`
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
