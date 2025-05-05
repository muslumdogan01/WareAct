import React from 'react'
import ReusableSlider from './cards/page'

const Content = () => {
  return (
    <div className='w-full h-full flex flex-col bg-[#F3F4F6] mt-[50px] px-4'>
        <div className='block md:hidden'><ReusableSlider iconPosition="top" /></div>
    </div>
  )
}

export default Content