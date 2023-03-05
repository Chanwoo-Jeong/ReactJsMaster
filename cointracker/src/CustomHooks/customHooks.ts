import { useState } from "react";

export function useTheming() {
  const [isDark, setDark] = useState<boolean>(false);
  const changeMode = () => {
    setDark(!isDark);
  };
  return { isDark, changeMode };
}
