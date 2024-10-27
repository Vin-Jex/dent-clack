import Dentist from "@/public/images/about-dent.jpg";
import Image from "next/image";

type AboutLink = {
  id: number;
  title: string;
  content: string;
};

const aboutLink: AboutLink[] = [
  {
    id: 1,
    title: "Tooth Decay",
    content:
      "Restore your smile and prevent cavities with our expert care.",
  },

  {
    id: 2,
    title: "Oral Cancer",
    content:
      "Ensure early detection and peace of mind with our screenings.",
  },

  {
    id: 3,
    title: "Tooth Sensitivity",
    content:
      "Say goodbye to discomfort with our tooth sensitivity solutions.",
  },

  {
    id: 4,
    title: "Bad Breath",
    content:
      "Freshen your breath and boost your confidence with our treatments.",
  },
  {
    id: 5,
    title: "Mouth Soreness",
    content:
      "Find relief from mouth soreness with our gentle care.",
  },
  {
    id: 6,
    title: "Gum Disease",
    content:
      "Protect your gums and brighten your smile with our treatments.",
  },
];

export default function Services() {
    return (
      <section className='flex flex-col lg:flex-row pb-[8rem] justify-between gap-32 h-full font-poppins place-content-center'>
      
        <div className='flex flex-col w-full'>
          <span className='text-[#07C589] w-full text-center lg:text-left font-bold'>Services we offer</span>
          <h3 className='text-2xl font-semibold text-center lg:text-left dark:text-[#FFFFFF] mb-4'>
            Conditions we treat
          </h3>
          <div className='space-y-8 ss:space-y-0 ss:grid ss:grid-cols-2 place-content-center ss:gap-4'>
            {aboutLink.map((link, index) => {
              return (
                <div
                  key={link.id}
                  className='border w-fit w-full ss:max-w-[19rem] border-gray-400 text-sm rounded-md px-4 py-4'
                >
                  <p className='text-[#07C589] text-base font-bold'>
                    {link.title}
                  </p>
                  <span className='text-[#1E1E1E8C]/55 dark:text-[#FFFFFF] text-xs'>
                    {link.content}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        <div className='ss:p-16 md:p-28 lg:p-0 w-full'>
          <div className='relative flex w-fit mb-[4rem]'>
            <div className='aspect-square w-full -z-50 h-full sm:w-[26rem] sm:h-[26rem] rounded-br-[10rem] rounded-[1rem] overflow-hidden z-10'>
              <Image
                src={Dentist}
                className={`w-full h-full  object-cover`}
                alt='Picture of the author'
              ></Image>
            </div>
            <div className='absolute w-full h-full sm:w-[26rem] sm:h-[26rem] mt-[1.5rem] rounded-br-[10rem] rounded-[1rem]  bg-[#07C589] left-6'></div>
          </div>
        </div>
      </section>
    )
}