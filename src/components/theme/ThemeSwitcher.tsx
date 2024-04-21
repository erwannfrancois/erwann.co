"use client";

import * as React from "react";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export default function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div
      className="flex items-center space-x-2 cursor-pointer"
      onClick={toggleTheme}
    >
      <div className="w-3 h-3 bg-black"></div>
    </div>
  );
}
