import { navLinks } from "@/constants";
import ThemeToggle from "../atoms/themeToggle";
import Image from "next/image";
import dentLogoLite from "@/public/images/dentLogoLite.png";
import dentLogoDark from "@/public/images/dentLogoDark.png";
import Button from "@/components/atoms/Button";
import Link from "next/link";
import MenuButton from "@/components/atoms/MenuButton";

export default function navBar() {
  return (

    <nav className="flex flex-row justify-between items-center py-2 h-full overflow-hidden text-[#000000] dark:text-[#FFFF] ss:space-x-2 z-20">

      <div className="flex max-w-32 h-fit overflow-hidden left-0 top-0">
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

      <div className="flex items-center justify-between">

        <MenuButton />


        <div className="hidden ss:flex items-center  ml-20  w-full space-x-4">
          <Button width="fit" size="sm">
            Login
          </Button>

          <ThemeToggle />
          
        </div>


      </div>

      
    </nav>
  );
}
