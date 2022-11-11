import React, { FC, useMemo } from "react";
import { components } from "react-select";

import * as s from "./Select.styled";
import arrow from "../../images/select-arrow.svg";

interface Option {
  label: string;
  value: string;
}

interface SelectProps {
  className?: string;
  name?: string;
  value: any;
  options: Option[];
  onChange: (e: any) => void;
  disabled?: boolean;
  placeholder?: string;
}

const DropdownIndicator = (props: any) =>
  components.DropdownIndicator && (
    <components.DropdownIndicator {...props}>
      <img src={arrow} alt="open" />
    </components.DropdownIndicator>
  );

const Select: FC<SelectProps> = ({
  options,
  value,
  onChange,
  placeholder = "Select...",
}) => {
  const handleChange = (value: any) =>
    onChange({
      target: {
        value: value.value,
      },
    });
  const selectValue = useMemo(() => {
    if (!value) return null;
    return options.find((option) => option.value === value);
  }, [options, value]);

  return (
    <s.ReactSelectFilter
      value={selectValue}
      defaultValue={options[0]}
      classNamePrefix="Select"
      options={options}
      placeholder={placeholder}
      components={{
        DropdownIndicator,
        IndicatorSeparator: () => null,
      }}
      isClearable={false}
      isSearchable={true}
      onChange={handleChange}
      styles={{
        dropdownIndicator: (
          provided: any,
          state: { selectProps: { menuIsOpen: any } }
        ) => ({
          ...provided,
          transform: state.selectProps.menuIsOpen && "rotate(180deg)",
        }),
      }}
      hideSelectedOptions
    />
  );
};

export default Select;
