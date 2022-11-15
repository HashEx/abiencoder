import device from "../../helpers/device";
import styled from "styled-components";

export const BannerImg = styled.img`
  width: 100%;
  display: none;

  @media ${device.TABLET} {
    display: block;
  }
`;

export const BannerImgMobile = styled.img`
  width: 100%;
  display: block;

  @media ${device.TABLET} {
    display: none;
  }
`;

export const BannerLink = styled.a``;

export const BannerWrapper = styled.div<{
  hide: boolean;
}>`
  display: ${(props) => (props.hide ? "none !important" : "block")};
  max-width: 340px;
  position: relative;
`;

export const CloseButton = styled.button`
  padding: 0;
  background: transparent;
  width: max-content;
  border: 0;
  position: absolute;
  top: 10px;
  height: 20px;

  right: 10px;
  z-index: 10;
  cursor: pointer;

  > svg {
    width: 20px;
    height: 20px;

    @media ${device.TABLET_LARGE} {
      height: 24px;
      width: 24px;
    }
  }

  @media ${device.TABLET_LARGE} {
    height: 24px;
  }

  > svg > path {
    opacity: 0.5;
  }

  &:hover {
    > svg > path {
      opacity: 1;
    }
  }
`;
