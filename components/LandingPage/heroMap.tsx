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
      roundedClass: 'rounded-tl-[8rem]',
    },

    {
      id: 2,
      name: Lola, //lola,
      roundedClass: 'rounded-tr-[8rem]',
    },

    {
      id: 3,
      name: Daniel, //daniel,
      roundedClass: 'rounded-bl-[8rem]',
    },

    {
      id: 4,
      name: Nwanboje, //nwanboje,
      roundedClass: 'rounded-br-[8rem]',
    },
  ];
  return (
    <>
      {heroImgLinks.map((link, index) => {
        return (
          <div key={link.id} className="aspect-square">
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
