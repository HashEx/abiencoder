import React from "react";

import Button from "../../components/Button";

import * as s from "./OtherServices.styled";

export interface IOtherServices {
  common: any;
  title: string;
  ourProductsLink?: string;
  buttonText: string;
  items: {
    id: string | number;
    title: string;
    text: string;
    link: string;
  }[];
  hasTopOffset?: boolean;
}

const OtherServices: React.FC<IOtherServices> = ({
  common,
  title,
  ourProductsLink,
  buttonText,
  items,
  hasTopOffset,
}) => (
  <s.OtherServicesBlock hasTopOffset={hasTopOffset}>
    <s.Container>
      {!ourProductsLink && (
        <s.TopContainer>
          <s.OtherTitle>{title}</s.OtherTitle>
        </s.TopContainer>
      )}

      {ourProductsLink && (
        <s.OurServicesTopContainer>
          <s.OtherTitle>{title}</s.OtherTitle>
          <s.ViewProductsLinkContainer>
            <s.ViewProductsLink href={ourProductsLink}>
              Our Products
            </s.ViewProductsLink>
          </s.ViewProductsLinkContainer>
        </s.OurServicesTopContainer>
      )}

      <s.OtherItems>
        {items?.map((item) => (
          <s.OtherItem key={item.id}>
            <div>
              <s.OtherItemTitle>{item.title}</s.OtherItemTitle>
              <s.OtherItemText>{item.text}</s.OtherItemText>
            </div>
            <s.OtherItemLink href={item.link} target="_blank">
              Learn more
            </s.OtherItemLink>
          </s.OtherItem>
        ))}
      </s.OtherItems>
      <s.OtherButton>
        <Button
          text={buttonText}
          hasArrow={Boolean(ourProductsLink)}
          href={common?.servicesHref}
        />
      </s.OtherButton>
      <s.ViewProductsLinkBottom>
        <s.ViewProductsLink href={ourProductsLink}>
          Our Products
        </s.ViewProductsLink>
      </s.ViewProductsLinkBottom>
    </s.Container>
  </s.OtherServicesBlock>
);

export default OtherServices;
