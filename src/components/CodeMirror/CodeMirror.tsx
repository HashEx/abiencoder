import React, { useState } from "react";

import CodeMirrorOrignial from "@uiw/react-codemirror";
import { ViewUpdate } from "@codemirror/view";
import { javascript } from "@codemirror/lang-javascript";

import * as s from "./CodeMirror.styled";

interface CodeMirrorProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

const CodeMirror: React.FC<CodeMirrorProps> = ({
  value,
  onChange,
  placeholder,
}) => {
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const onBeforeChange = (value: string, _viewUpdate: ViewUpdate) => {
    onChange(value);
  };
  const onFocus = () => {
    setIsFocused(false);
  };
  const onBlur = () => {
    setIsFocused(false);
  };
  const showPlaceholder = !value && !isFocused && placeholder;
  return (
    <s.Wrapper>
      {showPlaceholder && <s.Placeholder>{placeholder}</s.Placeholder>}
      <CodeMirrorOrignial
        value={value}
        onFocus={onFocus}
        onBlur={onBlur}
        theme="dark"
        extensions={[javascript()]}
        onChange={onBeforeChange}
      />
    </s.Wrapper>
  );
};

export default CodeMirror;
