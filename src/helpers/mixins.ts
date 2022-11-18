import { keyframes } from "styled-components";

import colors from "./colors";

export const underline = (underlineColor: string) => `
    position: relative;

    &:before {
        content: '';
        left: 0;
        width: 0%;
        bottom: -5px;
        height: 1px;
        position: absolute;
        background-color: ${underlineColor};
        transition: width 0.5s;
    }

    &:hover:before {
        width: 100%;
    }
`;

export const hoverLink = (backgroundColor: string) => `
    position: relative;
    z-index: 0;

    &:before {
        content: '';
        display: block;
        position: absolute;
        z-index: -1;
        left: 0;
        top: -2px;
        background: ${backgroundColor};
        width: 0;
        height: 100%;
        padding: 2px 0;
        transition: width 0.3s;
    }

    &:hover:before {
        width: 21px;
    }
`;

// mixin for rounded buttons with white border color
export const roundedButton = () => `
    position: relative;

    &:before {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        margin: -2px;
        border-radius: inherit;
        padding: 2px;
        border: 2px solid ${colors.WHITE};
        transition: 0.3s;
        -webkit-transition: 0.3s;
    }

    &:hover {
        box-shadow: 2px 2px 4px 0px ${colors.GREEN_PRIMARY};

        &:before {
            border-color: ${colors.GREEN_PRIMARY};
        }
    }

    &:focus, &:active {
        color: ${colors.BLACK};
        background-color: ${colors.GREEN_SECONDARY};
        outline: none;

        &:before {
            background: transparent;
            border-color: ${colors.GREEN_SECONDARY};
        }

        & svg {
            fill: ${colors.BLACK};
        }
    }
`;

export const multipleLineEllipsis = (
  lineHeight: string,
  lineCount: number,
  backgroundColor?: string
) => `
    overflow: hidden;
    position: relative;
    line-height: ${lineHeight};
    max-height: calc(${lineHeight} * ${lineCount});
    text-align: justify;
    padding-right: 1em;

    &:before {
        content: '...';
        position: absolute;
        right: 0;
        bottom: 0;
    }

    &:after {
        content: '';
        position: absolute;
        right: 0;
        width: 1em;
        height: 1em;
        margin-top: 0.3em;
        background: ${backgroundColor || colors.WHITE};
    }
`;

export const spinnerAnimation = keyframes`
    0% { transform:rotate(0deg); }
    100% { transform:rotate(360deg); }
`;
