import React from "react";
import { IBanner } from "../../interfaces";

import * as s from "./Banner.styled";
import CloseIcon from "../Icons/Close";

const Banner = ({
  banner,
  className,
  hide,
  setHide,
}: {
  banner: IBanner;
  className?: string;
  hide: boolean;
  setHide: (v: boolean) => void;
}) => {
  const onClose = () => {
    setHide(true);
  };

  return (
    <s.BannerWrapper hide={hide} className={className}>
      <s.CloseButton onClick={onClose}>
        <CloseIcon />
      </s.CloseButton>
      <s.BannerLink
        href={banner.link}
        target="_blank"
        rel="noopener noreferrer"
      >
        <s.BannerImg src={banner.src} alt={banner.alt} />
        <s.BannerImgMobile src={banner.srcMob} alt={banner.alt} />
      </s.BannerLink>
    </s.BannerWrapper>
  );
};

export default Banner;
