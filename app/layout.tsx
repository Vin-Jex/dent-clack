import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import NavBar from "@/components/molecules/NavBar";
import "./globals.css";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-poppins",
});
export const metadata: Metadata = {
  title: "Dent Clack",
  description:
    "Dent Clack is a medical application that helps people get access to quick appointment for dental treatment at the comfort of their home.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <head>
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/apple-touch-icon.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/favicon-16x16.png'
        />
        <link rel='manifest' href='/site.webmanifest'></link>
      </head>
      <body>
        <div
          className={`w-full h-screen relative overflow-hidden bg-red-400 px-0 ${poppins.variable}`}
        >
          <div
            className={`w-full xl:max-w-screen-xl h-[52px] fixed top-0 left-0 z-30 bg-primaryLight dark:bg-primaryDark px-2 md:px-12 border`}
          >
            <NavBar />
          </div>

          <main className='mt-[52px] h-[calc(100vh-52px)] overflow-y-auto'>
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
