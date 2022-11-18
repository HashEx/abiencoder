import React, { useMemo } from "react";
import { SocialsType } from "./getSocials";

import { getSocials } from "./getSocials";

import * as s from "./Socials.styled";

const isEmail = (href: string): boolean =>
  // eslint-disable-next-line
  /(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/.test(
    href
  );

const Socials = ({
  socialList,
  common,
}: {
  socialList: SocialsType[];
  common: any;
}) => {
  const socials = useMemo(
    () => getSocials(socialList, common),
    [socialList, common]
  );

  return (
    <s.Socials>
      {socials.map((social) => (
        <s.Social key={social.alt}>
          <a
            href={
              isEmail(social?.href) ? `mailto:${social.href}` : `${social.href}`
            }
            target={isEmail(social?.href) ? "_self" : "_blank"}
            rel="noreferrer"
            onClick={social.onClick}
          >
            {social.icon}
          </a>
        </s.Social>
      ))}
    </s.Socials>
  );
};

export default Socials;
