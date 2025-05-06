import React from 'react'
import ReusableSlider from './cards/page'

const Content = () => {
  return (
    <div className='w-full h-full flex flex-col  pt-[50px] bg-[#F3F4F6] lg:pt-[360px] px-4  relative'>
    
        <div className='md:flex md:w-full md:justify-center md:items-center '><ReusableSlider iconPosition="top" /></div>
    </div>
  )
}

export default Content