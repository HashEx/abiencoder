import colors from "../../helpers/colors";
import device from "../../helpers/device";

import styled from "styled-components";

export const ListElement = styled.div`
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
    gap: 40px;
    flex-direction: row;
    align-items: flex-end;
    margin-bottom: 25px;
  }
`;

export const Error = styled.label`
  position: absolute;
  margin-top: 5px;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 130%;
  -webkit-line-clamp: 1;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-align: start;
  align-items: center;
  color: ${colors.REQUIRED_ERROR};
`;

export const Input = styled.div`
  position: relative;
  width: 100%;
`;
