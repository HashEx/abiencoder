import React from 'react';
import classnames from 'classnames';

import Loader from '../Loader';

import './Button.css';

export interface ButtonProps {
    className?: string;
    onClick: (e: any) => void;
    hover?: boolean;
    disabled?: boolean;
    loading?: boolean;
    title?: string;
}

const Button: React.FC<ButtonProps> = ({children, className, hover, loading, ...props}) => {
    const classNames = classnames("button", {
        "button--hover": hover,
        "button--disabled": props.disabled
    }, className);
    return (
        <button className={classNames} {...props}>
            {loading ? <Loader /> : children}
        </button>
    )
}

export default Button;