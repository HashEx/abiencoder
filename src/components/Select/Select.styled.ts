import ReactSelect from "react-select";
import colors from "../../helpers/colors";
import styled from "styled-components";

export const ReactSelectFilter = styled(ReactSelect)`
  width: 227px;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 130%;

  .Select__control {
    background-color: ${colors.LIGHT_GREY};
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
    border: 1px solid ${colors.GREY};
  }

  .Select__placeholder {
    color: ${colors.BLACK};
  }

  .Select__control--is-focused {
    border: none;
    border: 1px solid ${colors.GREY} !important;
    box-shadow: none;
  }

  .Select__control--is-disabled {
    cursor: not-allowed;
  }

  .Select__menu {
    background: ${colors.LIGHT_GREY};
    color: ${colors.GREY};
    z-index: 10;
    margin: 0;
    top: 75%;
    border-radius: 0 0 4px 4px;
    box-shadow: none;
    border: 1px solid ${colors.GREY};
    border-top: 0;
  }

  .Select__menu-list {
    padding: 10px 0;
  }

  .Select__option {
    text-align: left;
    background: ${colors.LIGHT_GREY};

    :hover {
      box-shadow: 0 0 11px rgba(33, 33, 33, 0.2);
      border-radius: 5px;
      cursor: pointer;
      position: relative;
      z-index: 10;
    }

    :active {
      background: ${colors.LIGHT_BLACK};
      color: ${colors.WHITE};
    }
  }

  .Select__value-container {
    padding: 2px 11px;
  }

  .Select__option {
    display: flex;
    align-items: center;
    grid-gap: 10px;
    gap: 10px;
    color: ${colors.BLACK};
    padding: 4px 15px;
  }

  .Select__clear-indicator {
    padding: 3.2px;
  }

  .Select__indicator {
    transition: 0.3s;
    cursor: pointer;
  }
`;
