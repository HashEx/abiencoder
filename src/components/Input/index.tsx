import React from 'react';
import classnames from 'classnames';

import './Input.css';

interface InputProps {
    className?: string;
    onChange: (e: any) => void;
    type?: string;
    value: string;
    placeholder?: string;
    name?: string;
    id?: string;
    invalid?: boolean;
    disabled?: boolean;
    helpText?: any;
}

const Input: React.FC<InputProps> = ({className, invalid, helpText, ...props}) => {
    const classNames = classnames("input", {
        "input--invalid": invalid,
        "input--disabled": props.disabled,
    }, className);
    return (
        <div>
            <input className={classNames} {...props} />
            {helpText && (<div className="input__help-text">{helpText}</div>)}
        </div>
    )
}

export default Input;