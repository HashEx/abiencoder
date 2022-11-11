import React from "react";
import { HASHEX_URL } from "../../constants/links";
import logo from "../../images/logo.svg";

import DropdownMenu from "../Header/DropdownMenu";
import MobileMenu from "../MobileMenu";
import SVG from "../Svg";

import * as s from "./Header.styled";

const Header = ({ common }: { common: any }) => {
  const auditsDropdownLinks = common?.auditsLinks.concat([
    {
      id: common?.auditsLinks?.length + 1,
      linkTitle: common?.chainsTitle,
      linkHref: common?.chainsHref,
    },
    {
      id: common?.auditsLinks?.length + 2,
      linkTitle: common?.typesOfAuditsTitle,
      linkHref: common?.typesOfAuditsHref,
    },
  ]);

  return (
    <s.Header>
      <s.Container>
        <s.LogoWrapper href={HASHEX_URL}>
          Logo
          <img src={logo} alt="hashex logo" width={144} />
        </s.LogoWrapper>

        <s.Navigation>
          <s.MenuItemsContainer>
            <s.MenuItem>
              {common?.auditsTitle}
              <DropdownMenu links={auditsDropdownLinks} />
            </s.MenuItem>

            <s.MenuItem>
              <s.MenuItemLink href={common?.servicesHref}>
                {common?.servicesTitle}
              </s.MenuItemLink>
              <DropdownMenu links={common?.servicesLinks} />
            </s.MenuItem>

            <s.MenuItem>
              <s.MenuItemLink href={common?.productsHref}>
                {common?.productsTitle}
              </s.MenuItemLink>
              <DropdownMenu links={common?.productsLinks} />
            </s.MenuItem>

            <s.MenuItem>
              {common?.companyTitle}
              <DropdownMenu links={common?.companyLinks} />
            </s.MenuItem>

            <s.MenuItem>
              <s.LetsTalkLink
                href={common?.telegramChatLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <SVG width="15" height="13" fill="none">
                  <path d="m14.901 1.414-2.257 10.559c-.178.752-.587.952-1.229.597l-3.42-2.523-1.66 1.594c-.221.221-.454.332-.697.332l.265-3.486 6.342-5.711c.155-.155.155-.244 0-.266-.133-.044-.277-.011-.431.1L3.977 7.557.59 6.494c-.376-.11-.554-.276-.531-.498.022-.221.254-.41.697-.564L13.938.319c.332-.111.598-.067.797.132.2.177.255.498.166.963Z" />
                </SVG>
                {common?.telegramChatTitle}
              </s.LetsTalkLink>
            </s.MenuItem>
          </s.MenuItemsContainer>
        </s.Navigation>

        <MobileMenu common={common} />
      </s.Container>
    </s.Header>
  );
};
export default Header;
