import React from 'react'
import Header from './Header';
const Login = () => {
  return (
    <div>
        <Header/>
        <div>
            <img src='https://user-images.githubusercontent.com/33485020/108069438-5ee79d80-7089-11eb-8264-08fdda7e0d11.jpg'
             alt='bg-img'
             className='absolute'></img>
        </div>
        <form className='absolute w-3/12 p-12 bg-black my-36 mx-auto right-0 left-0 text-white '>
          <h1 className='font-bold text-3xl py-4'>Sign In</h1>
          <input type='text' placeholder='Email Address' className='p-2 my-2 w-full'/>
          <input type='password' placeholder='Password' className='p-2 my-2 w-full'/>
          <button className='p-4 my-4 w-full bg-red-600'>Sign In</button>


        </form>
        
    </div>
  )
}

export default Login;