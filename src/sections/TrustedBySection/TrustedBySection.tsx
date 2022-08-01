import React from 'react';
import Section from '../../components/Section';
import { pushGtagSocialClick } from '../../utils/gtag';

import './TrustedBySection.css';

const companies = [{
    label: "OpenZepplin",
    logo: "/trusted-by/oz_white_color.svg",
    link: "https://forum.openzeppelin.com/t/how-to-verify-a-contract-on-etherscan-bscscan-polygonscan/14225",
    onClick: () => pushGtagSocialClick("open zeppelin"),
},{
    label: "Gnosis Chain",
    logo: "/trusted-by/gnosis_white.svg",
    link: "https://www.xdaichain.com/for-validators/for-bridge-validators/current-validators-how-to-add-a-new-bridge-validator",
    onClick: () => pushGtagSocialClick("gnosis chain"),
},{
    label: "OKExChain",
    logo: "/trusted-by/okx.png",
    link: "https://okexchain-docs.readthedocs.io/en/latest/developers/deploy/verify-proxy-contract.html",
    onClick: () => pushGtagSocialClick("okc"),
}]

const TrustedBySection = () => {
    return (
        <Section className="section-trusted-by" title="Free ABI Encoder by HashEx is trusted by following companies:">
            <div className="trusted-by-items">
                {companies.map((company, index) => {
                    const handleClick = () => {
                        if(company.onClick) company.onClick(); 
                    }
                    return (
                        <a
                            key={index}
                            href={company.link}
                            target="_blank"
                            className="trusted-by-item"
                            rel="noreferrer"
                            onClick={handleClick}
                        >
                            <img src={company.logo} alt={company.label} />
                        </a>
                    )
                })}
            </div>
        </Section>
    )
}

export default TrustedBySection;