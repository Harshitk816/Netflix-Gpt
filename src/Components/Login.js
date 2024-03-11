import React, { useState } from 'react'
import Header from './Header';
const Login = () => {
  const [isSignInForm,  setIsSignInForm] = useState(true);
  const toggleSignInForm=()=>{
    setIsSignInForm(!isSignInForm);
  }
  return (
    <div>
        <Header/>
        <div>
            <img src='https://user-images.githubusercontent.com/33485020/108069438-5ee79d80-7089-11eb-8264-08fdda7e0d11.jpg'
             alt='bg-img'
             className='absolute'></img>
        </div>
        <form className='absolute w-3/12 p-12 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-80'>
          <h1 className='font-bold text-3xl py-4'>{isSignInForm?"Sign In": "Sign Up"}</h1> 
          {(!isSignInForm) && <input type='text' placeholder='Full Name' className='p-4 my-4 w-full bg-gray-700 rounded-md'/>}
          <input type='text' placeholder='Email Address' className='p-4 my-4 w-full bg-gray-700 rounded-md'/>
          <input type='password' placeholder='Password' className='p-4 my-4 w-full bg-gray-700 rounded-md'/>
          <button className='p-4 my-4 w-full bg-red-600 rounded-md'>{isSignInForm?"Sign In": "Sign Up"}</button>
          <p className='p-4 cursor-pointer' onClick={toggleSignInForm}>{isSignInForm?"New to Netflix? Sign Up Now.":"Already a User? Sign In."}</p>


        </form>
        
    </div>
  )
}

export default Login;