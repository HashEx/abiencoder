const size = {
  MOBILE_SMALL: "320px",
  MOBILE_LARGE: "480px",
  TABLET: "640px",
  TABLET_LARGE: "860px",
  LAPTOP: "1020px",
  LAPTOP_LARGE: "1200px",
  DESKTOP: "1440px",
  DESKTOP_LARGE: "1920px",
};

const device = {
  MOBILE_SMALL: `(min-width: ${size.MOBILE_SMALL})`,
  MOBILE_LARGE: `(min-width: ${size.MOBILE_LARGE})`,
  TABLET: `(min-width: ${size.TABLET})`,
  TABLET_LARGE: `(min-width: ${size.TABLET_LARGE})`,
  LAPTOP: `(min-width: ${size.LAPTOP})`,
  LAPTOP_LARGE: `(min-width: ${size.LAPTOP_LARGE})`,
  DESKTOP: `(min-width: ${size.DESKTOP})`,
  DESKTOP_LARGE: `(min-width: ${size.DESKTOP_LARGE})`,
};

export default device;
