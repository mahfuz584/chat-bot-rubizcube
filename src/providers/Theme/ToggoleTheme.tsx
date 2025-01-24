"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { IoMoonSharp, IoSunnySharp } from "react-icons/io5";

export default function DarkLightToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  return (
    <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
      {theme === "dark" ? (
        <IoMoonSharp size={22} color="#FD6F00" />
      ) : (
        <IoSunnySharp size={22} color="#FD6F00" />
      )}
    </button>
  );
}
