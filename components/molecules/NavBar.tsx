// import navLinks from "@/constants"

import { navLinks } from "@/constants";
import Button from "../atoms/button";



export default function navBar() {
   
    
    return (
        <nav className="flex flex-row items-center py-4 overflow-hidden">

            <div className="font-bold text-[1.5rem]">
            Dent<span className="text-[#07C589]">Clack</span>
            </div>

            <ul className="w-full flex-row hidden sm:flex place-content-end pr-32 ">
                {navLinks.map((nav, index) => (
                    <li className="pl-8 font-poppins text-[1rem] hover:text-[#07C589] list-none">{nav.title}</li>
                ))}
            </ul>

            <Button color="blue" size="md" width="auto">Login</Button>
            
            
        </nav>
    )
}