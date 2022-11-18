import copyIcon from "../../images/copy.svg";
import { pushGtagParsesActionButton } from "../../utils/gtag";
import React, { useCallback, useState } from "react";
import copy from "copy-to-clipboard";

import * as s from "./EncodedData.styled";

interface EncodedDataProps {
  value: string;
}

const EncodedData: React.FC<EncodedDataProps> = ({ value }) => {
  const [copied, setCopied] = useState<boolean>(false);

  const handleCopy = useCallback(() => {
    copy(value);
    pushGtagParsesActionButton("copy");
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  }, [value]);

  return (
    <s.Wrapper>
      <s.Content>
        <s.Title>Encoded data</s.Title>

        <s.Textarea
          readOnly
          placeholder="ABI-encoded output"
          rows={20}
          cols={40}
          autoComplete="off"
          value={value}
        />

        <s.CopyButton
          type="button"
          text={
            <>
              <img src={copyIcon} alt="copy" />
              {copied ? "Copied" : "Copy"}
            </>
          }
          disabled={!value || copied}
          onClick={handleCopy}
        />
      </s.Content>
    </s.Wrapper>
  );
};

export default EncodedData;
