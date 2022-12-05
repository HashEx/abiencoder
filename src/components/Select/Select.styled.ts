import ReactSelect from "react-select";
import colors from "../../helpers/colors";
import styled from "styled-components";

export const ReactSelectFilter = styled(ReactSelect)`
  width: 227px;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 130%;

  .Select__input {
    color: ${props => props.theme.selectColor};
  }

  .Select__control {
    background-color: ${props => props.theme.bgLightColor};
    text-align: start;
    min-height: 0;
    position: relative;
    border-radius: 5px;
    border-style: none;

    padding: 10px 4px 10px;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;

    outline: none;
    border: 1px solid ${props => props.theme.selectBorderColor};

    :hover {
      border: 1px solid ${props => props.theme.selectBorderColor};
    }
  }

  .Select__placeholder {
    color: ${props => props.theme.textColor2};
  }

  .Select__control--is-focused {
    border: none;
    border: 1px solid ${props => props.theme.selectBorderColor} !important;
    box-shadow: none;
  }

  .Select__control--is-disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }

  .Select__menu {
    background: ${props => props.theme.bgLightColor};
    color: ${props => props.theme.selectMenuColor};
    z-index: 10;
    margin: 0;
    top: 75%;
    border-radius: 0 0 4px 4px;
    box-shadow: none;
    border: 1px solid ${props => props.theme.selectBorderColor};
    border-top: 0;
  }

  .Select__menu-list {
    padding: 10px 0;
  }

  .Select__option {
    display: flex;
    align-items: center;
    grid-gap: 10px;
    gap: 10px;
    color: ${props => props.theme.textColor2};
    padding: 4px 15px;
    text-align: left;
    background: ${props => props.theme.bgLightColor};

    :hover {
      box-shadow: 0 0 11px rgba(33, 33, 33, 0.2);
      border-radius: 5px;
      cursor: pointer;
      position: relative;
      z-index: 10;
    }

    :active {
      background: ${colors.LIGHT_BLACK};
      color: ${props => props.theme.selectColor};
    }
  }

  .Select__value-container {
    padding: 2px 11px;
  }

  .Select__option--is-focused {
    background: ${props => props.theme.selectFocusedColor};
    box-shadow: 2px 4px 15px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
  }

  .Select__clear-indicator {
    padding: 3.2px;
  }

  .Select__indicator {
    transition: 0.3s;
    cursor: pointer;
    color: ${props => props.theme.indicatorColor} !important;
  }

  .Select__single-value {
    color: ${props => props.theme.textColor2};

  }
`;
