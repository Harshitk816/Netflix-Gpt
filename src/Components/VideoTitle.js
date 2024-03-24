import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    <div className='w-screen aspect-video pt-[20%] px-24  absolute text-white bg-gradient-to-r from-black'>
        <h1 className='text-6xl font-bold drop-shadow'>{title}</h1>
        <p className='py-6 text-lg w-1/4 drop-shadow'>{overview}</p>
        <div>
            <button className='bg-white text-black font-bold px-8 p-2 text-lg rounded-md hover:bg-opacity-50'><i className='bx bx-play bx-xs'></i>Play</button>
            <button className='mx-2 bg-gray-500 bg-opacity-50 text-white font-bold px-8 p-2 text-lg rounded-md'><i className='bx bx-info-circle' ></i> More Info</button>
        </div>

    </div>
  )
}

export default VideoTitle