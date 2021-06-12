import React from 'react';

import './Popup.css';


const Title: React.FC = ({children}) => {
    return (
        <div className="popup__title">
            {children}
        </div>
    )
}

export interface PopupProps {
    onClose?: () => void;
}

interface PopupSubComponents {
    Title: typeof Title;
}

const Popup: React.FC<PopupProps> & PopupSubComponents = ({children, onClose}) => {
    return (
        <>
            <div className="popup__overlay" />
            <div className="popup">
                <div className="popup__content">
                    {children}
                </div>
                {onClose && <span className="popup__close" aria-hidden="true" onClick={onClose}>&times;</span>}
            </div>
        </>
    )
}

Popup.Title = Title;

export default Popup;