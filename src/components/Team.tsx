import React from 'react'
import Image from 'next/image' 

const Team = () => {
  return (
    <div className='w-[1280px] h-[895px] bg-[#F7F7F7]'>
        
            <h2 className='text-[48px] font-bold pl-[500px] pt-[70px] '>Our team</h2>
            <p className='pl-[400px] text-[18px] pb-[70px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
        
        <div className="gap-4 flex h-[209px] ">
            <Image src={'/imges/team/Card (4).svg'} alt='team reveiw 1' height={273} width={394.67} className='p-4' />
            <Image src={'/imges/team/Card (6).svg'} alt='team reveiw 2' height={273} width={394.67} className='p-4' />
            <Image src={'/imges/team/Card (7).svg'} alt='team reveiw 3' height={273} width={394.67} className='p-4' />
        </div>
        <div className="flex gap-4">
            <Image src={'/imges/team/Card (14).svg'} alt='' height={273} width={394.67} className='p-4' />
            <Image src={'/imges/team/Card (009).svg'} alt='' height={273} width={394.67} className='p-4' />
            <Image src={'/imges/team/Card (15).svg'} alt='' height={273} width={394.67} className='p-4' />
        </div>

    </div>
  )
}

export default Team