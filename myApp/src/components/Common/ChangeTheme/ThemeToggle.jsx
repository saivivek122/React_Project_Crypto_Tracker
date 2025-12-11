import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

export default function ThemeToggle() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      style={{
        background: "transparent",
        border: "1px solid var(--blue)",
        padding: "6px 12px",
        borderRadius: "8px",
        cursor: "pointer",
        color: "var(--white)",
      }}
    >
      {theme === "dark" ? "🌞 Light Mode" : "🌙 Dark Mode"}
    </button>
  );
}
