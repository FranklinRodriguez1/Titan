"use client";
import { useEffect, useState } from "react";

type Theme = "acero" | "mono" | "obsidiana" | "obsidiana-electrico" | "obsidiana-ambar";
const ORDER: Theme[] = ["acero", "mono", "obsidiana", "obsidiana-electrico", "obsidiana-ambar"];
const LABEL: Record<Theme, string> = {
  acero: "Tema: Acero",
  mono: "Tema: Mono",
  obsidiana: "Tema: Obsidiana Zafiro",
  "obsidiana-electrico": "Tema: Obsidiana Eléctrico",
  "obsidiana-ambar": "Tema: Obsidiana Ámbar",
};

function apply(theme: Theme) {
  if (theme === "acero") {
    document.documentElement.removeAttribute("data-theme");
  } else {
    document.documentElement.setAttribute("data-theme", theme);
  }
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("acero");

  useEffect(() => {
    const stored = localStorage.getItem("theme") as Theme | null;
    if (stored && ORDER.includes(stored)) setTheme(stored);
  }, []);

  function toggle() {
    const next = ORDER[(ORDER.indexOf(theme) + 1) % ORDER.length];
    setTheme(next);
    apply(next);
    try {
      localStorage.setItem("theme", next);
    } catch {}
  }

  return (
    <button type="button" className="theme-toggle" onClick={toggle} aria-label="Cambiar tema de color">
      {LABEL[theme]}
    </button>
  );
}
