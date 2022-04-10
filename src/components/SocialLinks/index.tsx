import React from "react";
import { FaTwitter, FaGithub, FaTelegramPlane } from "react-icons/fa";

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
  {
    icon: FaTelegramPlane,
    href: "https://t.me/HashExOfficial"
  }
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
            <Icon size={14} />
          </a>
        );
      })}
    </div>
  );
};

export default SocialLinks;
