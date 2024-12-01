import React from 'react'
import Image from 'next/image'
import { Roboto } from 'next/font/google'

const Header = () => {
  return (
    <div className='w-[1280px] px-6 py-4 bg-[#F7F7F7] shadow-inner  shadow-black
 '>
    <div className='w-full flex-row justify-between items-center '>
    <p className='text-left text-sm '>Phone Number: 956 742 455 678 | Email:info@ddsgnr.com</p>
    </div>
    <div className='flex justify-end gap-4 mt-2 '>
      <Image src={'/imges/Facebook.svg'} 
      alt="fb-logo"
      width={24} 
      height={24}
      />
      <Image src={'/imges/Instagram.svg'} 
      alt="insta-logo"
      width={24} 
      height={24}
      />
      <Image src={'/imges/LinkedIn.svg'} 
      alt="linkedin-logo"
      width={24} 
      height={24}
      />
      <Image src={'/imges/Twitter.svg'} 
      alt="twitter-logo"
      width={24} 
      height={24}
      />
    </div>
    </div>
  )
}

export default Header