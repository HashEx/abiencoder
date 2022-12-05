import React, { useState } from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
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
import { light, dark } from './styles/themes';
import useLocalStorage from "./hooks/useLocalStorage";

const GlobalStyles = createGlobalStyle`
    html,
    body {
        height: 100%;
        margin: 0;
        padding: 0;
        font-family: 'Avenir', sans-serif;
        background: ${({ theme }) => theme.bgDarkColor};
    }

    #__next {
        display: flex;
        flex-direction: column;
        min-height: 100%;
    }

    main {
        flex-grow: 1;
        transition: all 0.03s linear;
        background: ${({ theme }) => theme.bgDarkColor};
        color: ${({ theme }) => theme.textColor};
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
  const [theme, setTheme] = useLocalStorage<string>(
    'abiTheme',
    'light'
);

  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  }

  return (
    <ThemeProvider theme={theme === 'light' ? light : dark}>
      <Header common={common} />
      <Layout>
        <Hero
          hero={{
            title: "Online ABI Encoder",
            summary:
              "A free online service for encoding your Solidity contract functions and constructor arguments.",
          }}
        />
        <SettingsSection setEncodedData={setEncodedData} themeToggler={themeToggler} theme={theme} />
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
          mode="light"
        />
      </Layout>

      <Footer common={common} />
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default App;
