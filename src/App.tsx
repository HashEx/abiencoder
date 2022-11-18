import React, { useState } from "react";
import { createGlobalStyle } from "styled-components";
import "./styles/fonts.css";

import EncodedSection from "./sections/EncodedSection";
import TrustedBySection from "./sections/TrustedBySection";
import InfoSection from "./sections/InfoSection";

import Footer from "./components/Footer";
import Header from "./components/Header";
import { common } from "./constants/common";
import Layout from "./components/Layout";
import Hero from "./components/Hero";
import SettingsSection from "./sections/SettingsSection";
import DescriptionSection from "./sections/DescriptionSection";
import OtherServices from "./sections/OtherServices";
import Contacts from "./sections/Contacts";
import { otherServices } from "./constants/otherServices";

const GlobalStyles = createGlobalStyle`
    html,
    body {
        height: 100%;
        margin: 0;
        padding: 0;
        font-family: 'Avenir', sans-serif;
    }

    #__next {
        display: flex;
        flex-direction: column;
        min-height: 100%;
    }

    main {
        flex-grow: 1;
    }

    ul {
        list-style: none;
        margin: 0;
        padding: 0;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p {
        margin: 0;
    }

    a {
        text-decoration: none;
    }
`;

function App() {
  const [encdodedData, setEncodedData] = useState<string>("");

  return (
    <>
      <Header common={common} />
      <Layout>
        <Hero
          hero={{
            title: "Online ABI Encoder",
            summary:
              "Free ABI encoder online service that allows you to encode your Solidity contract’s functions and constructor arguments.",
          }}
        />
        <SettingsSection setEncodedData={setEncodedData} />
        <EncodedSection value={encdodedData} />
        <DescriptionSection common={common} />
        <TrustedBySection />
        <InfoSection />

        <OtherServices
          common={common}
          title="Grow in the blockchain with us!"
          buttonText="All services"
          items={otherServices}
          ourProductsLink={common?.productsHref}
        />

        <Contacts
          contacts={common?.contacts}
          telegramLink={common?.telegramChatLink}
          emailLink={common?.socialEmailLink}
          theme="light"
        />
      </Layout>

      <Footer common={common} />
      <GlobalStyles />
    </>
  );
}

export default App;
