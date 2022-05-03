import React from "react";
import { FaTwitter, FaGithub, FaTelegramPlane } from "react-icons/fa";
import { pushGtagSocialClick, SocialType } from "../../utils/gtag";

import "./SocialLinks.css";

const socials = [
  {
    icon: FaTwitter,
    href: "https://twitter.com/HashExOfficial",
    gtagKey: 'twitter',
  },
  {
    icon: FaGithub,
    href: "https://github.com/HashEx/abiencoder",
    gtagKey: 'github',
  },
  {
    icon: FaTelegramPlane,
    href: "https://t.me/HashExOfficial",
    gtagKey: 'telegram',
  }
];

const SocialLinks = () => {
  return (
    <div className="social-links">
      {socials.map((social, index) => {
        const Icon = social.icon;
        const handleClick = () => pushGtagSocialClick(social.gtagKey as SocialType);
        return (
          <a
            href={social.href}
            key={index}
            className="social-link"
            target="_blank"
            rel="noreferrer nofollower"
            onClick={handleClick}
          >
            <Icon size={14} />
          </a>
        );
      })}
    </div>
  );
};

export default SocialLinks;
