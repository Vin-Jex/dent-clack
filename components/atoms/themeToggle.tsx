"use client";
import Button from "./button";
import {useEffect, useState} from "react";
import {LightMode, DarkModeOutlined} from '@mui/icons-material';


export default function ThemeToggle() {
    const [darkMode, setDarkMode] = useState(true);

    useEffect(() => {
        const theme = localStorage.getItem("theme")
        if (theme === "dark") setDarkMode(true)
    }, [])


    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark')
            localStorage.setItem("theme", "dark")
        } else {
            document.documentElement.classList.remove('dark')
            localStorage.setItem("theme", "light")
        }
    }, [darkMode])


    return (
        <div className="flex  items-center w-full max-w-[200px]">
                    
            <Button width="specs" size="md">Login </Button>

        <div className="flex bg-[#fdfdfd] border border-[#dcd5d5] dark:border-[#FFFFFF33]/30 w-full max-w-[3.6rem] h-[1.7rem] ml-[1.2rem] rounded-[1.5rem]   dark:bg-green-900"
        onClick={()=> setDarkMode(!darkMode)}> 

                <LightMode className="!text-base ml-[5.5px] place-self-center z-10 text-[#FFFFFF] dark:text-[#FFFFFF66]/40 " />

                <div 
                className={`flex bg-[#07C589] h-[1.8rem] w-full max-w-[1.8rem] rounded-full place-self-center transform z-0 transition-transform duration-300 ${darkMode ? "ml-[1.7rem]" :  "mr-[5.2rem]"} absolute `}
                >
                    {/* sx={{color:"#fdfdfd",width:"65%"}} */}

                    

                </div> 

                   < DarkModeOutlined  className="!text-base mr-[2.2px] place-self-center z-10 text-[#1E1E1E99] dark:text-[#FFFFFF] ml-[12px] "/> 

        </div>



        </div>
    )
}

