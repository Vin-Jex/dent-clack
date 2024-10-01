"use client";
import Image from "next/image";
// import { heroImgLinks } from '@/constants/index'
import Daniel from "@/public/images/daniel.jpg";
import Lola from "@/public/images/lola.png";
import Marcelo from "@/public/images/marcelo .png";
import Nwanboje from "@/public/images/nwanboje.png";
import { StaticImageData } from "next/image";

export default function HeroMap() {
  type HeroImgLinks = {
    id: number;
    name: StaticImageData;
  };

  const heroImgLinks: HeroImgLinks[] = [
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
  return (
    <>
      {heroImgLinks.map(({ id, name }) => {
        return (
          <div key={id} className='w-full max-w-[6.5rem] object-cover h-full '>
            <Image
              src={name}
              className='w-full h-full object-cover'
              alt='Picture of the author'
            ></Image>
          </div>
        );
      })}
    </>
  );
}
