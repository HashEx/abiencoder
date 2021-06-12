import React from "react";
import { FaTwitter, FaGithub } from "react-icons/fa";

import "./SocialLinks.css";

const socials = [
  {
    icon: FaTwitter,
    href: "https://twitter.com/HashExOfficial",
  },
  {
    icon: FaGithub,
    href: "https://github.com/HashEx/abiencoder",
  },
];

const SocialLinks = () => {
  return (
    <div className="social-links">
      {socials.map((social, index) => {
        const Icon = social.icon;
        return (
          <a
            href={social.href}
            key={index}
            className="social-link"
            target="_blank"
            rel="noreferrer nofollower"
          >
            <Icon />
          </a>
        );
      })}
    </div>
  );
};

export default SocialLinks;
