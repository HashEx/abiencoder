import React from "react";

import * as s from "./Header.styled";

const DropdownMenu = ({ links }: { links: any[] }) => (
  <s.Dropdown>
    {links?.map((item) => {
      const isExternal =
        item?.linkTitle === "Online ABI Encoder" ||
        item?.linkTitle === "Paper Wallet";

      const handleClick = () => pushNavigationClick(item.linkTitle);

      return (
        <s.DropdownItem key={item?.id}>
          {isExternal ? (
            <s.MenuDropdownLink
              href={item?.linkHref}
              target="_blank"
              rel="noopener noreferrer"
            >
              {item?.linkTitle}
            </s.MenuDropdownLink>
          ) : (
            <s.MenuDropdownLink href={item?.linkHref} onClick={handleClick}>
              {item?.linkTitle}
            </s.MenuDropdownLink>
          )}
        </s.DropdownItem>
      );
    })}
  </s.Dropdown>
);

export default DropdownMenu;
function pushNavigationClick(linkTitle: any) {
  throw new Error("Function not implemented.");
}
