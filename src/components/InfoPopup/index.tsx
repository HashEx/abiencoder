import React from 'react';

import Popup, { PopupProps } from '../Popup';

interface InfoPopupProps extends PopupProps {}

const InfoPopup: React.FC<InfoPopupProps> = ({onClose}) => (
    <Popup onClose={onClose}>
        When you want to <span className="green">verify</span>  your Solidity Smart Contract's code on <span className="green">Etherscan.io</span>  or manually make a transaction to call your contract's method, you need to encode input arguments in a special way.<br />
        ABI Encoding Service helps you to encode these arguments in a such way.
    </Popup>
)

export default InfoPopup;