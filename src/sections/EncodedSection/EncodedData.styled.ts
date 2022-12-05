import styled from "styled-components";
import Button from "../../components/Button";
import {
  CONTAINER_WIDTH,
  DESKTOP_SIDE_SPACE,
  MOBILE_SIDE_SPACE,
} from "../../helpers/variables";
import device from "../../helpers/device";

export const Wrapper = styled.section`
  box-sizing: border-box;
  margin: 0 ${MOBILE_SIDE_SPACE};
  margin-top: 35px;
  display: none;

  @media ${device.LAPTOP} {
    margin-left: ${DESKTOP_SIDE_SPACE};
    margin-right: ${DESKTOP_SIDE_SPACE};
  }

  @media ${device.MOBILE_SMALL} {
    display: block;
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
  border-radius: 20px;
  padding: 40px 40px 45px;
  box-shadow: 2px 4px 15px rgba(0, 0, 0, 0.25);

  @media ${device.TABLET} {
    padding: 60px 70px 45px;
  }
`;

export const Title = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 130%;
  color: ${props => props.theme.textColor};
  margin-bottom: 25px;

  @media ${device.MOBILE_LARGE} {
    font-size: 24px;
  }

  @media ${device.MOBILE_LARGE} {
    font-weight: 500;
  }
`;

export const CopyButton = styled(Button)`
  display: flex !important;
  gap: 10px;
`;

export const Textarea = styled.textarea`
  font-family: "PT Mono";
  padding: 10px 15px;
  border: 1px solid ${props => props.theme.borderColor};
  background: ${props => props.theme.bgLightColor};
  color: ${props => props.theme.textColor};
  border-radius: 5px;
  width: 100%;
  max-width: -webkit-fill-available;
  height: 130px;
  margin-bottom: 25px;
  outline: none;

  @media ${device.TABLET} {
    max-width: 800px;
  }
`;
