import colors from "../../helpers/colors";
import device from "../../helpers/device";
import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  color: #fff;
  text-align: start;
  box-shadow: none;
  font-family: "PT Mono";

  .cm-editor {
    box-sizing: border-box;
    padding: 20px 10px 20px 10px;
    border-radius: 5px;
    width: 100%;
    margin: 0 auto;
    height: 300px;
    border: 1px solid ${colors.GREY};
    background-color: ${colors.LIGHT_GREY} !important;
    color: ${colors.BLACK};

    @media ${device.TABLET} {
      padding: 20px 10px 20px 40px;
    }
  }

  .cm-focused {
    outline: none !important;
  }

  .cm-cursor {
    border-left-color: ${colors.BLACK};
  }

  .cm-editor .cm-property {
    color: #fff !important;
  }

  .cm-editor .cm-gutters {
    background-color: ${colors.LIGHT_GREY};
  }

  .cm .cm-linenumber {
    color: #fff !important;
  }

  .cm span[role="presentation"] {
    color: #c2f051;
  }

  .cm-line {
    color: #8b8b8b;

    > span {
      color: ${colors.BLACK};
    }
  }

  .cm-activeLineGutter,
  .cm-activeLine {
    background-color: #d9d9d9;
  }

  .cm-selectionBackground {
    background-color: ${colors.DARK_GREY} !important;
  }
`;

export const Placeholder = styled.div`
  position: absolute;
  top: 26px;
  left: 35px;
  color: #fff;
  opacity: 0.5;
  z-index: 10;
  font-family: monospace;
  color: ${colors.BLACK};

  @media ${device.TABLET} {
    left: 75px;
  }
`;
