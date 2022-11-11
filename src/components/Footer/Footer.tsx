import React from "react";
import logo from "../../images/logo-footer.svg";

import * as s from "./Footer.styled";
import Socials from "../Socials";
import { SocialsType } from "../Socials/getSocials";
import { HASHEX_URL } from "../../constants/links";
import { common } from "../../constants/common";

const titleComponent = (title: string) => {
  if (title === "Services") {
    return <s.TitleLink href={common.servicesHref}>Services</s.TitleLink>;
  }

  if (title === "Products") {
    return <s.TitleLink href={common.productsHref}>Products</s.TitleLink>;
  }

  return title;
};

const linksComponent = ({ title, links }: { title: string; links: any[] }) => (
  <s.Block>
    <s.Title>{titleComponent(title)}</s.Title>

    <s.Links>
      {links?.map((item) => {
        const isExternal =
          item?.linkTitle === "Blog" ||
          item?.linkTitle === "Online ABI Encoder" ||
          item?.linkTitle === "Paper Wallet";

        return (
          <s.LinksItem key={item?.id}>
            {isExternal ? (
              <s.Link
                href={item?.linkHref}
                target="_blank"
                rel="noopener noreferrer"
              >
                {item?.linkTitle}
              </s.Link>
            ) : (
              <s.Link href={item?.linkHref}>{item?.linkTitle}</s.Link>
            )}
          </s.LinksItem>
        );
      })}
    </s.Links>
  </s.Block>
);

export const PoliciesComponent = ({ common }: { common: any }) => (
  <s.PolicyList>
    <s.PolicyLinks>
      <s.Policy>{common?.copyrightText}</s.Policy>
      <s.Policy>
        <s.PolicyLink href={common?.privacyHref}>
          {common?.privacyPolicyTitle}
        </s.PolicyLink>
      </s.Policy>
      <s.Policy>
        <s.PolicyLink href={common?.cookieHref}>
          {common?.cookiePolicyTitle}
        </s.PolicyLink>
      </s.Policy>
    </s.PolicyLinks>
    <s.AdressBlock>
      <s.DSAMemberBadge
        href={common?.defiBadgeLink}
        target="_blank"
        rel="noopener noreferrer"
      />
      <s.CompanyAdress>
        HashEx US, LLC&nbsp;
        <s.DesktopHyphenation />
        16192 COASTAL&nbsp;
        <s.Hyphenation />
        HWY -&nbsp;
        <s.DesktopHyphenation />
        LEWES DE&nbsp;19958, USA
      </s.CompanyAdress>
    </s.AdressBlock>
  </s.PolicyList>
);

const footerSocials = Object.values(SocialsType) as SocialsType[];

const Footer = ({ common }: { common: any }) => (
  <s.Footer>
    <s.Container>
      <s.TopContainer>
        <s.LogoWrapper href={HASHEX_URL}>
          Logo
          <img src={logo} alt="logo" />
        </s.LogoWrapper>

        <Socials common={common} socialList={footerSocials} />

        <s.PoliciesDesktop>
          <PoliciesComponent common={common} />
        </s.PoliciesDesktop>
      </s.TopContainer>

      <s.Navigation>
        <s.Audits>
          {linksComponent({
            title: common?.auditsTitle,
            links: common?.auditsLinks,
          })}
          <s.Chains>
            {linksComponent({
              title: common?.chainsTitle,
              links: common?.chainsLinks,
            })}
          </s.Chains>
        </s.Audits>
        <s.AuditsTypes>
          {linksComponent({
            title: common?.typesOfAuditsTitle,
            links: common?.typesOfAuditsLinks,
          })}
        </s.AuditsTypes>
        <s.Products>
          {linksComponent({
            title: common?.productsTitle,
            links: common?.productsLinks,
          })}
        </s.Products>
        <s.Services>
          {linksComponent({
            title: common?.servicesTitle,
            links: common?.servicesLinks,
          })}
        </s.Services>
        <s.Company>
          {linksComponent({
            title: common?.companyTitle,
            links: common?.companyLinks,
          })}
        </s.Company>
        <s.PoliciesMobile>
          <PoliciesComponent common={common} />
        </s.PoliciesMobile>
      </s.Navigation>
    </s.Container>
  </s.Footer>
);

export default Footer;
