"use client";
import Input from "@/components/atoms/Input";
import React, { ChangeEvent, FormEvent } from "react";
import Button from "../atoms/Button";
import Link from "next/link";

const SignIn = () => {
  const [formState, setFormState] = React.useState({
    firstName: "",
    lastName: "",
    age: "",
    email: "",
    allergies: "",
    country: "",
    password: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;

    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div className='flex flex-col items-center justify-center w-full mx-auto font-poppins h-[75%]'>
      <div className='flex flex-col items-center justify-center space-y-2'>
        <h2 className='text-dark text-2xl font-semibold'>
          Create your Account
        </h2>
        <span className='text-sm'>
          Create your free account to get started.
        </span>
      </div>

      <form className='w-[95%] md:w-[500px] my-6 space-y-4' onSubmit={handleSubmit}>
        <div className='flex flex-col md:flex-row items-center space-x-0 space-y-4 md:space-x-2.5 md:space-y-0'>
          <Input
            type='text'
            name='firstName'
            id='firstName'
            placeholder='First Name'
            value={formState.firstName}
            onChange={handleChange}
            className='input w-full'
          />
          <Input
            type='text'
            name='lastName'
            id='lastName'
            placeholder='Last Name'
            value={formState.lastName}
            onChange={handleChange}
            className='input w-full'
          />
        </div>

        <Input
          type='number'
          name='age'
          id='age'
          placeholder='Age'
          value={formState.age}
          onChange={handleChange}
          className='input w-full'
        />

        <Input
          type='email'
          name='email'
          id='email'
          placeholder='email'
          value={formState.email}
          onChange={handleChange}
          className='input w-full'
        />

        <Input
          type='text'
          name='allergies'
          id='allergies'
          placeholder='Allergies'
          value={formState.allergies}
          onChange={handleChange}
          className='input w-full'
        />

        <Input
          name='country'
          id='country'
          placeholder='Country'
          value={formState.country}
          onChange={handleChange}
          className='input w-full'
        />

        <Input
          type='password'
          name='password'
          id='password'
          placeholder='Password'
          value={formState.password}
          onChange={handleChange}
          className='input w-full'
          showPword
        />

        <Button size='md' color='green' width='full'>
          Sign Up
        </Button>

        <span className='flex items-center justify-center gap-x-1 text-sm w-full'>
          Already have an account? <Link href='/auth/signin' className="text-secondary underline underline-offset-2">Login here</Link>
        </span>
      </form>
    </div>
  );
};

export default SignIn;
