import React, { useCallback, useState } from 'react';
import copy from 'copy-to-clipboard';

import Button, { ButtonProps } from '../Button';

interface CopyButtonProps extends Omit<ButtonProps, "onClick"> {
    textToCopy: string;
}

const CopyButton: React.FC<CopyButtonProps> = ({textToCopy, disabled, hover}) => {
    const [copied, setCopied] = useState<boolean>(false);
    
    const handleCopy = useCallback(() => {
        copy(textToCopy);

        setCopied(true);
        setTimeout(() => setCopied(false), 3000);
        
    }, [textToCopy]);
    return (
        <Button hover={hover} onClick={handleCopy} disabled={disabled || copied}>
            {copied ? "Copied" : "Copy"}
        </Button>
    )
}

export default CopyButton;