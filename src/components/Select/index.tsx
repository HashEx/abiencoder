import React, { useMemo } from 'react';
import ReactSelect from 'react-select';
import cx from 'classnames';

import './Select.css';

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
}

const Select: React.FC<SelectProps> = ({options, className, value, onChange, disabled}) => {
    const handleChange = (value: any) => onChange({
        target: {
            value: value.value
        }
    })
    const selectValue = useMemo(() => {
        if(!value) return null;
        return options.find((option) => option.value === value);
    }, [options, value]);
    return (
        <div className={cx("select-wrapper", {"select-wrapper--disabled": disabled})}>
            <ReactSelect
                classNamePrefix="select"
                options={options}
                value={selectValue}
                onChange={handleChange}
                isSearchable
                isDisabled={disabled}
                menuPortalTarget={document.querySelector("body")}
            />
        </div>
    )
}

export default Select;