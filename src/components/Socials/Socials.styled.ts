import colors from "../../helpers/colors";
import device from "../../helpers/device";
import styled from "styled-components";

export const Socials = styled.ul`
  display: flex;
  margin: 0 -8px;
  margin-top: 20px;

  @media ${device.MOBILE_LARGE} {
    margin-top: 0;
  }

  @media ${device.DESKTOP} {
    margin: 35px -8px;
  }
`;

export const Social = styled.li`
  margin: 0 8px;

  & svg circle,
  svg path,
  svg g {
    transition: 0.3s;
  }

  &:hover svg circle {
    fill: ${colors.GREEN_SECONDARY};
  }

  &:hover svg path,
  &:hover svg g {
    fill: ${colors.BLACK};
  }
`;
