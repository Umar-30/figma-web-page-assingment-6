import React from 'react'
import Image from 'next/image'

const acheivement = () => {
  return (
    <div className='w-[1152px] h-[388px] items-center'>
            <h2 className='font-bold text-[48px] text-center'>Our Achivements</h2>
            <p className=' w-[1152px] pb-[50px] text-[18px] text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim
                 in eros elementum tristique. Duis cursus, mi quis viverra<br /> ornare, eros dolor
                  interdum nulla, ut commodo diam libero vitae erat.</p>
        <div className='w-[1280px] h-[96px] flex flex-rows justify-around '>
          <div><h2 className='font-bold text-[40px]'>+200</h2><p className='text-[16px] text-center'>Courses</p></div>
          <div><h2 className='font-bold text-[40px]'>50K </h2><p className='text-[16px] text-center'>Mentors</p></div>
          <div><h2 className='font-bold text-[40px]'>370K</h2><p className='text-[16px] text-center'>Students</p></div>
          <div><h2 className='font-bold text-[40px]'>100+</h2><p className='text-[16px] text-center'>Recognition</p></div>

        </div>
    </div>
  )
}

export default acheivement