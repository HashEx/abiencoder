import React from 'react';

import Providers from './providers';
import { useAbiEncoder } from './hooks';

import ParseSection from './sections/ParseSection';
import ParametersSection from './sections/ParametersSection';
import EncodedSection from './sections/EncodedSection';

import Header from './components/Header';
import Footer from './components/Footer';

function App() {
    const {
        abi,
        encoded,
        onChange,
        onParse,
        onClear,
        parseError,
        parameters,
        abiFunctions,
        encodeErrors
    } = useAbiEncoder();

    return (
        <Providers>
            <Header />
            <ParseSection 
                onChange={onChange("abi")}
                value={abi}
                onParse={onParse}
                onClear={onClear}
                parseError={parseError}
            />
            <ParametersSection
                onChange={onChange("parameters")}
                value={parameters}
                abiFunctions={abiFunctions}
                errors={encodeErrors}
            />
            <EncodedSection value={encoded} />
            <Footer />
        </Providers>
    );
}

export default App;
