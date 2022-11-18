import React from "react";
import * as s from "./InfoSection.styled";

const InfoBlock = () => (
  <s.Wrapper>
    <s.Content>
      <s.Row>
        <s.FirstText>
          HashEx offers a free ABI decoder online service that allows you to
          encode your contract’s arguments.
          {<br />}
          {<br />}
          ABI itself is the description of the code interface. It’s a way for
          the contracts to interact within an ecosystem as well as
          contract-to-contract.
        </s.FirstText>

        <s.SecondText>
          Smart contract ABI parsing is required for verifying the contract on
          Etherscan or making a transaction to call a method. For most actions
          regarding this code, you would require a special tool, and the
          arguments have to be encoded in a specific way. HashEx tool does it
          automatically, free, and doesn’t involve downloading any extra
          applications.
          {<br />}
          {<br />}
          Code itself is used in the byte format, so it’s harder to decode it
          correctly. For easy interactions with said code, HashEx has created
          its ABI decoder. An additional tool allows you to manually enter the
          values for the parameters.
        </s.SecondText>
      </s.Row>
    </s.Content>
  </s.Wrapper>
);

export default InfoBlock;
