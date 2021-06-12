import React from 'react';

import Popup, { PopupProps } from '../Popup';

interface FAQPopupProps extends PopupProps {}

const FAQPopup: React.FC<FAQPopupProps> = (props) => (
    <Popup {...props}>
        You can use auto-parse section. Just copy your ABI json interface to an input field and click a "Parse" button. After that all the necessary parameters will appear. Insert values and get the result.<br /><br />
        Also you can manually construct your object using manual section. <br /> <br />
        <span className="green">Here</span>  you can read more detailed information about ABI arguments encoding.
    </Popup>
)

export default FAQPopup;