import device from "../../helpers/device";

import styled from "styled-components";
import Button from "../Button";
import Banner from "../Banner";

export const TabTitle = styled.h2`
  font-style: normal;
  line-height: 130%;
  color: ${props => props.theme.textColor};
  margin-bottom: 25px;
  text-align: center;
  display: none;

  @media ${device.TABLET} {
    font-weight: 400;
    font-size: 16px;
    display: inline-block;
  }

  @media ${device.LAPTOP} {
    font-weight: 500;
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
  margin-top: 50px;

  @media ${device.TABLET} {
    align-items: flex-start;
    margin-top: 0;
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

export const TopBanner = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin-bottom: 20px;

  @media ${device.TABLET} {
    display: none;
  }
`;

export const BannerColumn = styled(Banner)`
  width: 100%;
  display: none;

  @media ${device.TABLET} {
    display: flex;
  }
`;

export const Row = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  width: 100%;
  margin-bottom: 30px;

  @media ${device.MOBILE_LARGE} {
    align-items: flex-start;
  }

  @media ${device.LAPTOP_LARGE} {
    flex-direction: row;
    gap: 40px;
    align-items: flex-end;
    margin-bottom: 20px;
  }
`;
