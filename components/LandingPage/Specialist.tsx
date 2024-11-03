import Image from "next/image";
import { StaticImageData } from "next/image";
import drStella from "@/public/images/drStella.jpg";
import drAva from "@/public/images/drAva.jpg";
import drPaul from "@/public/images/drPaul.jpg";

type SpecialistImgLinks = {
  id: number;
  name: StaticImageData;
  staffName: string;
  occupation:string
};

const specialistImgLinks: SpecialistImgLinks[] = [
  {
    id: 1,
    name: drStella,
    staffName:"Dr Stella Olsen",
    occupation:"Dentist",
  },
  {
    id: 2,
    name: drAva,
    staffName:"Dr Ava Watson",
    occupation:"Dentist",
  },

  {
    id: 3,
    name: drPaul,
    staffName:"Dr Paul Evans",
    occupation:"Dentist",
  },
  {
    id: 4,
    name: drPaul,
    staffName:"Dr Paul Evans",
    occupation:"Dentist",
  },

  {
    id: 5,
    name: drAva,
    staffName:"Dr Ava Watson",
    occupation:"Dentist",
  },

  {
    id: 6,
    name: drStella,
    staffName:"Dr Stella Olsen",
    occupation:"Dentist",
  },
];

export default function Specialist() {
  return (
    <section className="justify-between justify-items-center py-14">
      <div className="space-x-2 w-full justify-items-center">
        <span className="text-[#07C589] w-full text-center lg:text-left font-bold">
          Our Specialists
        </span>
        <h3 className="text-2xl font-semibold text-center lg:text-left dark:text-[#FFFFFF] mb-4">
          Meet our Doctors
        </h3>
      </div>

      <div className="space-y-8 ss:space-y-0 ss:grid ss:grid-cols-3 place-content-center ss:gap-16">
        {specialistImgLinks.map((link, index) => {
          return (
            <div
              key={link.id}
              className="aspect-square h-[13rem] w-[12rem] relative"
            >
              <Image
                src={link.name}
                className={`w-full h-full object-cover rounded-l-lg rounded-tr-lg -z-[100] bg-cover`}
                alt="Picture of the author"
              >
              </Image>
              <div className="py-2 pr-2 pl-6 flex flex-col text-xs text-right font-semibold bg-white w-[8rem] h-[3rem] absolute rounded-tl-lg right-0 bottom-0">{link.staffName} <span className="text-right text-sm text-gray-300 font-light">{link.occupation}</span></div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
