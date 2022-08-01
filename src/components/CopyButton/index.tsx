import React, { useCallback, useState } from 'react';
import copy from 'copy-to-clipboard';

import Button, { ButtonProps } from '../Button';

interface CopyButtonProps extends Omit<ButtonProps, "onClick"> {
    textToCopy: string;
    onCopy?: () => void;
}

const CopyButton: React.FC<CopyButtonProps> = ({textToCopy, disabled, hover, onCopy}) => {
    const [copied, setCopied] = useState<boolean>(false);
    
    const handleCopy = useCallback(() => {
        copy(textToCopy);
        if(onCopy) onCopy();
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