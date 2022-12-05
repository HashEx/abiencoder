import React from "react";

import SVG from "../Svg";

const Arrow = ({ className }: { className?: string }) => (
  <SVG
        width="13"
        height="7"
        viewBox="0 0 13 7"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
    >
        <path d="M1 6L6.5 1L12 6" stroke="currentColor" strokeWidth="1.4" />
    </SVG>
);

export default Arrow;
