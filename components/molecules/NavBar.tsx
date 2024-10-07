import { navLinks } from "@/constants";
import ThemeToggle from "../atoms/themeToggle";
import Image from "next/image";
import dentLogoLite from "@/public/images/dentLogoLite.png";
import dentLogoDark from "@/public/images/dentLogoDark.png";
import Button from "@/components/atoms/Button";
import Link from "next/link";

export default function navBar() {
  return (
    <nav className='flex flex-row justify-between items-center py-2 overflow-hidden max-h-[10rem]'>
      <div className='w-32 h-fit overflow-hidden'>
        <Image
          src={dentLogoLite}
          className={`w-full h-full flex dark:hidden`}
          alt='dentLogo'
        ></Image>
        <Image
          src={dentLogoDark}
          className={`w-full h-full hidden dark:flex`}
          alt='dentLogo'
        ></Image>
      </div>

      <div className='flex items-center justify-end space-x-20'>
        <ul className='w-full flex-row hidden sm:flex items-center justify-end space-x-10 mr-[2rem] '>
          {navLinks.map((nav, index) => (
            <li
              key={index}
              className='font-poppins text-[1rem]  hover:text-[#07C589] hover:cursor-pointer'
            >
              <Link href='#'>{nav.title}</Link>
            </li>
          ))}
        </ul>

        <div className='flex items-center justify-between w-full space-x-4'>
          <Button width='full' size='sm'>
            Login
          </Button>

          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
