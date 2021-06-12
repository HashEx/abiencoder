import React from 'react';
import classnames from 'classnames';

import './Loader.css'


interface ILoaderProps {
    size?: "sm" | "md" | "lg"
}


const Loader: React.FC<ILoaderProps> = ({size = "md"}) => {
    const classNames = classnames("loader", {
        [`loader--${size}`]: size
    });
    return <div className={classNames} />;
}

export default Loader;