import React from 'react';
import classnames from 'classnames';

import './MenuLink.css';

export interface MenuLinkProps {
    href: string;
    target?: string;
    highlight?: boolean;
    onClick?: (e: React.SyntheticEvent<HTMLAnchorElement>) => void;
}

const MenuLink: React.FC<MenuLinkProps> = ({href, target, children, highlight, onClick}) => {
    const isBlank = target === "_blank";
    const rel = isBlank ? "noopener noreferrer" : "";
    const classNames = classnames("menu__link", {
        "menu__link--highlight": highlight
    });
    const handleClick = (e: React.SyntheticEvent<HTMLAnchorElement>) => {
        if(onClick) {
            onClick(e);
        }
    }
    return (
        <a className={classNames} target={target} href={href} rel={rel} onClick={handleClick}>
            {children}
        </a>
    )
}

export default MenuLink;