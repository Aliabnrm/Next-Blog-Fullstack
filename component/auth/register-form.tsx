'use client';

import { CreateUserAction } from '@/actions/auth-action';
import SubmitButton from '../ui/submit-button';
import { signIn } from 'next-auth/react';

const RegisterForm = () => {
  
  return (
    <>
    <form className=" flex flex-col w-96 m-auto border-b-2 h-80 "
    action={async (formdata) => {
      const email = formdata.get('email');
      const password = formdata.get('password');
      const res = await CreateUserAction(formdata);

      if (res?.success) {
        await signIn('credentials', {
          email,
          password,
          callbackUrl: '/',
        });
      }
    }}
    >
      <h2 className="text-center font-bold mt-10">Sign up</h2>
    
      <input type='text'
        placeholder='username'
        className='rounded-md border p-2 shadow-sm '
        name='name' 
        />
      <input
        type='email'
        placeholder='email'
        className="rounded-md border p-2 shadow-sm mt-4"
        name='email'
      />
       <input
        type='password'
        placeholder='password'
        className='rounded-md border p-2 shadow-sm mt-4 mb-5 '
        name='password'
      />
      <SubmitButton />
    </form>
  
    </>
  );
};

export default RegisterForm;
