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
          <s.Title>What is ABI Encoder?</s.Title>
          <s.Text>
          When you want to verify your Solidity Smart Contract's code on EtherScan, BscScan, PolygonScan, etc., or manually make a transaction to call your contract's method, you need to encode input arguments in a special way.
            {<br />}
            ABI Encoding Service helps you to encode these arguments.
          </s.Text>
        </s.Column>
        <s.Column>
          <s.Title>How does it work?</s.Title>
          <s.Text>
          You can use the auto-parse section. Just copy your ABI json interface to an input field and click a ‘Parse’ button. After that, all the necessary parameters will appear. Insert values and get the result.
            {<br />}
            Also, you can manually construct your object using the manual section.
          </s.Text>
        </s.Column>
      </s.FirstRow>
      <s.Column>
        <s.SubTitle>Do you have any questions?</s.SubTitle>
        <s.Row>
          <s.ContactText>
          Do you have any questions? Read the{" "}
            <s.Link
              href={INSTRUCTIONS_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              instructions
            </s.Link>{" "}
            or contact us on social media:
          </s.ContactText>
          <Socials common={common} socialList={socialList} />
        </s.Row>
      </s.Column>
    </s.Content>
  </s.Wrapper>
);

export default DescriptionBlock;
