import colors from "../../helpers/colors";
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

  @media ${device.LAPTOP_LARGE} {
    margin-left: ${DESKTOP_SIDE_SPACE};
    margin-right: ${DESKTOP_SIDE_SPACE};
  }
`;

export const Companies = styled.div`
  box-sizing: border-box;
  background-color: ${colors.WHITE};
  border-radius: 25px;
  padding: 35px 40px;
  flex-wrap: wrap;
  display: flex;
  flex-direction: column;

  width: 100%;
  row-gap: 40px;
  align-items: center;
  justify-content: space-between;

  @media ${device.MOBILE_LARGE} {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 1080px) {
    display: flex;
    flex-direction: row;

  }
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

  background-color: ${props => props.theme.bgColor};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 60px 30px 45px;
  box-shadow: 2px 4px 15px rgba(0, 0, 0, 0.25);
  border-radius: 20px;

  padding: 25px 25px 50px;

  @media ${device.TABLET} {
    padding: 60px 30px 80px;
  }
`;

export const Title = styled.span`
  margin-left: 40px;
  font-family: "Futura";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 120%;
  color: ${props => props.theme.textColor};
  margin-bottom: 40px;

  @media ${device.TABLET} {
    font-size: 24px;
    margin-bottom: 60px;
  }
`;

export const CompanyImg = styled.img`
  height: 22px;

  @media ${device.MOBILE_LARGE} {
    height: 30px;
  }

  @media ${device.TABLET} {
    height: auto;
  }
`;
