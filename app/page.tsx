import Hero from "@/components/LandingPage/Hero";
import About from "@/components/LandingPage/about";
import AboutUs from "@/components/LandingPage/AboutUs";
import Services from "@/components/LandingPage/Services"
import Specialist from "@/components/LandingPage/Specialist";
import Testimonials from "@/components/LandingPage/Testimonials";

const styles = {
  paddingX: "px-8 sm:px-[4rem]",
};

export default function Home() {
  return (
    <main className='font-poppins flex-col text-[#1E1E1E] h-full'>
      <div>
        <div
          className='bg-primaryLight dark:text-[#FFFFFF] px-2 md:px-12 dark:bg-primaryDark'
          id='home'
        >
          <Hero />
        </div>

        <div
          className={`bg-[#FFFFFF] dark:bg-[#06170e] px-2 md:px-12`}
          id='about'
        >
          <About />
        </div>
        
        <div
          className={`bg-[#FFFFFF] dark:bg-[#06170e] px-2 md:px-12`}
          id='about'
        >
          <AboutUs />
        </div>
        <div
          className={`bg-[#FFFFFF] dark:bg-[#06170e] px-2 md:px-12`}
          id='Services'
        >
          <Services />
        </div>
        <div
          className={`bg-primaryLight dark:bg-primaryDark px-2 md:px-12`}
          id='Specialist'
        >
          <Specialist />
        </div>
        <div
          className={`bg-[#FFFFFF] dark:bg-[#06170e] px-2 md:px-12`}
          id='Testimonials'
        >
          <Testimonials />
        </div>

      </div>
    </main>
  );
}
