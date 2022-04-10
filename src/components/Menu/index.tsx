import React from 'react';
import { usePopup } from 'react-hook-popup';


import SocialLinks from '../SocialLinks';
import RequestAuditPopup from '../RequestAuditPopup';

import MenuLink from './MenuLink';

import './Menu.css';


enum POPUP {
    INFO = "INFO",
    FAQ = "FAQ",
    REQUEST_AUDIT = "REQUEST_AUDIT"
}

const Menu = () => {

    const [showRequeestAuditPopup] = usePopup(POPUP.REQUEST_AUDIT, ({handleClose}: any) => {
        return <RequestAuditPopup onClose={handleClose} />;
    })

    const MENU = [{
        title: "What is this?",
        href: "#what-is-this",
    }, {
        title: "How it works?",
        href: "#how-it-works",
    }, {
        target: "_blank",
        title: "Request Audit",
        href: "#request_audit",
        highlight: true,
        onClick: () => showRequeestAuditPopup(),
    }, {
        target: "_blank",
        title: "Job at HashEx",
        href: "https://hashex.org/careers"
    },];

    return (
        <ul className="menu">
            {MENU.map((item, index) => {
                return (
                    <li className="menu__item" key={index}>
                        <MenuLink href={item.href} target={item.target} highlight={item.highlight} onClick={item.onClick}>
                            {item.title}
                        </MenuLink>
                    </li>
                )
            })}
            <li>
                <SocialLinks />
            </li>
        </ul>
    )
}

export default Menu;