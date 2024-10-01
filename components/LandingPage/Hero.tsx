import Button from "../atoms/Button";
import HeroMap from "./heroMap";

// import Daniel from "c/daniel.jpg"
// import { heroImgLinks } from '@/constants/index'

export default function Hero() {
  return (
    <section className={`pb-[13rem] flex flex-col  sm:flex-row `}>
      <div className=' flex flex-col mt-[8rem]'>
        <h1 className='text-[4rem] font-bold leading-[6rem] mb-4'>
          We Make Your <br />
          <span className='text-[#07C589]'>Smile</span> Our Priority.
        </h1>

        <p className='text-[1rem] mb-[2rem]'>
          At DentClack, we are dedicated to one thing - your smile. With <br />
          over 10 years of professional experience and more than 100 <br />
          carefully selected dental practices, we are uniquely equipped to{" "}
          <br />
          provide personalized treatment and restore your desired smile.
        </p>

        <Button width='auto' size='height'>
          Book an Appointment
        </Button>
      </div>

      <div className=' flex flex-row flex-wrap border sm:ml-[4.5rem] w-full max-w-[28rem] h-[28rem] top-[6rem] sm:mt-[0] rounded-[8em] overflow-hidden relative'>
        {/* <Image src= {heroImgLinks.name} className="w-full h-ful object-cover" alt="jh" /> */}

        {/* <Image src={Nwanboje}  className="w-full h-ful object-cover" alt="jh"></Image> */}
        <HeroMap />
      </div>
    </section>
  );
}
