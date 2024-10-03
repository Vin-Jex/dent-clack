'use client';
import Image from 'next/image';
// import { heroImgLinks } from '@/constants/index'
import Daniel from '@/public/images/hero-images/daniel.jpg';
import Lola from '@/public/images/hero-images/lola.jpg';
import Marcelo from '@/public/images/hero-images/marcelo.jpg';
import Nwanboje from '@/public/images/hero-images/nwanboje.jpg';
import { StaticImageData } from 'next/image';

export default function HeroMap() {
  type HeroImgLinks = {
    id: number;
    name: StaticImageData;
    roundedClass: string;
  };

  const heroImgLinks: HeroImgLinks[] = [
    {
      id: 1,
      name: Marcelo, //marcelo,
      roundedClass: 'sm:rounded-tl-[9rem] rounded-tl-[5rem]',
    },

    {
      id: 2,
      name: Lola, //lola,
      roundedClass: 'sm:rounded-tr-[9rem] rounded-tr-[5rem]',
    },

    {
      id: 3,
      name: Daniel, //daniel,
      roundedClass: 'sm:rounded-bl-[9rem] rounded-bl-[5rem]',
    },

    {
      id: 4,
      name: Nwanboje, //nwanboje,
      roundedClass: 'sm:rounded-br-[9rem] rounded-br-[5rem]',
    },
  ];
  return (
    <>
      {heroImgLinks.map((link, index) => {
        return (
          <div key={link.id} className="aspect-square h-full w-full">
            <Image
              src={link.name}
              className={`w-full h-full object-cover rounded-lg ${link.roundedClass}`}
              alt="Picture of the author"
            ></Image>
          </div>
        );
      })}
    </>
  );
}
