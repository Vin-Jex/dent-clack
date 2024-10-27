import { StaticImageData } from "next/image";
import Daniel from "@/public/images/daniel.jpg";
import Lola from "@/public/images/lola.png";
import Marcelo from "@/public/images/marcelo .png";
import Nwanboje from "@/public/images/nwanboje.png";

type NavLinks = {
  id: number;
  title: string;
};

type HeroImgLinks = {
  id: number;
  name: StaticImageData;
};

export const navLinks: NavLinks[] = [
  { id: 1, title: "home" },
  { id: 2, title: "about" },
  { id: 3, title: "Services" },
  { id: 4, title: "Specialist" },
  { id: 4, title: "Testimonials" },
];

export const heroImgLinks: HeroImgLinks[] = [
  { id: 1, name: Marcelo },
  { id: 2, name: Lola },
  { id: 3, name: Daniel },
  { id: 4, name: Nwanboje },
];