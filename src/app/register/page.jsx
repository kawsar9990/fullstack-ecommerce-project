'use client'

import { useState } from "react"
import Link from "next/link"

export default function Register(){
     const [text, setText] = useState("")
     const [email, setEmail] = useState("")
     const [password, setPassword] = useState("")
     const [login, setLogin] = useState(false) // false = Sign Up, true = Login

     
     const loginclick = () => {
          if(email === ""){
               alert("Please Enter Your Email")
               return
          }

          if(password === ""){
               alert("Please Enter Your Password")
               return
          }

          if(!login && text === ""){
               alert("Please Enter Your Username")
               return
          }

          setText("")
          setEmail("")
          setPassword("")
     }

    return(
<div className="bg-[#F5F0F0]">

<div className="pt-20 xl:pt-40">

<div className=" w-full flex justify-center items-center min-h-screen p-5">

<div className="bg-white shadow-lg w-100 rounded-2xl flex flex-col lg:flex-row overflow-hidden ">
<div className='w-full p-5'>
<div className="flex justify-between items-center w-full gap-5">
          <Link href={`/`} className='font-black'>KawsarShop</Link>
        
        <button 
         onClick={()=> setLogin(!login)}
        className='hover:text-green-500 text-[10px] md:text-[20px] font-bold cursor-pointer'>
               {login ? "Create an account" : "login"}
        </button>
     </div>

     <div>
          <div className='flex flex-col'>
               <a href="#" className='text-center pt-5 font-black text-[20px]'>{login ? "login" : "Sign Up"}</a>          
          </div>
          
          <div className='pt-7 flex flex-col gap-5'>
              
              {!login && (
                <div className='w-full'>
                    <label htmlFor="nam" className='font-bold'>Username</label>
                    <div className='w-full'>
                        <input 
                          value={text}
                          onChange={(e)=> setText(e.target.value)}
                          placeholder='Enter Your Name'
                          type="text" id='nam' name='nam' 
                          className='border-1 cursor-pointer placeholder:text-gray-500 rounded-md border-gray-400 p-2 w-full'
                        />
                    </div>
                </div>
              )}

               <div className='w-full'>
                    <label htmlFor="em" className='font-bold'>Email</label>
                    <div className='w-full'>
                        <input     
                          value={email}
                          onChange={(e)=> setEmail(e.target.value)}
                          placeholder='Enter Your email'
                          type="email" id='em' name='em' 
                          className='border-1 placeholder:text-gray-500 cursor-pointer rounded-md border-gray-400 p-2 w-full'
                        />
                    </div>
               </div>

           <div className='w-full'>
                    <label htmlFor="pass" className='font-bold'>Password</label>
                    <div className='w-full'>
                        <input 
                          value={password}
                          onChange={(e)=> setPassword(e.target.value)}
                          placeholder='Enter Your Password'
                          type="password" id='pass' name='pass' 
                          className='border-1 cursor-pointer placeholder:text-gray-500 rounded-md border-gray-400 p-2 w-full'
                        />
                    </div>
           </div>

         <div className='text-right hover:text-decoration-underline font-bold hover:text-blue-500'>
  <a href="">Forgot Your Password?</a>
</div>

           <div className='pb-10'>
               <button
                 onClick={loginclick}
                 className='bg-blue-600 text-white font-black text-center rounded-4xl cursor-pointer w-full p-3'
               >
                   {login ? "Login" : "Sign Up"}
               </button>
           </div>

          </div>
     </div>
</div>
</div>

</div>
</div>

</div>
    )
}
