"use client"
import { useEffect, useState } from "react";
import { LightMode, DarkModeOutlined } from "@mui/icons-material";
import { motion, AnimatePresence } from "framer-motion";
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

  const spring = {
    type: "spring",
    stiffness: 700,
    damping: 30
  };

  return (
    <>
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={darkMode ? "dark" : "light"}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[-1]"
          style={{
            backgroundColor: darkMode ? "#1a202c" : "#ffffff",
          }}
        />
      </AnimatePresence>

      <div className="flex items-center w-full max-w-[200px]">
        <Button width="specs" size="md">
          Login
        </Button>

        <div
          className="flex bg-[#fdfdfd] border border-[#dcd5d5] dark:border-[#FFFFFF33]/30 w-full max-w-[3.6rem] h-[1.7rem] ml-[1.2rem] rounded-[1.5rem] dark:bg-green-900 relative cursor-pointer"
          onClick={() => setDarkMode(!darkMode)}
        >
          <LightMode className="!text-base ml-[5.5px] place-self-center z-10 text-[#FFFFFF] dark:text-[#FFFFFF66]/40" />

          <motion.div
            className="flex bg-[#07C589] h-[1.8rem] w-[1.8rem] rounded-full absolute"
            layout
            transition={spring}
            animate={{
              x: darkMode ? "1.7rem" : "0rem"
            }}
          />

          <DarkModeOutlined className="!text-base mr-[2.2px] place-self-center z-10 text-[#1E1E1E99] dark:text-[#FFFFFF] ml-[12px]" />
        </div>
      </div>
    </>
  );
}