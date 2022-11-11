import device from "../../helpers/device";
import styled from "styled-components";

export const Main = styled.main`
  margin-top: 60px;

  @media ${device.MOBILE_LARGE} {
    margin-top: 75px;
  }

  @media ${device.TABLET} {
    margin-top: 80px;
  }

  @media ${device.LAPTOP} {
    margin-top: 90px;
  }
`;
