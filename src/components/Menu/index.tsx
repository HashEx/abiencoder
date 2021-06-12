import React from 'react';
import { usePopup } from 'react-hook-popup';


import SocialLinks from '../SocialLinks';
import FAQPopup from '../FAQPopup';
import InfoPopup from '../InfoPopup';
import RequestAuditPopup from '../RequestAuditPopup';

import MenuLink from './MenuLink';

import './Menu.css';


enum POPUP {
    INFO = "INFO",
    FAQ = "FAQ",
    REQUEST_AUDIT = "REQUEST_AUDIT"
}

const Menu = () => {
    const [showWhatPopup] = usePopup(POPUP.INFO, ({handleClose}: any) => {
        return <InfoPopup onClose={handleClose} />
    })

    const [showHowPopup] = usePopup(POPUP.FAQ, ({handleClose}: any) => {
        return <FAQPopup onClose={handleClose} />;
    });

    const [showRequeestAuditPopup] = usePopup(POPUP.REQUEST_AUDIT, ({handleClose}: any) => {
        return <RequestAuditPopup onClose={handleClose} />;
    })

    const MENU = [{
        title: "What is this?",
        href: "#what",
        onClick: () => showWhatPopup(),
    }, {
        title: "How it works?",
        href: "#how",
        onClick: () => showHowPopup(),
    }, {
        target: "_blank",
        title: "Request Audit",
        href: "#request_audit",
        highlight: true,
        onClick: () => showRequeestAuditPopup(),
    }, {
        target: "_blank",
        title: "Job at HashEx",
        href: "https://www.notion.so/HashEx-Job-Board-34f9adc036044b82983c7f09c3193cdf"
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