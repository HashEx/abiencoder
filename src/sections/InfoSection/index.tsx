import React from 'react';

import Section from '../../components/Section';

const InfoSection = () => (
    <Section id="what-is-this" title="What is this?">
        <p>
            When you want to <span className="green">verify</span>  your Solidity Smart Contract's code on <span className="green">Etherscan.io</span>  or manually make a transaction to call your contract's method, you need to encode input arguments in a special way.<br />
            ABI Encoding Service helps you to encode these arguments in a such way.
        </p>
    </Section>
)

export default InfoSection;