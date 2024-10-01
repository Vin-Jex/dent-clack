import NavBar from '@/components/molecules/NavBar';
import Hero from '@/components/LandingPage/Hero';

export default function Home() {
  const styles = {
    paddingX: 'px-8 sm:px-32',
    paddingY: 'py-32 ',
  };

  return (
    <main className="overflow-hidden font-poppins  flex-col text-[#1E1E1E]">
      <div className=" bg-[#07C589] bg-opacity-5 dark:text-[#FFFFFF] dark:bg-green-900">
        <div
          className={`${styles.paddingX}   w-full border-b border-stone-300 `}
        >
          <NavBar />
        </div>

        <div className={`${styles.paddingX} `}>
          <Hero />
        </div>
      </div>
    </main>
  );
}
