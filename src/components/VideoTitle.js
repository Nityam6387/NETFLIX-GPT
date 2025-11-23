import React from 'react'

const VideoTitle = ({title , overview}) => {
  return (
    <div className='pt-[20%] px-12 absolute text-white w-screen aspect-video bg-gradient-to-r from-black '>
        <h1 className='text-6xl font-bold'> {title} </h1>
        <p className='w-1/4 text-sm my-6'> {overview} </p>
        <div >
            <button className='bg-white hover:bg-opacity-75 py-2 text-xl px-12 bg-opacity-20'> ▶️ Play Now</button>
            <button className='mx-4 bg-gray-700 text-xl py-2 px-12 bg-opacity-20'>More Info</button>
        </div> 
    </div>
  )
}

export default VideoTitle;