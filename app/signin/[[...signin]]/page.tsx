"use client";
import { SignIn } from "@clerk/nextjs";
import React from "react";
import Image from "next/image";

function page() {
  return (
    <div className="flex items-center justify-center h-screen gap-10">
      <Image
          src="/images/dentist3.jpg"
          alt="Image"
          width="520"
          height="1080"
          className="h-[90%] w-[50%] object-cover rounded-xl"
        />
      <SignIn />
    </div>
  );
}

export default page;