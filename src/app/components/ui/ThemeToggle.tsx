"use client";

import { useEffect, useState } from "react";
import { DarkModeIcon, LightModeIcon } from "@/public/icons/";

export default function ThemeToggle() {
const [darkMode, setDarkMode] = useState(() => {
  if (typeof window === "undefined") return false;
  const savedTheme = localStorage.getItem("theme");
  return savedTheme === "dark";
});

useEffect(() => {
  // DOM class ko sync karna "external system update" hai — ye theek hai
  // effect body mein rehna, kyunke ye state change nahi kar raha
  if (darkMode) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
}, [darkMode]);

  const toggleDarkMode = () => {
    const html = document.documentElement;
    if (html.classList.contains("dark")) {
      html.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setDarkMode(false);
    } else {
      html.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setDarkMode(true);
    }
  };

  return (
    <button onClick={toggleDarkMode} className="cursor-pointer">
      {darkMode ? <DarkModeIcon /> : <LightModeIcon />}
    </button>
  );
}
