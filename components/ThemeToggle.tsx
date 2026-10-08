"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("silencio-theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const nextTheme = savedTheme ? savedTheme === "dark" : prefersDark;

    setIsDark(nextTheme);
    document.documentElement.setAttribute("data-theme", nextTheme ? "dark" : "light");
  }, []);

  const toggleTheme = () => {
    const nextTheme = !isDark;
    setIsDark(nextTheme);
    document.documentElement.setAttribute("data-theme", nextTheme ? "dark" : "light");
    window.localStorage.setItem("silencio-theme", nextTheme ? "dark" : "light");
  };

  return (
    <button
      type="button"
      className="theme-switch"
      aria-label={isDark ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
      aria-pressed={!isDark}
      onClick={toggleTheme}
      title={isDark ? "Modo claro" : "Modo oscuro"}
    >
      <span className="theme-switch__track" aria-hidden="true">
        <span className="theme-switch__thumb">
          <span className="theme-switch__icon">{isDark ? "☀" : "☾"}</span>
        </span>
      </span>
      <span className="theme-switch__text">{isDark ? "Noche" : "Día"}</span>
    </button>
  );
}
