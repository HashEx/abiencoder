import React from 'react';

import CopyButton from '../../components/CopyButton';
import Section from '../../components/Section';
import { pushGtagParsesActionButton } from '../../utils/gtag';

import './EncodedSection.css';

const EncodedSection: React.FC<{value: string}> = ({value}) => {
    const onCopy = () => pushGtagParsesActionButton("copy");
    return (
        <Section className="encoded-section">
            <textarea
                readOnly
                placeholder="ABI-encoded output"
                rows={20}
                cols={40}
                autoComplete="off"
                value={value}
            />
            <CopyButton hover textToCopy={value} disabled={!value} onCopy={onCopy} />
        </Section>
    )
}

export default EncodedSection;