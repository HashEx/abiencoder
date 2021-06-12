import React from 'react';
import { PopupProvider } from 'react-hook-popup';

const Providers: React.FC = ({children}) => {
    return (
        <PopupProvider>
            {children}
        </PopupProvider>
    )
}

export default Providers;