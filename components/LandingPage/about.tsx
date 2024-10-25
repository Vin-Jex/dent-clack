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
    title: "Calculus",
    content:
      "Calculus is hardened dental plaque from minerals in saliva and gingival fluid, which kills bacteria but creates a rough surface that promotes further plaque buildup.",
  },

  {
    id: 2,
    title: "Gingivitis",
    content:
      "Gingivitis is gum inflammation. Untreated, it can progress to periodontitis, where the infection spreads from the gums to the ligaments and bone supporting the teeth.",
  },

  {
    id: 3,
    title: "Periodontitis",
    content:
      "Periodontitis, or gum disease, is a serious infection that damages soft tissue and can destroy the bone supporting teeth, potentially causing tooth loss. It's common but largely preventable.",
  },

  {
    id: 4,
    title: "Cavity",
    content:
      "Gingivitis is gum inflammation. Untreated, it can progress to periodontitis, where the infection spreads from the gums to the ligaments and bone supporting the teeth.",
  },
];

export default function About() {
  return (
    <section className='flex flex-col lg:flex-row py-[4rem] justify-between gap-0  h-full font-poppins place-content-center'>
      <div className='ss:p-16 md:p-28 lg:p-0 w-full mt-8 lg:mt-0 lg:order-1 order-2'>
        <div className='relative flex w-fit mb-[4rem]'>
          <div className='aspect-square w-full -z-50 h-full sm:w-[28rem] sm:h-[28rem] rounded-br-[10rem] rounded-[1rem] overflow-hidden z-10'>
            <Image
              src={Dentist}
              className={`w-full h-full  object-cover`}
              alt='Picture of the author'
            ></Image>
          </div>

          <div className='absolute w-full h-full sm:w-[28rem] sm:h-[28rem] mt-[1.5rem] rounded-br-[10rem] rounded-[1rem]  bg-[#07C589] left-6'></div>
        </div>
      </div>

      <div className='flex flex-col w-full order-1'>
        <span className='text-[#07C589] w-full text-center lg:text-left font-bold'>About</span>
        <h3 className='text-2xl font-semibold text-center lg:text-left dark:text-[#FFFFFF]'>
          About Tooth Diseases And Decay
        </h3>
        <p className='text-[#1E1E1E8C] w-full text-sm text-center lg:text-left dark:text-[#FFFFFFCC] mb-4'>
          &quot;Oral disease&quot; refers to common dental issues like cavities,
          gum disease, infections, injuries, and oral cancers. Most of these
          conditions are preventable and treatable in early stages.
        </p>
        <div className='space-y-8 ss:space-y-0 ss:grid ss:grid-cols-2 place-content-center ss:gap-4'>
          {aboutLink.map((link, index) => {
            return (
              <div
                key={link.id}
                className='border w-full ss:max-w-[19rem] border-gray-400 text-sm rounded-md px-4 py-4'
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
    </section>
  );
}
