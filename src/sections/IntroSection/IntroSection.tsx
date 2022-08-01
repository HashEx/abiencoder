import React from 'react';

import Section from '../../components/Section';
import SocialLinks from '../../components/SocialLinks';
import Title from '../../components/Title';
import { pushGtagSocialClick } from '../../utils/gtag';

import './IntroSection.css';

const IntroSection = () => {
    const handleClick = () => pushGtagSocialClick("github:instruction");
    return (
        <Section className="section-intro">
            <Title />
            <div>
                Do you have any problems? Read{" "}
                <a
                    href="https://github.com/HashEx/abiencoder#readme"
                    target="_blank"
                    rel="noreferrer"
                    className="green"
                    onClick={handleClick}
                >
                    instructions
                </a>{" "}
                or contact with us using socials: <SocialLinks />
            </div>
        </Section>
    )
}

export default IntroSection;