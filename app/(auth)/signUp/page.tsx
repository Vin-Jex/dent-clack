"use client";
import React from "react";
import Input from "@/components/atoms/Input";
import Button from "@/components/atoms/Button";
import GoogleIcon from "@mui/icons-material/Google";
import { useRouter } from "next/navigation";
import Link from "next/link";

type Props = {};
const page = (props: Props) => {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-white dark:bg-[#212423] dark:text-white flex md:items-center justify-center">
      <div className="flex flex-col md:flex-row bg-white dark:bg-[#212423]/75  dark:text-white  w-full h-[100vh] border-none ">
        <div className="hidden md:block md:w-1/2 bg-[url('/images/Dentist5.jpg')] bg-cover bg-center relative ">
          <div className="absolute inset-0 bg-black  opacity-40 "></div>
          <div className="relative z-10 p-10 text-white flex flex-col justify-end items-center h-full ">
            <h2 className="text-xl font-bold mb-3">
              We Make Your Smile Our Priority.
            </h2>
            <p className="mb-3 md:mx-24  text-center md:text-[0.7rem] xl:text-[0.8rem] text-white/75">
              At DentClack, your smile is our priority. With over 10 years of
              expertise and top-tier dental practices, we deliver personalized
              treatments to restore your perfect smile.
            </p>
            <div className="flex space-x-4 text-[0.7rem] ">
              <p className="bg-gray-300/25 text-white px-4 py-1 rounded-full">
                Guaranteed Solutions
              </p>
              <p className="bg-gray-300/25 text-white px-4 py-1 rounded-full">
                Active and Friendly Dentists
              </p>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2 bg-white dark:bg-[#212423] dark:text-white h-[100vh] flex flex-col px-6 py-3">
          <div className=" font-bold text-[1.5rem]">
            <p onClick={() => router.push('/')}>Dent<span className="text-[#07C589]">Clack</span></p>
          </div>
          <div className="px-6 py-12 sm:px-28 sm:py-20  xl:px-36 xl:py-20">
            <h1 className="text-2xl  text-center font-bold mb-2 ">
              Create your Account
            </h1>
            <p className="text-gray-600 dark:text-white/75 mb-4 text-center text-sm">
              Create your free account to get started.
            </p>

            <form className="space-y-4">
              <div className="grid lg:grid-cols-2 gap-4 ">
                <Input
                  type="text"
                  placeholder="First Name"
                  className="w-full rounded-md text-sm placeholder:text-sm md:px-3 px-4 md:py-1 py-2  dark:bg-[#212423] dark:text-white focus:ring-1 ring-[#07c589] dark:ring-white/75 dark:ring-1 dark:focus:ring-[#07c589]"
                />
                <Input
                  type="text"
                  placeholder="Last Name"
                  className="w-full rounded-md text-sm placeholder:text-sm md:px-3 px-4 md:py-1 py-2 dark:bg-[#212423] dark:text-white focus:ring-1 ring-[#07c589]  dark:ring-white/75 dark:ring-1 dark:focus:ring-[#07c589]"
                />
              </div>
              <Input
                type="number"
                placeholder="Age"
                className="w-full rounded-md text-sm placeholder:text-sm md:px-3 px-4 md:py-1 py-2 dark:bg-[#212423] dark:text-white focus:ring-1 ring-[#07c589]  dark:ring-white/75 dark:ring-1 dark:focus:ring-[#07c589]"
              />
              <Input
                type="email"
                placeholder="Email"
                className="w-full rounded-md text-sm placeholder:text-sm md:px-3 px-4 md:py-1 py-2 dark:bg-[#212423] dark:text-white focus:ring-1 ring-[#07c589]  dark:ring-white/75 dark:ring-1 dark:focus:ring-[#07c589]"
              />
              <Input
                type="text"
                placeholder="Allergies"
                className="w-full rounded-md text-sm placeholder:text-sm md:px-3 px-4 md:py-1 py-2 dark:bg-[#212423] dark:text-white focus:ring-1 ring-[#07c589]  dark:ring-white/75 dark:ring-1 dark:focus:ring-[#07c589]"
              />
              <Input
                type="text"
                placeholder="Country"
                className="w-full rounded-md text-sm placeholder:text-sm px-3 py-1 dark:bg-[#212423] dark:text-white focus:ring-1 ring-[#07c589] dark:ring-white/75 dark:ring-1 dark:focus:ring-[#07c589]"
              />
              <Input
                type="password"
                placeholder="Password"
                showPword={true}
                className="w-full rounded-md text-sm placeholder:text-sm md:px-3 px-4 md:py-1 py-2 dark:bg-[#212423] dark:text-white focus:ring-1 ring-[#07c589] dark:ring-white/75 dark:ring-1 dark:focus:ring-[#07c589]"
              />

              <Button
                size="lg"
                color="blue"
                width="full"
                className="text-sm font-semibold"
              >
                Sign Up
              </Button>
            </form>

            <div className="text-center mt-2">
              <p className="text-sm text-gray-600 dark:text-white font-light">
                Already have an account?{" "}
                <Link
                  href="/login"
                  className="text-green-500 dark:text-green-300 underline font-semibold hover:text-green-600"
                >
                  Login here
                </Link>
              </p>
            </div>

            <div className="text-center mt-4">
              <button className="w-full flex items-center justify-center space-x-2 border border-gray-500 dark:border-green-300 py-1 rounded-lg hover:bg-gray-100 transition">
                <GoogleIcon />

                <span className="text-black dark:text-white text-sm ">
                  Sign up with Google
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
