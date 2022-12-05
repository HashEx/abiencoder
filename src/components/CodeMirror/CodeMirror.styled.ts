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
    border: 1px solid ${props => props.theme.borderColor};
    background-color: ${props => props.theme.bgLightColor} !important;
    color: ${props => props.theme.bgColor};
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
    background-color: ${props => props.theme.editorColor};
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
    color: ${props => props.theme.indicatorColor};

    > span.ͼ13 {
      color: ${props => props.theme.textColor};
    }
  }

  .cm-activeLineGutter,
  .cm-activeLine {
    background-color: ${props => props.theme.editorLineColor};
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
  color: ${props => props.theme.textColor2};
`;
