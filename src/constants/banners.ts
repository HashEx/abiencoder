import { DSA_URL, MAXIMIZER_URL, HASHEX_URL, TELEGRAM_BOT_URL } from "../constants/links";
import telegramBot from "../images/telegramBot.jpeg";
import telegramBotMob from "../images/telegramBotMob.svg";
import dsa from "../images/dsa.jpg";
import dsaMob from "../images/dsaMob.svg";
import maximizer from "../images/maximizer.jpeg";
import maximizerMob from "../images/maximizerMob.svg";
import hashex from "../images/HashExBanner.jpeg";
import hashexMob from "../images/HashExBannerMob.jpeg";

export const banners = [
  {
    alt: "Token Checker Telegram Bot",
    src: telegramBot,
    link: TELEGRAM_BOT_URL,
    srcMob: telegramBotMob,
  },
  {
    alt: "Defi Security Alliance",
    src: dsa,
    link: DSA_URL,
    srcMob: dsaMob,
  },
  {
    alt: "Maximize your lendings",
    src: maximizer,
    link: MAXIMIZER_URL,
    srcMob: maximizerMob,
  },
  {
    alt: "HashEx",
    src: hashex,
    link: "https://hashex.org/smart-contract-audit/",
    srcMob: hashexMob,
  }
];
