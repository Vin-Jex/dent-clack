import Hero from "@/components/LandingPage/Hero";
import About from "@/components/LandingPage/about";

const styles = {
  paddingX: "px-8 sm:px-[4rem]",
};

export default function Home() {
  return (
    <main className='font-poppins flex-col text-[#1E1E1E] h-full '>
      <div>
        <div
          className='w-full xl:max-w-screen-xl bg-primaryLight dark:text-[#FFFFFF] px-0 dark:bg-primaryDark'
          id='home'
        >
          <Hero />
        </div>

        <div
          className={`bg-[#FFFFFF] dark:bg-primaryDark w-full xl:max-w-screen-xl`}
          id='about'
        >
          <About />
        </div>
      </div>
    </main>
  );
}
