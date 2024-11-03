import aboutPic from "@/public/images/pexelAbout.jpg";
import Image from "next/image";

export default function AboutUs() {
  return (
    <section className="pb-24 justify-between space-y-8 justify-items-center text-center">
      
      <div className="space-y-1 justify-items-center w-full">
         <p className="text-[#07C589]
        font-bold">About Us</p>
      <p className="text-2xl font-semibold 
        dark:text-[#FFFFFF]">Who we are</p>
      <p className="text-[#1E1E1E8C] 
        text-sm
        dark:text-[#FFFFFFCC] w-[72%]">For your dental health, trust us to provide the best treatment. We&apos;ll guide you from your first consultation to lifelong maintenance. We believe a beautiful smile enhances your quality of life and aim to achieve the best results in a fun, relaxed environment.</p>
      </div>
     
      
      <div className="justify-items-center w-[20rem] ss:w-[26rem] md:w-[44rem] rounded-md overflow-hidden">
        <Image
          src={aboutPic}
          className={`w-full h-full object-cover`}
          alt='Picture of staff'
        ></Image>
      </div>
      
    </section>
  );
};

