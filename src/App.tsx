import React from 'react';

import Providers from './providers';
import { useAbiEncoder } from './hooks';

import ParseSection from './sections/ParseSection';
import ParametersSection from './sections/ParametersSection';
import EncodedSection from './sections/EncodedSection';

import Header from './components/Header';
import Title from './components/Title';
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
            <div className="container">
                <Title />
            </div>
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
            <div className="container">
                <p>HashEx offers a free ABI decoder online service that allows you to encode your contract’s arguments.</p>
                <p>ABI itself is the description of the code interface. It’s a way for the contracts to interact within an ecosystem as well as contract-to-contract.</p>
                <p>Smart contract ABI parsing is required for verifying the contract on Etherscan or making a transaction to call a method. For most actions regarding this code, you would require a special tool, and the arguments have to be encoded in a specific way. HashEx tool does it automatically, free, and doesn’t involve downloading any extra applications.</p>
                <p>Code itself is used in the byte format, so it’s harder to decode it correctly. For easy interactions with said code, HashEx has created its ABI decoder. An additional tool allows you to manually enter the values for the parameters.</p>
            </div>
            <Footer />
        </Providers>
    );
}

export default App;
