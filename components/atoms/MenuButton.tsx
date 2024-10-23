"use client";
import Menu from "@mui/icons-material";
import { useState } from "react";
import { navLinks } from "@/constants";
import Link from "next/link";
import CloseIcon from "@mui/icons-material/Close";
import Image from "next/image";
import dentLogoLite from "@/public/images/dentLogoLite.png";
import dentLogoDark from "@/public/images/dentLogoDark.png";

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
    <div className="border">
      <div
        className="flex flex-col space-y-[0.2rem] ss:hidden"
        onClick={() => handleMenuClick()}
      >
        <Menu className={`${!isMenuOpen ? "flex text-[#22302B] dark:text-[#FFFFFF] z-50" : "hidden"} `} />

      </div>

      <div className={`flex ss:flex ss:border ss:w-full`}>
        {/*  */}

        <ul
          className={`ss:w-full ss:flex-row  ss:flex ss:items-center ss:justify-end lg:space-x-10 ss:space-x-2 sm:space-x-4 sm:mr-1 lg:mr-[2rem] ${isMenuOpen ? " border flex-col absolute top-0 right-50 left-0 bg-[#FFFFFF] space-y-4 transition-transform duration-500 translate-x-10 w-[100vw] h-[100vh] p-4" : "hidden right-full"}`}
        >
          <div
            className={`${isMenuOpen ? "flex flex-row h-fit overflow-hidden left-0 top-0 z-10 space-x-72 w-full items-center border" : "hidden"}`} 
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
            <CloseIcon
              className={`${isMenuOpen ? "flex text-[#22302B] dark:text-[#FFFFFF] z-50" : "hidden"} `} onClick={() => handleMenuClick()}
            ></CloseIcon>
          </div>
          
          {navLinks.map((nav, index) => (
            <li
              key={index}
              className="font-poppins hover:text-[#07C589] cursor-pointer border"
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
    </div>
  );
}
