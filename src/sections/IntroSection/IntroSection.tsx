import React from 'react';

import Section from '../../components/Section';
import SocialLinks from '../../components/SocialLinks';
import Title from '../../components/Title';

import './IntroSection.css';

const IntroSection = () => {
    return (
        <Section className="section-intro">
            <Title />
            <p>
                Do you have any problems? Read{" "}
                <a
                    href="https://github.com/HashEx/abiencoder#readme"
                    target="_blank"
                    rel="nofollow noopener"
                    className="green"
                >
                    instructions
                </a>{" "}
                or contact with us using socials: <SocialLinks />
            </p>
        </Section>
    )
}

export default IntroSection;