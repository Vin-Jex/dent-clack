import "../globals.css";
import dynamic from "next/dynamic";
const NavBar = dynamic(() => import("@/components/molecules/NavBar"), {
  ssr: false,
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className={`w-full h-screen container mx-auto overflow-hidden relative`}
    >
      <div
        className={`w-full container mx-auto h-[52px] fixed top-0 z-0 bg-primaryLight dark:bg-primaryDark px-2 md:px-12 border-b`}
      >
        <NavBar />
      </div>

      <div className='mt-[52px] h-[calc(100vh-52px)] overflow-y-auto w-full'>
        {children}
      </div>
    </div>
  );
}
