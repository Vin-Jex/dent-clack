"use client";
import { useState } from "react";
import { navLinks } from "@/constants";
import ThemeToggle from "../atoms/themeToggle";
import Image from "next/image";
import dentLogoLite from "@/public/images/dentLogoLite.png";
import dentLogoDark from "@/public/images/dentLogoDark.png";
import Button from "@/components/atoms/Button";
import Link from "next/link";
import { Close } from "@mui/icons-material";

export default function navBar() {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <nav className="flex flex-row justify-between items-center py-2 h-full overflow-hidden text-[#000000] dark:text-[#FFFF] ss:space-x-2 border">
      <div className="max-w-32 h-fit overflow-hidden border  left-0 top-0">
        <Image
          src={dentLogoLite}
          className={`w-full h-full flex dark:hidden`}
          alt="dentLogo"
        ></Image>
        <Image
          src={dentLogoDark}
          className={`w-full h-full hidden dark:flex`}
          alt="dentLogo"
        ></Image>
      </div>

      <div className="flex items-center justify-end space-x-20">
        <ul className="w-full flex-row hidden ss:flex items-center justify-end lg:s++pace-x-10 ss:space-x-2 sm:space-x-4 sm:mr-1 lg:mr-[2rem] border">
          {navLinks.map((nav, index) => (
            <li
              key={index}
              className="font-poppins hover:text-[#07C589] cursor-pointer"
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

        <div className="hidden ss:flex items-center justify-between w-full space-x-4">
          <Button width="full" size="sm">
            Login
          </Button>

          <ThemeToggle />
        </div>

        <div
          className="flex flex-col space-y-[0.2rem] ss:hidden"
          onClick={() => setOpen(true)}
        >
          <div className="rounded-sm w-6 h-1 bg-[#FFFFFF] bg:"></div>
          <div className="rounded-sm w-6 h-1 bg-[#FFFFFF] "></div>
          <div className="rounded-sm w-6 h-1 bg-[#FFFFFF] "></div>
        </div>

        <div
          className={`fixed right-0 top-0 z-[9999999999] flex h-screen w-full origin-top bg-gray-300 text-gray-800 shadow-md transition-transform transition-opacity duration-500 ease-in-out transform ${
            open ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
          } dark:bg-stone-900 dark:text-white sm:hidden`}
        >
          <div className="flex justify-between flex-col w-full p-4">
            <div>
              <div className="flex justify-end">
                <ThemeToggle />
              </div>
              <ul className="w-full flex flex-col justify-center items-center py-6">
                {navLinks.map((nav, index) => (
                  <li
                    key={index}
                    className="w-full font-poppins hover:text-[#07C589] cursor-pointer text-2xl py-3"
                  >
                    <Link
                      href={`#${nav.title}`}
                      className="!capitalize  font-poppins w-full"
                      onClick={() => setOpen(false)}
                    >
                      {nav.title}
                    </Link>
                  </li>
                ))}
                <div className="py-3 w-full text-xl font-medium">
                  <Button width="full" size="lg">
                    Login
                  </Button>
                </div>
              </ul>
            </div>
            <div className="flex justify-center items-center ">
              {/* <button
                className="bg-[#f97676] p-2 w-full"
                onClick={() => setOpen(false)}
              >
                Close
              </button> */}
              <div className="p-3 w-full text-xl font-medium">
                <Button
                  width="full"
                  size="lg"
                  color="red"
                  onClick={() => setOpen(false)}
                >
                  Close <Close />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
