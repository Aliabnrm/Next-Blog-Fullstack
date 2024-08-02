'use client'

import { CheckUserEmail } from "@/actions/auth-action";
import SubmitButton from "../ui/submit-button";
import { redirect } from "next/navigation";
import { signIn } from "next-auth/react";

const LoginForm = () => {
    return (
        <form action={async (formdata) => {
            const email = formdata.get ('email');
            const password = formdata.get ('password');
            const res = await CheckUserEmail(formdata);

            if(!res?.success) {
                redirect('/register');

            }else {
                signIn('credentials' , {
                    email,
                    password,
                    callbackUrl: '/'
                })
            }


}} className=" flex flex-col w-96 m-auto border-b-2 h-80 ">
             <h2 className="text-center font-bold mt-10">Login</h2>
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
    );
}
 
export default LoginForm;