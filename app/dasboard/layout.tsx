import React from "react";

const DashboardLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className='transition-all ease-in-out'>
      <main className='flex-1 w-full h-[calc(100vh-70px)] overflow-y-auto no-scrollbar lg:ml-[30%] 2xl:ml-[25%] py-4 duration-300'>
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;
