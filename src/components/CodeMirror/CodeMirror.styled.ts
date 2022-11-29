import colors from "../../helpers/colors";
import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  color: #fff;
  text-align: start;
  box-shadow: none;

  .cm-editor {
    font-family: "PT Mono";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 130%;
    box-sizing: border-box;
    padding: 20px 10px 20px 10px;
    border-radius: 5px;
    width: 100%;
    margin: 0 auto;
    height: 300px;
    border: 1px solid ${colors.DARK_GREY};
    background-color: ${colors.LIGHT_BLACK} !important;
    color: ${colors.WHITE};
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
    background-color: transparent;
  }

  .cm .cm-linenumber {
    color: #fff !important;
  }

  .cm-lineNumbers,
  .cm-content {
    font-family: "PT Mono";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 130%;
  }

  .cm span[role="presentation"] {
    color: #c2f051;
  }

  .cm-gutterElement {
    color: ${colors.DARK_GREY};
  }

  .cm-line {
    color: ${colors.GREEN_SECONDARY};

    > span.ͼ13 {
      color: ${colors.WHITE};
    }
  }

  .cm-activeLineGutter,
  .cm-activeLine {
    background-color: #525151;
  }

  .cm-selectionBackground {
    background-color: ${colors.DARK_GREY} !important;
  }
`;

export const Placeholder = styled.div`
  position: absolute;
  top: 26px;
  left: 45px;
  color: #fff;
  opacity: 0.5;
  z-index: 10;
  font-family: "PT Mono";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 130%;
  color: ${colors.LIGHT_GREY};
`;
