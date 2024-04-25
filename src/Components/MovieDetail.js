import React,{useState} from 'react'
import {useDispatch} from  "react-redux";
import { toggleDetailView } from '../Redux/Slices/detailSlice';
import {useSelector} from 'react-redux'
import { IMG_CDN_URL } from '../Utils/constants';


const MovieDetail = () => {
    const movieDetail=useSelector(store=>store.detail.detail);
    const dispatch=useDispatch();
    const handleMovieDetailView =()=>{
      dispatch(toggleDetailView());
    } 
    
  return (<div className='fixed z-30 w-screen h-screen bg-black bg-opacity-50 backdrop-blur-sm'>
    <div className='relative mx-auto my-20 w-[80%] h-[80%] bg-black text-white'>
    
    <div className='w-full h-full pt-[5%] md:pt-[5%] lg:pt-[5%] px-6 md:px-24 lg:px-24 text-white bg-gradient-to-r from-black'>
    <img 
     className='w-36'
        alt='Movie Card'
        src={IMG_CDN_URL+movieDetail.posterPath}>
          
        </img>
    
        <h1 className='text-xl md:text-6xl lg:text-6xl font-bold drop-shadow'>{movieDetail.title}</h1>
        <p className=' py-6 text-lg w-full drop-shadow'>{movieDetail.description}</p>
        <div className=' flex gap-3 pt-3 md:pt-0 lg:pt-0'>
            <button className='bg-white text-black font-bold px-4 md:px-8 lg:px-8 p-1 md:p-2 lg:p-2 text-sm md:text-lg lg:text-lg rounded-md hover:bg-opacity-50'><i className='bx bx-play bx-xs'></i>Play</button>
            <button className='mx-2 bg-gray-500 bg-opacity-50 text-white font-bold px-4 md:px-8 lg:px-8 p-1 md:p-2 lg:p-2 text-sm md:text-lg lg:text-lg rounded-md'><i className='bx bx-info-circle' ></i> More Info</button>
            <button className='bg-red-700 text-white font-bold px-4 md:px-8 lg:px-8 p-1 md:p-2 lg:p-2 text-sm md:text-lg lg:text-lg rounded-md' onClick={handleMovieDetailView}>Close</button>
            
        </div>
        </div>
    </div>
  </div>
  
  )
}

export default MovieDetail