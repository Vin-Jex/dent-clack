import Hero from "@/components/LandingPage/Hero";
import About from "@/components/LandingPage/about";
import AboutUs from "@/components/LandingPage/AboutUs";
import Services from "@/components/LandingPage/Services"

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
          className={`bg-[#FFFFFF] dark:bg-primaryDark px-2 md:px-12`}
          id='about'
        >
          <About />
        </div>
        
        <div
          className={`bg-[#FFFFFF] dark:bg-primaryDark px-2 md:px-12`}
          id='about'
        >
          <AboutUs />
        </div>
        <div
          className={`bg-[#FFFFFF] dark:bg-primaryDark px-2 md:px-12`}
          id='about'
        >
          <Services />
        </div>

      </div>
    </main>
  );
}
