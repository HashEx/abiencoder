import React from "react";
import { pushGtagSocialClick } from "../../utils/gtag";

import * as s from "./TrustedBySection.styled";

const companies = [
  {
    label: "OpenZepplin",
    logo: "/trusted-by/oz.svg",
    link: "https://forum.openzeppelin.com/t/how-to-verify-a-contract-on-etherscan-bscscan-polygonscan/14225",
    onClick: () => pushGtagSocialClick("open zeppelin"),
  },
  {
    label: "OKExChain",
    logo: "/trusted-by/okx.svg",
    link: "https://okexchain-docs.readthedocs.io/en/latest/developers/deploy/verify-proxy-contract.html",
    onClick: () => pushGtagSocialClick("okc"),
  },
  {
    label: "Gnosis Chain",
    logo: "/trusted-by/gnosis.svg",
    link: "https://www.xdaichain.com/for-validators/for-bridge-validators/current-validators-how-to-add-a-new-bridge-validator",
    onClick: () => pushGtagSocialClick("gnosis chain"),
  },
  {
    label: "Ethereum Chain",
    logo: "/trusted-by/ethereum.svg",
    link: "https://ethereum.stackexchange.com/questions/22884/convert-contract-arguments-from-json-to-abi-encoded-format",
    onClick: () => pushGtagSocialClick("ethereum chain"),
  },
];

const TrustedBySection = () => {
  return (
    <s.Wrapper>
      <s.Content>
        <s.Title>Trusted by:</s.Title>
        <s.Companies>
          {companies.map((company, index) => {
            const handleClick = () => {
              if (company.onClick) company.onClick();
            };
            return (
              <a
                key={index}
                href={company.link}
                target="_blank"
                className="trusted-by-item"
                rel="noreferrer"
                onClick={handleClick}
              >
                <s.CompanyImg src={company.logo} alt={company.label} />
              </a>
            );
          })}
        </s.Companies>
      </s.Content>
    </s.Wrapper>
  );
};

export default TrustedBySection;
