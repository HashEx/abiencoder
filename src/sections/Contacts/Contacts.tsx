import React from "react";
import Button from "../../components/Button";

import EmailIcon from "../../components/Icons/Email";
import TelegramIcon from "../../components/Icons/Telegram";
import WeChatIcon from "../../components/Icons/WeChat";
import { pushRequestAuditClick } from "../../utils/gtag";

import * as s from "./Contacts.styled";

interface IContacts {
  title?: string;
  requestButtonText?: string;
  requestButtonHref?: string;
  email?: string;
}

interface IContactsProps {
  mode: "light" | "dark";
  contacts: IContacts;
  telegramLink: string;
  emailLink: string;
}

const onRequestClick = () => pushRequestAuditClick();

const Contacts: React.FC<IContactsProps> = ({
  mode,
  contacts,
  telegramLink,
  emailLink,
}) => (
  <s.Contacts mode={mode}>
    <s.Container>
      <s.Title>{contacts?.title}</s.Title>

      <s.LinksContainer>
        <s.Links>
          <s.Link
            href={telegramLink}
            mode={mode}
            target="_blank"
            rel="noopener noreferrer"
          >
            <TelegramIcon />
            telegram
          </s.Link>

          <s.Link
            href={`mailto:${emailLink}`}
            mode={mode}
            target="_blank"
            rel="noopener noreferrer"
          >
            <EmailIcon />
            {contacts?.email}
          </s.Link>
          <s.WeChatWrapper>
            <s.Link mode={mode}>
              <WeChatIcon />
              WeChat
            </s.Link>
            <s.TooltipIllustration />
          </s.WeChatWrapper>
        </s.Links>

        <Button
          href={contacts?.requestButtonHref}
          text={contacts?.requestButtonText}
          onClick={onRequestClick}
        />
      </s.LinksContainer>
    </s.Container>
  </s.Contacts>
);

export default Contacts;
