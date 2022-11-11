import device from "./device";

const typography = {
  H1: `font-size: 70px`,
  H2: `font-size: 50px`,
  H3: `font-size: 45px`,
  H4: `font-size: 30px`,
  H5: `font-size: 28px`,
  H6: `font-size: 24px`,
  H7: `font-size: 22px`,
  H8: `font-size: 18px`,
  H9: `font-size: 16px`,
  H10: `font-size: 14px`,
  BODY1: `font-size: 24px`,
  BODY2: `font-size: 22px`,
  BODY3: `font-size: 20px`,
  BODY4: `font-size: 18px`,
  BODY5: `font-size: 16px`,
  BODY6: `font-size: 14px`,
  CAPTION1: `font-size: 12px`,
  CAPTION2: `font-size: 10px`,
};

export const heading = `
    ${typography.H4}
    line-height: 120%;
    font-family: 'Futura';

    @media ${device.MOBILE_LARGE} {
        ${typography.H3};
    }

    @media ${device.TABLET} {
        ${typography.H2};
    }

    @media ${device.DESKTOP} {
        ${typography.H1};
    }
`;

export const subheading = `
    ${typography.H6};
    line-height: 120%;
    font-family: 'Futura';

    @media ${device.MOBILE_LARGE} {
        ${typography.H5};
    }

    @media ${device.TABLET} {
        ${typography.H4};
    }

    @media ${device.LAPTOP} {
        ${typography.H3};
    }
`;

export default typography;
