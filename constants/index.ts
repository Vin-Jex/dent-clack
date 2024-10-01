import { StaticImageData } from "next/image";

import Dentist from "@/photos/dentist.jpg"
import Dentist2 from "@/photos/dentist2.jpg"
import Dentist3 from "@/photos/dentist3.jpg"
import Dentist4 from "@/photos/dentist4.jpg"
import Dentist5 from "@/photos/dentist5.jpg"
import Dentist6 from "@photos/dentist6.png"
import DoctorAnna from "@/photos/doctorAnna.jpg"
import DoctorJane from "@/photos/doctor-jane.jpg"
import DoctorMark from "@./photos/doctorMark.jpg"
import Daniel from "@/photos/daniel.jpg"
import Lola from "@/photos/lola.png"
import Marcelo from "@/photos/marcelo .png"
import Nwanboje from "@/photos/nwanboje.png"
import paxelsAnna from" @/photos/pexels-anna.jpg"
import Registry from "@/photos/registry.png"
import Teeth from "@/photos/teeth.png"
import Tima from "@/photos/tima.png"
// import {daniel,dentist,dentist2, dentist3, dentist4, dentist5, dentist6, doctorAnna, doctorJane, doctorMark, doctorTina, lola, marcelo, nwanboje, pexelsAnna, registry, teeth,tima } from "@/photos";

type NavLinks = {
    id:number,
    title:string
}

type HeroImgLinks = {
        id:number,
        name:StaticImageData
    }

 export const navLinks: NavLinks[] = [
    {id:1,
    title:"Home",
       
    },

    {id:2,
    title:"About",

    },

    {id:3,
    title:"Services",

    },

    {id:4,
    title:"Specialist",

    },

    {id:4,
    title:"Testimonials",

    }
]


export const heroImgLinks: HeroImgLinks[] = [

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

// export default navLinks;