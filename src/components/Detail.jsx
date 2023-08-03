import { LangContext } from "@/contexts/LangContext";
import { ThemeContext } from "@/contexts/ThemeContext";
import { useContext } from "react";

export const Detail = () => {
  const { theme, lightActivated, darkActivated } = useContext(ThemeContext);
  const { lang } = useContext(LangContext);
  return (
    <p className="text-center" style={{ color: theme.fgColor }}>
      {theme.name === "dark"
        ? lang.detail.darkActivated
        : lang.detail.lightActivated}
    </p>
  );
};