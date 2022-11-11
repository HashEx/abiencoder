export const pushGtagEvent = (event: string, args: any) => {
  if (typeof window !== "undefined" && (window as any).gtag) {
    const { gtag } = window as any;

    gtag("event", event, args);
  } else {
    if (process.env.NODE_ENV === "development") {
      console.log("gtag('event',", event, args, ")");
    }
  }
};

export const pushGtagNavigationsClick = (navText: string) => {
  pushGtagEvent("elements_click", {
    event_category: "navigations",
    event_label: navText,
  });
};

export const pushRequestAuditClick = (
  url: string = window.location.pathname
) => {
  pushGtagEvent("request_contract", {
    event_category: "elements",
    event_action: "click",
    event_label: url, // for label we must used pagepath in this event
  });
};

export type SocialType =
  | "linkedin"
  | "hashex"
  | "github:instruction"
  | "github"
  | "twitter"
  | "telegram"
  | "open zeppelin"
  | "gnosis chain"
  | "okc"
  | "medium"
  | "hashex_email"
  | "ethereum chain";

export const pushGtagSocialClick = (social: SocialType) => {
  pushGtagEvent("elements_click", {
    event_category: "social_media",
    event_label: social,
  });
};

export type ParseActionType = "parse" | "clear" | "add" | "remove" | "copy";

export const pushGtagParsesActionButton = (action: ParseActionType) => {
  pushGtagEvent("parser", {
    event_category: "action_button",
    event_label: action,
  });
};

export const pushGtagChooseFunction = (fnLabel: string) => {
  pushGtagEvent("choose_func", {
    event_category: "parser",
    event_label: fnLabel,
  });
};

export const pushGtagChooseArgument = (argumentLabel: string) => {
  pushGtagEvent("choose_argument", {
    event_category: "parser",
    event_label: argumentLabel,
  });
};

export const pushGtagRequestAudit = () => {
  pushGtagEvent("form_send", {
    event_category: "request_audit",
  });
};

export const pushGtagRequestAuditError = () => {
  pushGtagEvent("form_send_error", {
    event_category: "request_audit",
  });
};
