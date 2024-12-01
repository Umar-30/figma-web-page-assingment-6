import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Cources = () => {
  return (
    <div className='w-[1280px] h-[1742px]'>
        <div className='w-[768px] '>
            <h1 className='font-bold pl-[530px]  text-[56px] pb-[30px]'>Courses</h1>
            <p className='pl-[500px] text-[18px] pb-[50px]'>Your Ultimate Guide to learning</p>
          </div>
            <div className='flex items-center justify-center space-x-10 pb-[40px] h-[40px]'>
              <Link href={'#'}className='hover:underline'>Popular</Link>
              <Link href={'#'}className='hover:underline'>Recommended</Link>
              <Link href={'#'}className='hover:underline'>Best  Price</Link>
            </div>
        
        <div className='w-[1152px] h-[1200px]'>
        <div className='w-[1312px] h-[534px] gap-16 flex' >
            <Image src={'/imges/cards/Card.svg'} alt='image 1' height={534} width={416} />
            <Image src={'/imges/cards/Card (8).svg'} alt='image 2' height={534} width={416} />
            <Image src={'/imges/cards/Card (2).svg'} alt='image 3' height={534} width={416} />
        </div>
        <div className='w-[1312px] h-[534px] gap-16 flex mt-5'>
            <Image src={'/imges/cards/Card (9).svg'} alt='image 4' height={534} width={416} />
            <Image src={'/imges/cards/Card (10).svg'} alt='image 5' height={534} width={416} />
            <Image src={'/imges/cards/Card (11).svg'} alt='image 6' height={534} width={416} />
        </div>
        </div>
        <div className='flex justify-center '>
        <button type='button' className='w-[152px] h-[40px] rounded-[5px] border text-[16px] pl-[16px] '>View All Courses</button>
    </div>
    </div>  
  )
}

export default Cources 