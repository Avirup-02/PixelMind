import React from 'react'

const Landing = () => {
  return (
    <div className='flex flex-col justify-between items-center md:gap-20 md:flex-row w-full m-0'>
         <div className='flex flex-col items-start md:m-10'>
            <h1 className='md:text-6xl text-4xl font-bold'>PixelMind<span className='text-red-800'>.</span></h1>
            <span className='text-sm text-gray-700'>Decode Emotions,Elevate Well-Being</span>
         </div>
         <div className='md:w-1/2'>
            <img src="../Landingimg.jpg" className=''></img>
         </div>
         
    </div>
  )
}

export default Landing