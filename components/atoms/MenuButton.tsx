"use client";
import {Menu} from "@mui/icons-material";
import { useState } from "react";
import { navLinks } from "@/constants";
import Link from "next/link";
import {Close} from "@mui/icons-material/";
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
        className="flex flex-col ss:hidden"
        onClick={() => handleMenuClick()}
      >
        <Menu className={`${!isMenuOpen ? "flex text-[#22302B] dark:text-[#FFFFFF] z-50" : "hidden"}`}/>
        <Close className={`${isMenuOpen ? "flex text-[#22302B] dark:text-[#22302B] z-50" : "hidden"}`}/>

      </div>

      <div className={`flex ss:flex ss:border ss:w-full`}>

        <ul
          className={`ss:w-full ss:flex-row  ss:flex ss:items-center ss:justify-end lg:space-x-10 ss:space-x-2 sm:space-x-4 sm:mr-1 lg:mr-[2rem] ${isMenuOpen ? "flex-col absolute top-0 bg-[#FFFFFF] transform -translate-x-full space-y-6 w-[50vw] h-[100vh] px-2 -z-50 transition-all duration-1000 ease-in-out" : "hidden right-full"}`}
        >
          <div
            className={`flex ss:hidden ${isMenuOpen ? "flex flex-row h-fit overflow-hidden z-50 w-full items-center mt-2.5 space-x-10" : "hidden"}`} 
          >
            <Image
              src={dentLogoLite}
              className={`w-full h-full flex dark:hidden max-w-24`}
              alt="dentLogo"
            ></Image>
            <Image
              src={dentLogoDark}
              className={`w-full h-full hidden dark:flex max-w-24`}
              alt="dentLogo"
            ></Image>

          </div>
          
          {navLinks.map((nav, index) => (
            <li
              key={index}
              className="font-poppins hover:text-[#07C589] cursor-pointer border"
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
          
        </ul>
      </div>
    </div>
  );
}
