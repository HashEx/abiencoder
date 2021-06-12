import React from 'react';

import CopyButton from '../../components/CopyButton';
import Section from '../../components/Section';

import './EncodedSection.css';

const EncodedSection: React.FC<{value: string}> = ({value}) => {
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
            <CopyButton hover textToCopy={value} disabled={!value} />
        </Section>
    )
}

export default EncodedSection;