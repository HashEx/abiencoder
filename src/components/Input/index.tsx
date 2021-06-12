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
}

const Input: React.FC<InputProps> = ({className, invalid, ...props}) => {
    const classNames = classnames("input", {
        "input--invalid": invalid,
    }, className);
    return (
        <input className={classNames} {...props} />
    )
}

export default Input;