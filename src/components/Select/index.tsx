import React, { useMemo } from 'react';
import ReactSelect from 'react-select';

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
}

const Select: React.FC<SelectProps> = ({options, className, value, onChange}) => {
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
        <div className="select-wrapper">
            <ReactSelect
                classNamePrefix="select"
                options={options}
                value={selectValue}
                onChange={handleChange}
                isSearchable
            />
        </div>
    )
}

export default Select;