import { DSA_URL, TELEGRAM_BOT_URL } from '../constants/links'
import telegramBot from '../images/telegramBot.jpg'
import telegramBotMob from '../images/telegramBotMob.jpg'
import dsa from '../images/dsa.jpg'
import dsaMob from '../images/dsaMob.svg'
import hashex from '../images/HashExBanner.jpeg'
import hashexMob from '../images/HashExBannerMob.jpeg'
import hashexContacts from '../images/HashExContacts.jpg'
import hashexContactsMob from '../images/HashExContactsMob.jpg'

export const banners = [
  {
    alt: 'Token Checker Telegram Bot',
    src: telegramBot,
    link: TELEGRAM_BOT_URL,
    srcMob: telegramBotMob,
  },
  {
    alt: 'Defi Security Alliance',
    src: dsa,
    link: DSA_URL,
    srcMob: dsaMob,
  },
  {
    alt: 'HashEx',
    src: hashex,
    link: 'https://hashex.org/smart-contract-audit/',
    srcMob: hashexMob,
  },
  {
    alt: 'HashEx Contacts',
    src: hashexContacts,
    srcMob: hashexContactsMob,
    link: 'https://hashex.org/contacts/',
  },
]
