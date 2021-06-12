import React from 'react';

import Copyright from '../Copyright';
import SocialLinks from '../SocialLinks';

import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <Copyright />
            <SocialLinks />
        </footer>
    )
}

export default Footer;