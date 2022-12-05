import { useState } from "react";
import Moon from "../Icons/Moon";
import Sun from "../Icons/Sun";
import * as s from "./ThemeButton.styled";

const ThemeButton = ({ themeToggler, mode, className }: { themeToggler: () => void, mode: string, className?: string }) => {
  const [active, setActive] = useState(mode === 'dark');

  const onClick = () => {
    setActive(!active);
    themeToggler();
  }

  return (
    <s.Switcher onClick={onClick} className={className}>
      <s.Circle active={active}>
        {active ? <Moon /> : <Sun />}
      </s.Circle>
    </s.Switcher>
  )
}

export default ThemeButton