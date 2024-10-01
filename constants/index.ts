import { StaticImageData } from "next/image";

import Dentist from "@/public/images/dentist.jpg";
import Dentist2 from "@/public/images/dentist2.jpg";
import Dentist3 from "@/public/images/dentist3.jpg";
import Dentist4 from "@/public/images/dentist4.jpg";
import Dentist5 from "@/public/images/dentist5.jpg";
import Dentist6 from "@photos/dentist6.png";
import DoctorAnna from "@/public/images/doctorAnna.jpg";
import DoctorJane from "@/public/images/doctor-jane.jpg";
import DoctorMark from "@./public/images/doctorMark.jpg";
import Daniel from "@/public/images/daniel.jpg";
import Lola from "@/public/images/lola.png";
import Marcelo from "@/public/images/marcelo .png";
import Nwanboje from "@/public/images/nwanboje.png";
import paxelsAnna from " @/public/images/pexels-anna.jpg";
import Registry from "@/public/images/registry.png";
import Teeth from "@/public/images/teeth.png";
import Tima from "@/public/images/tima.png";
// import {daniel,dentist,dentist2, dentist3, dentist4, dentist5, dentist6, doctorAnna, doctorJane, doctorMark, doctorTina, lola, marcelo, nwanboje, pexelsAnna, registry, teeth,tima } from "@/public/images";

type NavLinks = {
  id: number;
  title: string;
};

type HeroImgLinks = {
  id: number;
  name: StaticImageData;
};

export const navLinks: NavLinks[] = [
  { id: 1, title: "Home" },

  { id: 2, title: "About" },

  { id: 3, title: "Services" },

  { id: 4, title: "Specialist" },

  { id: 4, title: "Testimonials" },
];

export const heroImgLinks: HeroImgLinks[] = [
  {
    id: 1,
    name: Marcelo, //marcelo,
  },

  {
    id: 2,
    name: Lola, //lola,
  },

  {
    id: 3,
    name: Daniel, //daniel,
  },

  {
    id: 4,
    name: Nwanboje, //nwanboje,
  },
];

// export default navLinks;
