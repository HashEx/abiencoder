import Socials from "../../components/Socials";
import { SocialsType } from "../../components/Socials/getSocials";
import React from "react";
import * as s from "./DescriptionBlock.styled";
import { INSTRUCTIONS_URL } from "../../constants/links";

const socialList = [
  SocialsType.TWITTER,
  SocialsType.GITHUB,
  SocialsType.TELEGRAM,
];

const DescriptionBlock = ({ common }: { common: any }) => (
  <s.Wrapper>
    <s.Content>
      <s.FirstRow>
        <s.Column>
          <s.Title>What is this?</s.Title>
          <s.Text>
            When you want to verify your Solidity Smart Contract's code on
            etherscan, bscscan, polygonscan and etc. or manually make a
            transaction to call your contract's method, you need to encode input
            arguments in a special way.
            {<br />}
            ABI Encoding Service helps you to encode these arguments in a such
            way.
          </s.Text>
        </s.Column>
        <s.Column>
          <s.Title>How it works?</s.Title>
          <s.Text>
            You can use auto-parse section. Just copy your ABI json interface to
            an input field and click a "Parse" button. After that all the
            necessary parameters will appear. Insert values and get the result.
            {<br />}
            Also you can manually construct your object using manual section.
          </s.Text>
        </s.Column>
      </s.FirstRow>
      <s.Column>
        <s.SubTitle>Do you have any problems?</s.SubTitle>
        <s.Row>
          <s.ContactText>
            Do you have any problems? Read{" "}
            <s.Link
              href={INSTRUCTIONS_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              instructions
            </s.Link>{" "}
            or contact with us using socials:
          </s.ContactText>
          <Socials common={common} socialList={socialList} />
        </s.Row>
      </s.Column>
    </s.Content>
  </s.Wrapper>
);

export default DescriptionBlock;
