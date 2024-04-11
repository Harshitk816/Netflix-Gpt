import React from 'react'
import { signOut } from "firebase/auth";
import { auth } from '../Utils/firebase';
import {useNavigate}   from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { addUser,removeUser } from '../Redux/Slices/userSlice';
import { LOGO, SUPPORTED_LANGUAGES, USER_AVATAR } from '../Utils/constants';
import { toggleGptSearchView } from '../Redux/Slices/gptSlice';
import { changeLanguage } from '../Redux/Slices/configSlice';

const Header = () => {
  const Navigate = useNavigate();
  const user = useSelector(store=>store.user);
  const gptSearch = useSelector(store=>store.gpt.showGptSearch);
  const dispatch = useDispatch();
  const handleGptSearchClick=()=>{
    //toggle my gpt search
    dispatch(toggleGptSearchView());
  }

  const handleLangChange=(e)=>{
    dispatch(changeLanguage(e.target.value));

  }
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

      return ()=> unsubscribe(); //when component unmounts, we will also unsubscibe  the listener onAuthStateChange

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
          {gptSearch && (<select onChange={handleLangChange} className='py-0 px-4 m-4 rounded-md drop-shadow-lg bg-gray-500 text-white font-bold'>
            {SUPPORTED_LANGUAGES.map(
              lang => <option  key={lang.identifier}
                              value = {lang.identifier}>
                                {lang.name}
                      </option>
              )
            }
          </select>)}
          <button onClick={handleGptSearchClick} className='py-0 px-4 m-4 rounded-md drop-shadow-lg bg-purple-500 text-white font-bold'>{!gptSearch? "GPT Search": "Home"}</button>
          <img alt='usericon' className='w-12 h-12 m-3' src={user?.photoURL}></img>
          <button onClick={handleSignOut} className='font-bold text-white'>Sign Out</button>
        </div>)}
        
    </div>
  )
}

export default Header