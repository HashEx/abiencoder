import React from "react";

import * as s from "./Hero.styled";

interface IHero {
  hero: {
    title: string;
    summary: string;
  };
}

const HomepageHero: React.FC<IHero> = ({ hero }) => (
  <s.Hero>
    <s.Container>
      <s.Content>
        <s.TitleContainer>
          <s.Title>{hero?.title}</s.Title>
        </s.TitleContainer>

        <s.Summary>{hero?.summary}</s.Summary>
      </s.Content>
    </s.Container>
  </s.Hero>
);

export default HomepageHero;
