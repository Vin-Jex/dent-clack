"use client";
import { Menu } from "@mui/icons-material";
import { useState } from "react";
import { navLinks } from "@/constants";
import Link from "next/link";
import { Close } from "@mui/icons-material/";
import Image from "next/image";
import dentLogoLite from "@/public/images/dentLogoLite.png";
import dentLogoDark from "@/public/images/dentLogoDark.png";
import ThemeToggle from "../atoms/themeToggle";

export default function MenuButton() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
      console.log(isMenuOpen);
    } else {
      setIsMenuOpen(true);
      console.log(isMenuOpen);
    }
  };

  return (
    <div className={`flex flex-row justify-between items-center w-full`}>
      <div
        className="flex flex-col ss:hidden text-[#22302B] dark:text-[#FFFFFF] z-[100]"
        onClick={() => handleMenuClick()}
      >
        {isMenuOpen ? <Close /> : <Menu />}
      </div>

      <ul
        className={`flex flex-col ss:px-0 absolute ss:flex ss:flex-row ss:relative ss:w-full ss:w-fit ss:bg-transparent ss:items-center ss:justify-end lg:space-x-10 ss:space-x-2 sm:space-x-4 ss:space-y-0 sm:mr-1 lg:mr-[2rem] ss:translate-x-0 ${isMenuOpen ? "px-4 z-[100] bg-white top-0 left-0 w-[50vw] h-[100vh] space-y-6 bg-[#FFFFFF] dark:text-[#22302B] translate-x-0 transform duration-1000 ease-in-out transition-all" : "hidden"}`}
      >
        {/* ${isMenuOpen ?-translate-x-full  ss:relative   " : "hidden ss:flex-row md:relative "} */}
        <div
          className={`flex ss:hidden ${isMenuOpen ? "flex flex-row h-fit overflow-hidden z-50 w-fit items-center mt-2.5 space-x-10" : "hidden"}`}
        >
          <Image
            src={dentLogoLite}
            className={`w-full h-full flex max-w-24`}
            alt="dentLogo"
          ></Image>
        </div>

        {navLinks.map((nav, index) => (
          <li
            key={index}
            className="ss:hidden font-poppins hover:text-[#07C589] cursor-pointer"
          >
            <Link
              href={`#${nav.title}`}
              className="!capitalize text-sm font-poppins"
              onClick={() => handleMenuClick()}
            >
              {nav.title}
            </Link>
          </li>
        ))}

        {navLinks.map((nav, index) => (
          <li
            key={index}
            className="ss:flex hidden font-poppins hover:text-[#07C589] cursor-pointer"
          >
            <Link
              href={`#${nav.title}`}
              className="!capitalize text-sm font-poppins"
            >
              {nav.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
