import React from 'react'
import { signOut } from "firebase/auth";
import { auth } from '../Utils/firebase';
import {useNavigate}   from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { addUser,removeUser } from '../Utils/userSlice';
import { LOGO, USER_AVATAR } from '../Utils/constants';

const Header = () => {
  const Navigate = useNavigate();
  const user = useSelector(store=>store.user);
  const dispatch = useDispatch();
  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (user) => {//if the user signed in then add user and navigate to browse(callback function)
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const {uid, email, displayName ,photoURL} = user;
        dispatch(addUser({uid:uid, email:email, displayName: displayName, photoURL:photoURL}));
        Navigate('/browse')
        
      } else { 
        // User is signed out then remove user and log out
        dispatch(removeUser());
        Navigate("/")
        // ...
      }

      return ()=> unsubscribe; //when component unmounts, we will also unsubscibe  the listener onAuthStateChange

    });
  },[]);
  
  const handleSignOut=()=>{
    signOut(auth).then(() => {
      
    } ).catch((error) => {
      Navigate("/error");
    });
  }
  return (
    <div className='absolute px-8 py-2 w-screen bg-gradient-to-b from-black z-10 flex justify-between'>
        <img className=' w-56   '
         src={LOGO}
          alt='logo'>
        </img>
        {user && (<div className='flex p-2'>
          <img alt='usericon' className='w-12 h-12 m-3' src={user?.photoURL}></img>
          <button onClick={handleSignOut} className='font-bold text-white'>Sign Out</button>
        </div>)}
        
    </div>
  )
}

export default Header