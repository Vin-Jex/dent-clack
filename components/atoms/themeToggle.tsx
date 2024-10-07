"use client";

import { useEffect, useState } from "react";
import { LightMode, DarkModeOutlined } from "@mui/icons-material";
import Button from "./Button";

export default function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") setDarkMode(true);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <div
      className='flex bg-[#fdfdfd] border border-[#dcd5d5] dark:border-[#FFFFFF33]/30 w-full max-w-[3.5rem] h-[1.7rem] ml-[1.2rem] rounded-[1.5rem] overflow-hidden relative dark:bg-green-900 p-[0.1rem] transition-all duration-500 ease-in-out'
      onClick={() => setDarkMode(!darkMode)}
    >
      <LightMode className='!text-base ml-[0.2rem] place-self-center z-10 text-[#FFFFFF] dark:text-[#FFFFFF66]/40 ' />

      <div
        className={`flex bg-[#07C589] h-[1.4rem] w-full max-w-[1.4rem] rounded-full place-self-center transform ${
          darkMode ? "right-0.5" : "mr-[5.2rem]"
        } absolute `}
      ></div>

      <DarkModeOutlined className='!text-base mr-[1rem] place-self-center z-10 text-[#1E1E1E99] dark:text-[#FFFFFF] ml-[0.7rem] ' />
    </div>
  );
}
