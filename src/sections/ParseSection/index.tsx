import React from 'react';


import Section from '../../components/Section';
import CodeMirror from '../../components/CodeMirror';
import Button from '../../components/Button';

import './ParseSection.css';
import { pushGtagParsesActionButton } from '../../utils/gtag';

interface ParseSectionProps {
    onChange: (value: string) => void;
    onClear: () => void;
    value: string;
    onParse: () => void;
    parseError: string | null;
}

const ParseSection: React.FC<ParseSectionProps> = ({onChange, onClear, value, onParse, parseError}) => {
    const handleParseClick = () => {
      pushGtagParsesActionButton("parse");
      onParse()
    }
    const handleClearClick = () => {
      pushGtagParsesActionButton("clear");
      onClear();
    }
    return (
        <Section className="section-parse" title="Enter your contract's ABI to auto-parse">
          <div className="input-field parse-input">
            <CodeMirror
              value={value}
              onChange={onChange}
              placeholder={`Enter your ABI json  [{"inputs":[], "name": "myFunction", "type":"function"}]`}
            />
          </div>
          <div className="section-parse__buttons">
            {parseError && (
              <label>Enter correct JSON</label>
            )}
            <div>
              <Button hover onClick={handleClearClick}>Clear</Button>
              <Button hover onClick={handleParseClick}>Parse</Button>
            </div>
          </div>
        </Section>
    )
}

export default ParseSection;