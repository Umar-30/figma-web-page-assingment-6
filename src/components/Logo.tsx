import React from 'react'
import Image from 'next/image'

const Logo = () => {
  return (
    <div className='w-[1280px] h-[228px] bg-gray-100  border rounded-lg  flex text-center items-center'>
        <div className='w-[327px] h-[54px] font-bold size-[28px] leading[27px] text-sm mb-6'>
         <p className='font-bold text-[24px]'>Trusted by 2000+ copmanies worldwide.</p></div>
          <ul className='flex flex-row space-x-14'>
            <li> <Image src={'/imges/logos/Airbnb Logo.svg'} 
      alt="logo"
      width={100} 
      height={100}
      /> </li>
       <li> <Image src={'/imges/logos/Airbnb Logo (1).svg'} 
      alt="logo 1"
      width={100} 
      height={100}
      /> </li>
       <li> <Image src={'/imges/logos/Airbnb Logo (2).svg'} 
      alt="logo 2"
      width={100} 
      height={100}
      /> </li>
       <li> <Image src={'/imges/logos/Airbnb Logo (3).svg'} 
      alt="logo 3"
      width={100} 
      height={100}
      /> </li>
       <li> <Image src={'/imges/logos/Airbnb Logo (4).svg'} 
      alt="logo 4"
      width={100} 
      height={100}
      /> </li>
       <li> <Image src={'/imges/logos/Airbnb Logo (5).svg'} 
      alt="logo 5"
      width={100} 
      height={100}
      /> </li>
      </ul>
              
    
    </div>
  )
}

export default Logo