import Image from "next/image";
import React from "react";
import IMG from "@/public/images/authImg.png";
import LOGO from "@/public/DentClack.png";
import Link from "next/link";

const AuthLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className='transition-all ease-in-out flex justify-between w-full h-screen'>
      <aside className='flex items-center justify-center w-1/2 h-full'>
        <Image
          src={IMG}
          alt='Authentication Layout'
          loading='lazy'
          width={1000}
          height={1000}
          className='h-full w-full object-cover object-bottom'
        />
      </aside>
      <div className='flex items-start w-1/2 h-full overflow-y-auto py-4 duration-300 relative'>
        <header className='absolute top-0 left-0 w-full px-6 py-6'>
          <Link href='/' className='flex items-center'>
            <Image
              src={LOGO}
              alt='LOGO'
              height={150}
              width={300}
              className='w-[6rem] cursor-pointer'
            />
          </Link>
        </header>

        <div className='mt-[100px] !h-[calc(100vh-100px)]'>{children}</div>
      </div>
    </div>
  );
};

export default AuthLayout;
