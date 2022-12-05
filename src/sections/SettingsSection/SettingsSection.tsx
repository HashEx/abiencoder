import React, { useEffect, useMemo, useState } from "react";

import Tabs from "../../components/Tabs";

import * as s from "./SettingsSection.styled";
import Modal from "../../components/Modal";
import laptop from "../../images/laptop.svg";
import { useAbiEncoder } from "../../hooks";
import ManualParameters from "../../components/ManualParameters";
import AutoParse from "../../components/AutoParse";
import { TabsLabel } from "../../interfaces";
import { getBanner } from "../../utils/helpers";
import useWindowSize from "../../hooks/useWindowSize";
import Banner from "../../components/Banner";

interface AbiSettingsProps {
  setEncodedData: (data: string) => void;
  themeToggler: () => void;
  theme: string;
}

const AbiSettings: React.FC<AbiSettingsProps> = ({ setEncodedData, themeToggler, theme }) => {
  const [activeTab, setActiveTab] = useState<string>(
    TabsLabel.MANUAL_PARAMETERS
  );
  const { onChange, parameters, encodeErrors, encoded } = useAbiEncoder();

  const {
    abi,
    onChange: onAutoParseChange,
    onParse,
    onClear,
    parameters: autoParseParameters,
    abiFunctions,
    encodeErrors: autoParseEncodeErrors,
    parseError,
    encoded: autoParseEncoded,
    isParsed,
  } = useAbiEncoder();

  const [showModal, setShowModal] = useState(false);

  const [width] = useWindowSize();

  const handleModalClose = () => {
    setShowModal(false);
  };

  useEffect(() => {
    if (activeTab === TabsLabel.AUTO_PARSE) {
      setEncodedData(autoParseEncoded);
    } else {
      setEncodedData(encoded);
    }
  }, [autoParseEncoded, encoded, activeTab, setEncodedData]);

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  const banner = useMemo(() => getBanner(), []);
  const modalBanner = useMemo(() => getBanner(), []);

  const [hide, setHide] = useState(false);

  return (
    <s.AbiSettings>
      <s.Content>
        <Tabs
          setShowModal={setShowModal}
          onTabClick={handleTabClick}
          width={width}
          themeToggler={themeToggler}
          theme={theme}
        >
          <ManualParameters
            onParametersChange={onChange("parameters")}
            value={parameters}
            errors={encodeErrors}
            label={TabsLabel.MANUAL_PARAMETERS}
            banner={banner}
            width={width}
            hide={hide}
            setHide={setHide}
          />

          <AutoParse
            abi={abi}
            onAbiChange={onAutoParseChange("abi")}
            onParametersChange={onAutoParseChange("parameters")}
            abiFunctions={abiFunctions}
            onParse={onParse}
            onClear={onClear}
            parseError={parseError}
            value={autoParseParameters}
            errors={autoParseEncodeErrors}
            label={TabsLabel.AUTO_PARSE}
            isParsed={isParsed}
          />
        </Tabs>
        <Modal show={showModal} onClose={handleModalClose}>
          <s.ModalWrapper>
            <img src={laptop} alt="desktop" />
            <s.ModalText>Please use the desktop version</s.ModalText>
            <Banner banner={modalBanner} hide={hide} setHide={setHide} />
            <s.OkButton text={"Ok"} onClick={handleModalClose} type="button" />
          </s.ModalWrapper>
        </Modal>
      </s.Content>
    </s.AbiSettings>
  );
};

export default AbiSettings;
