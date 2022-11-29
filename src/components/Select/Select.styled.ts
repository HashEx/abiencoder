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
    color: ${colors.LIGHT_GREY};

  }

  .Select__control {
    background-color: ${colors.LIGHT_BLACK};
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
    border: none;
  }

  .Select__placeholder {
    color: ${colors.LIGHT_GREY};
  }

  .Select__control--is-focused {
    border: none;
    box-shadow: none;
  }

  .Select__control--is-disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }

  .Select__menu {
    background: ${colors.LIGHT_BLACK};
    color: ${colors.LIGHT_GREY};
    z-index: 10;
    margin: 0;
    top: 75%;
    border-radius: 0 0 4px 4px;
    box-shadow: none;
    border: none;
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
    color: ${colors.LIGHT_GREY};
    padding: 4px 15px;
    text-align: left;
    background: ${colors.LIGHT_BLACK};

    :hover {
      box-shadow: 0 0 11px rgba(33, 33, 33, 0.2);
      border-radius: 5px;
      cursor: pointer;
      position: relative;
      z-index: 10;
    }

    :active {
      background: ${colors.LIGHT_BLACK};
      color: ${colors.LIGHT_GREY};
    }
  }

  .Select__value-container {
    padding: 2px 11px;
  }

  .Select__option--is-focused {
    background: ${colors.DARK_GREY};
    box-shadow: 2px 4px 15px rgba(0, 0, 0, 0.25);
border-radius: 5px;
  }

  .Select__clear-indicator {
    padding: 3.2px;
  }

  .Select__indicator {
    transition: 0.3s;
    cursor: pointer;
    color: ${colors.GREEN_SECONDARY} !important;
  }

  .Select__single-value {
    color: ${colors.LIGHT_GREY};

  }
`;
