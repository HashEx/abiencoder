import React from "react";
import SVG from "../Svg";

import * as s from "./Button.styled";

export interface IButton {
  className?: string;
  text: any;
  href?: string;
  type?: "link" | "button";
  target?: string;
  variant?: "primary" | "outlined" | "pink";
  hasArrow?: boolean;
  onClick?: (e: any) => void;
  disabled?: boolean;
}

const Button: React.FC<IButton> = ({
  type = "link",
  className,
  text,
  href,
  target,
  variant = "primary",
  hasArrow = false,
  onClick,
  disabled = false,
}) =>
  type === "link" ? (
    <s.ButtonLink
      href={href}
      target={target}
      variant={variant}
      onClick={onClick}
      disabled={disabled}
      className={className}
    >
      {text}

      {hasArrow && (
        <s.Arrow>
          <SVG width="11" height="10" fill="none">
            <path
              d="M1 5h9m0 0L6.538 1.5M10 5 6.538 8.5"
              stroke="#262626"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </SVG>
        </s.Arrow>
      )}
    </s.ButtonLink>
  ) : (
    <s.Button
      variant={variant}
      onClick={onClick}
      className={className}
      disabled={disabled}
    >
      {text}

      {hasArrow && (
        <s.Arrow>
          <SVG width="11" height="10" fill="none">
            <path
              d="M1 5h9m0 0L6.538 1.5M10 5 6.538 8.5"
              stroke="#262626"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </SVG>
        </s.Arrow>
      )}
    </s.Button>
  );

export default Button;
