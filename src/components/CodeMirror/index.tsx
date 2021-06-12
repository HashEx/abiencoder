import React, { useState } from 'react';

import {Controlled as ControlledCodeMirror} from 'react-codemirror2'

import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';

import './CodeMirror.css';

require('codemirror/mode/javascript/javascript.js');

interface CodeMirrorProps {
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
}

const codeMirrorOptions = {
    lineNumbers: true,
    mode: 'javascript',
    theme: 'material'
}

const CodeMirror: React.FC<CodeMirrorProps> = ({value, onChange, placeholder}) => {
    const [isFocused, setIsFocused] = useState<boolean>(false);
    const onBeforeChange = (_editor: any, _data: any, value: string) => {
        onChange(value);
    }
    const onFocus = () => {
        setIsFocused(false);
    }
    const onBlur = () => {
        setIsFocused(false);
    }
    const showPlaceholder = !value && !isFocused && placeholder;
    return (
        <div className="CodeMirror-wrapper">
            {showPlaceholder && <div className="CodeMirror-placeholder">{placeholder}</div>}
            <ControlledCodeMirror
                value={value}
                onFocus={onFocus}
                onBlur={onBlur}
                options={codeMirrorOptions}
                onBeforeChange={onBeforeChange}
            />
        </div>
    )
}

export default CodeMirror;