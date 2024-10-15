import { navLinks } from "@/constants";
import ThemeToggle from "../atoms/themeToggle";
import Image from "next/image";
import dentLogoLite from "@/public/images/dentLogoLite.png";
import dentLogoDark from "@/public/images/dentLogoDark.png";
import Button from "@/components/atoms/Button";
import Link from "next/link";

export default function navBar() {
  return (
    <nav className='flex flex-row justify-between items-center py-2 h-full overflow-hidden text-[#000000] dark:text-[#FFFF] ss:space-x-2 border'>
      <div className='max-w-32 h-fit overflow-hidden border  left-0 top-0'>
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
        <ul className='w-full flex-row hidden ss:flex items-center justify-end lg:s++pace-x-10 ss:space-x-2 sm:space-x-4 sm:mr-1 lg:mr-[2rem] border'>
          {navLinks.map((nav, index) => (
            <li
              key={index}
              className='font-poppins hover:text-[#07C589] cursor-pointer'
            >
              <Link href={`#${nav.title}`} className="!capitalize text-sm font-poppins">{nav.title}</Link>
            </li>
          ))}
        </ul>

        <div className='hidden ss:flex items-center justify-between w-full space-x-4'>
          <Button width='full' size='sm'>
            Login
          </Button>

          <ThemeToggle />
        </div>

        <div className="flex flex-col space-y-[0.2rem] ss:hidden">
          <div className="rounded-sm w-6 h-1 bg-[#FFFFFF] bg:"></div>
          <div className="rounded-sm w-6 h-1 bg-[#FFFFFF] "></div>
          <div className="rounded-sm w-6 h-1 bg-[#FFFFFF] "></div>
        </div>

      </div>
    </nav>
  
  );
    
}
