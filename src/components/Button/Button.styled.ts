import colors from "../../helpers/colors";
import device from "../../helpers/device";
import typography from "../../helpers/typography";
import styled from "styled-components";

export const Arrow = styled.span`
  display: inline-block;
  margin-left: 10px;
  transition: transform 0.3s;
`;

interface ButtonProps {
  variant?: "primary" | "outlined" | "pink";
  disabled?: boolean;
}

export const ButtonLink = styled.a<ButtonProps>`
  position: relative;
  z-index: 1;
  cursor: pointer;
  display: inline-block;
  padding: 12px 22px;
  border-radius: 30px;
  color: ${({ variant }) =>
    variant === "pink" ? `${colors.WHITE}` : `${colors.MIDNIGHT_BLACK};`};
  background: ${({ variant }) => {
    if (variant === "pink") return colors.PURPLE_GRADIENT;
    if (variant === "outlined") return colors.WHITE;
    return colors.GRADIENT;
  }};
  ${typography.BODY6};
  font-weight: 500;
  transition: 0.3s;
  pointer-events: ${({ disabled }) => (disabled ? "none" : "all")};

  @media ${device.TABLET} {
    padding: 15px 30px;
    ${({ variant }) =>
      variant === "pink" ? `${typography.BODY4}` : `${typography.BODY5}`};
    font-weight: 400;
  }

  &:before,
  &:after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }

  &:before {
    margin: -2px;
    border-radius: inherit;
    background: ${({ variant }) =>
      variant === "pink" ? colors.PURPLE_GRADIENT : colors.GRADIENT};
    padding: 2px;
    -webkit-mask: linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
  }

  &:after {
    z-index: -1;
    background: ${({ variant }) =>
      variant === "outlined" ? colors.GRADIENT : colors.WHITE};
    border-radius: 30px;
    opacity: 0;
    transition: 0.3s;
  }

  &:hover {
    box-shadow: ${({ variant }) =>
      variant === "pink"
        ? `2px 2px 4px 0px ${colors.PURPLE_GRADIENT}`
        : `2px 2px 4px 0px ${colors.GREEN_SECONDARY}`};
    color: ${colors.MIDNIGHT_BLACK};

    ${Arrow} {
      transform: translateX(3px);
    }

    &:after {
      opacity: 1;
    }
  }

  ${({ disabled }) =>
    disabled
      ? `    opacity: .5;
    cursor: not-allowed;`
      : ``};
`;

export const Button = styled.button<ButtonProps>`
  border: none;
  font-family: "Avenir", sans-serif;
  position: relative;
  z-index: 1;
  cursor: pointer;
  display: inline-block;
  padding: 12px 22px;
  border-radius: 30px;
  color: ${({ variant }) =>
    variant === "pink" ? `${colors.WHITE}` : `${colors.MIDNIGHT_BLACK};`};
  background: ${({ variant }) => {
    if (variant === "pink") return colors.PURPLE_GRADIENT;
    if (variant === "outlined") return colors.WHITE;
    return colors.GRADIENT;
  }};
  ${typography.BODY6};
  font-weight: 500;
  transition: 0.3s;
  pointer-events: ${({ disabled }) => (disabled ? "none" : "all")};

  @media ${device.TABLET} {
    padding: 15px 30px;
    ${({ variant }) =>
      variant === "pink" ? `${typography.BODY4}` : `${typography.BODY5}`};
    font-weight: 400;
  }

  &:before,
  &:after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }

  &:before {
    margin: -2px;
    border-radius: inherit;
    background: ${({ variant }) =>
      variant === "pink" ? colors.PURPLE_GRADIENT : colors.GRADIENT};
    padding: 2px;
    -webkit-mask: linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
  }

  &:after {
    z-index: -1;
    background: ${({ variant }) =>
      variant === "outlined" ? colors.GRADIENT : colors.WHITE};
    border-radius: 30px;
    opacity: 0;
    transition: 0.3s;
  }

  &:hover {
    box-shadow: ${({ variant }) =>
      variant === "pink"
        ? `2px 2px 4px 0px ${colors.PURPLE_GRADIENT}`
        : `2px 2px 4px 0px ${colors.GREEN_SECONDARY}`};
    color: ${colors.MIDNIGHT_BLACK};

    ${Arrow} {
      transform: translateX(3px);
    }

    &:after {
      opacity: 1;
    }
  }

  ${({ disabled }) =>
    disabled
      ? `    opacity: .5;
    cursor: not-allowed;`
      : ``};
`;
