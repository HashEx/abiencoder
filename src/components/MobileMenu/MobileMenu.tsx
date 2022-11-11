import React, { useCallback, useMemo, useState } from "react";
import { pushRequestAuditClick } from "../../utils/gtag";

import Button from "../Button";

import * as s from "./MobileMenu.styled";

const ANIMATION_DURATION = 500;

const getAuditsState = ({
  chainsTitle,
  chainsLinks,
  typesOfAuditsTitle,
  typesOfAuditsLinks,
}: {
  chainsTitle: string;
  chainsLinks: any;
  typesOfAuditsTitle: string;
  typesOfAuditsLinks: any;
}) => ({
  [chainsTitle]: chainsLinks,
  [typesOfAuditsTitle]: typesOfAuditsLinks,
});

const getRestState = ({
  productsTitle,
  productsLinks,
  companyTitle,
  companyLinks,
  servicesTitle,
  servicesLinks,
}: {
  productsTitle: string;
  productsLinks: any;
  companyTitle: string;
  companyLinks: any;
  servicesTitle: string;
  servicesLinks: any;
}) => ({
  [servicesTitle]: servicesLinks,
  [productsTitle]: productsLinks,
  [companyTitle]: companyLinks,
});

interface ILink {
  id: number;
  linkTitle: string;
  linkHref: string;
}

const MobileMenu = ({ common }: { common: any }) => {
  const [opened, setOpened] = useState<boolean>(false);
  const [subMenuOpened, setSubMenuOpened] = useState<boolean>(false);
  const [subMenu, setSubMenu] = useState<string | null>(null);

  const auditsMenuState = useMemo(() => getAuditsState(common), [common]);
  const restMenuState = useMemo(() => getRestState(common), [common]);

  const menuState = { ...auditsMenuState, ...restMenuState };

  const setAtiveSubmenu = (key: string) => {
    setSubMenuOpened(true);
    setSubMenu(key);
  };

  const resetAtiveSubmenu = () => {
    setSubMenuOpened(false);

    setTimeout(() => {
      setSubMenu(null);
    }, ANIMATION_DURATION);
  };

  const toggleMenu = useCallback(() => {
    if (opened && subMenu) {
      resetAtiveSubmenu();
    }

    setOpened(!opened);
  }, [opened, subMenu]);

  const submenuTitle = React.useCallback(
    (title, common) => {
      if (title === common?.servicesTitle) {
        return (
          <s.MenuTitleLink href={common?.servicesHref} onClick={toggleMenu}>
            {common?.servicesTitle}
          </s.MenuTitleLink>
        );
      }

      if (title === common?.productsTitle) {
        return (
          <s.MenuTitleLink href={common?.productsHref} onClick={toggleMenu}>
            {common?.productsTitle}
          </s.MenuTitleLink>
        );
      }

      return subMenu;
    },
    [subMenu, toggleMenu]
  );

  const onRequestClick = () => {
    pushRequestAuditClick(window.location.pathname);
    toggleMenu();
  };

  return (
    <s.MobileMenu>
      <s.Menu opened={opened}>
        <s.MenuHeader>
          <s.GoBackLink onClick={resetAtiveSubmenu} visible={subMenuOpened} />

          <s.Hash />
        </s.MenuHeader>

        <s.MenuItemsContainer>
          <s.MenuItem active>{common?.auditsTitle}</s.MenuItem>

          {common?.auditsLinks.map((link: ILink) => (
            <s.MenuItem key={link.id}>
              <s.MenuItemLink href={link?.linkHref} onClick={toggleMenu}>
                {link?.linkTitle}
              </s.MenuItemLink>
            </s.MenuItem>
          ))}

          {Object.keys(auditsMenuState).map((menuItem) => (
            <s.MenuItem
              key={menuItem}
              onClick={() => setAtiveSubmenu(menuItem)}
            >
              <s.MenuItemLink hasArrow>{menuItem}</s.MenuItemLink>
            </s.MenuItem>
          ))}

          <s.RestMenuItemsContainer>
            <s.MenuItemsContainer>
              {Object.keys(restMenuState).map((menuItem) => (
                <s.MenuItem
                  key={menuItem}
                  onClick={() => setAtiveSubmenu(menuItem)}
                  hasArrow
                >
                  {menuItem}
                </s.MenuItem>
              ))}
            </s.MenuItemsContainer>
          </s.RestMenuItemsContainer>

          <s.ButtonContainer>
            <Button
              href={common?.contacts?.requestButtonHref}
              text="Request a Quote"
              onClick={toggleMenu}
            />
          </s.ButtonContainer>
        </s.MenuItemsContainer>

        <s.SubmenuItemsContainer opened={subMenuOpened}>
          <s.MenuItemsContainer>
            {subMenu && (
              <>
                <s.MenuItem active>{submenuTitle(subMenu, common)}</s.MenuItem>

                {menuState[subMenu].map((menuItem: ILink) => {
                  const isExternal =
                    menuItem?.linkTitle === "Blog" ||
                    menuItem?.linkTitle === "Online ABI Encoder" ||
                    menuItem?.linkTitle === "Paper Wallet";
                  return (
                    <s.MenuItem key={menuItem?.id}>
                      {isExternal ? (
                        <s.MenuItemLink
                          href={menuItem?.linkHref}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {menuItem?.linkTitle}
                        </s.MenuItemLink>
                      ) : (
                        <s.MenuItemLink
                          href={menuItem?.linkHref}
                          onClick={toggleMenu}
                        >
                          {menuItem?.linkTitle}
                        </s.MenuItemLink>
                      )}
                    </s.MenuItem>
                  );
                })}
              </>
            )}

            <s.MenuItem>
              <s.RequestLink
                href={common?.contacts?.requestButtonHref}
                onClick={onRequestClick}
              >
                Request a Quote
              </s.RequestLink>
            </s.MenuItem>
          </s.MenuItemsContainer>
        </s.SubmenuItemsContainer>
      </s.Menu>

      <s.Button type="button" onClick={toggleMenu}>
        <s.ButtonLine opened={opened} />
        <s.ButtonLine opened={opened} />
        <s.ButtonLine opened={opened} />
      </s.Button>
    </s.MobileMenu>
  );
};

export default MobileMenu;
