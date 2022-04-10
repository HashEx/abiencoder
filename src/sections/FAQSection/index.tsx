import React from "react";

import Section from "../../components/Section";

const FAQSection = () => (
  <Section id="how-it-works" title="How it works?">
    <p>
      You can use auto-parse section. Just copy your ABI json interface to an
      input field and click a "Parse" button. After that all the necessary
      parameters will appear. Insert values and get the result.
    </p>
    <p>Also you can manually construct your object using manual section.</p>

    <p>
      Read{" "}
      <a
        href="https://github.com/HashEx/abiencoder#readme"
        target="_blank"
        className="green"
      >
        detailed instructions
      </a>{" "}
      about this service.
    </p>
  </Section>
);

export default FAQSection;
