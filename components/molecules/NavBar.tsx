// import navLinks from "@/constants"

import { navLinks } from "@/constants";
import Button from "../atoms/button";
import WbSunnyTwoToneIcon from '@mui/icons-material/WbSunnyTwoTone';
import NightlightRoundOutlinedIcon from '@mui/icons-material/NightlightRoundOutlined';
import { borders } from '@mui/system';




export default function navBar() {
   
    
    return (
        <nav className="flex flex-row items-center py-4 overflow-hidden ">

            <div className="font-bold text-[1.5rem]">
            Dent<span className="text-[#07C589]">Clack</span>
            </div>

            <ul className="w-full flex-row hidden sm:flex place-content-end pr-32 ">
                {navLinks.map((nav, index) => (
                    <li className="pl-8 font-poppins text-[1rem] hover:text-[#07C589] list-none">{nav.title}</li>
                ))}
            </ul>

                <div className="flex items-center w-full max-w-[200px]">
                    
                    <Button width="specs" size="md">Login </Button>

                    <div className="flex bg-[#fdfdfd] border border-[#dcd5d5] w-full max-w-[3.6rem] h-[1.8rem] ml-[1.2rem] rounded-[1.5rem] overflow-hidden p-[0.2rem]"> 

                        <div className="flex items-center justify-center place-content-center place-items-center bg-[#07C589] h-[1.4rem] w-full max-w-[1.4rem] rounded-[3.1rem]  place-self-center ">

                                <WbSunnyTwoToneIcon sx={{color:"#fdfdfd",width:"65%"}}/>


                        </div> 
                        <div> < NightlightRoundOutlinedIcon sx={{ borderColor:"#dcd5d5",width:"65%"}}/> </div>

                    </div>

                    

                </div>
            
            
            
        </nav>
    )
}