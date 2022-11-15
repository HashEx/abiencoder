import { DSA_URL, MAXIMIZER_URL, TELEGRAM_BOT_URL } from "../constants/links";
import telegramBot from "../images/telegramBot.svg";
import telegramBotMob from "../images/telegramBotMob.svg";
import dsa from "../images/dsa.svg";
import dsaMob from "../images/dsaMob.svg";
import maximizer from "../images/maximizer.svg";
import maximizerMob from "../images/maximizerMob.svg";

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
];
