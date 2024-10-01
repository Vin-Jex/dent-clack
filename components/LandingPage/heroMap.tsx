"use client"
import Image from 'next/image';
// import { heroImgLinks } from '@/constants/index'
import Daniel from "@/photos/daniel.jpg"
import Lola from "@/photos/lola.png"
import Marcelo from "@/photos/marcelo .png"
import Nwanboje from "@/photos/nwanboje.png"
import { StaticImageData } from "next/image";

export default function HeroMap() {
      type HeroImgLinks = {
        id:number,
        name:StaticImageData
    }
    
    const heroImgLinks: HeroImgLinks[] = [

        {id:1,
        name: Marcelo//marcelo,
           
        },
    
        {id:2,
        name:Lola//lola,
    
        },
    
        {id:3,
        name: Daniel//daniel,
    
        },
    
        {id:4,
        name: Nwanboje//nwanboje,
    
        }
        
    ]
    return (
        <>
        
        {/* <Image src={heroImgLinks[0].name} className=" flex w-full h-ful object-cover  max-w-[12.5rem] max-h-[11.5rem] ml-3" alt="jh"></Image>
        <Image src={heroImgLinks[1].name} className=" flex w-full h-ful object-cover  max-w-[12.5rem] max-h-[11.5rem] ml-3" alt="jh"></Image>
         <Image src={heroImgLinks[2].name} className=" flex w-full h-ful object-cover  max-w-[12.5rem] max-h-[11.5rem] ml-3" alt="jh"></Image>
         <Image src={heroImgLinks[3].name} className=" flex w-full h-ful object-cover  max-w-[12.5rem] max-h-[11.5rem] ml-3" alt="jh"></Image> */}

         {heroImgLinks.map(({id, name})=>{
            <div key={id} className='w-full max-w-[6.5rem] object-cover h-full '>
                {/* console.log("workin") */}
                <Image
                    src={name}
                    className="w-full h-full object-cover"
                    alt="Picture of the author"
                 > </Image>
            </div>
           
        })} 
        </>
        
        // {heroImgLinks.map(({id, name})=>(
        //     <Image
        //     src={name}
        //     className="w-full h-full object-cover "
        //     alt="Picture of the author"
        //     />
        // ))}  
    )
}