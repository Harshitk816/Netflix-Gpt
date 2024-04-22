import React, { useState } from 'react'
import { IMG_CDN_URL } from '../Utils/constants'

const MovieCard = ({posterPath, title, avgRating}) => {
  const [isHover, setIsHover]=useState(false);
  const handleHover1=()=>{
    setIsHover(true);
  }
  const handleHover2=()=>{
    setIsHover(false);
  }
  if(!posterPath){
    return ( <div className='w-48 pr-4 transition-transform duration-300 transform hover:scale-105 ' onMouseOut={handleHover2} onMouseOver={handleHover1}> 
    <img
    alt='Movie Card'
    src="https://media.comicbook.com/files/img/default-movie.png">
      
    </img>
    <div className='text-white relative bottom-12 bg-gradient-to-t from-black'>
      {isHover && (<><p className='bg-gradient-to-t from-black w-full font-semibold p-3 absolute truncate text-lg drop-shadow-2xl '>{title}</p>


     </>)}
    </div>
    
</div>)
  }
 
  return (
    <div className='w-48 pr-4 transition-transform duration-300 transform hover:scale-105 ' onMouseOut={handleHover2} onMouseOver={handleHover1}> 
        <img
        alt='Movie Card'
        src={IMG_CDN_URL+posterPath}>
          
        </img>
        <div className='text-white relative bottom-12 bg-gradient-to-t from-black'>
          {isHover && (<><p className='bg-gradient-to-t from-black w-full font-semibold p-3 absolute truncate text-lg drop-shadow-2xl '>{title}</p>


         </>)}
        </div>
        
    </div>
  )
}

export default MovieCard