import React from 'react'
import Image from 'next/image'

const category = () => {
  return (
    <div className='w-[1280px] h-[1049px] '>
      <h1 className='font-bold  text-center text-[48px] pt-[100px] pb-[40px]'>Explore Courses By Category</h1>
      <p className='pl-[312px] text-[18px] pb-[30px]'>Discover a wide range of courses covering a variety of subjects, taught by expert instructors.</p>
        
        
      <div className='w-[1280px] flex justify-between gap-6 pb-6 '>
        <div className='w-[410.67px] h-[132px] rounded-[5px] p-4 gap-8 bg-[#F7F7F7] flex flex-row'>
          <Image src={'/imges/frames/Frame 292.svg'} alt='frame1' height={100}width={100} />
          <p className='flex justify-center items-center'>Design & Development <br/>50+ Courses Available</p>
        </div>
        <div className='w-[410.67px] h-[132px] rounded-[5px] p-4 gap-8 bg-[#F7F7F7] flex flex-row'>
          <Image src={'/imges/frames/Frame 292 (3).svg'} alt='volume logo' height={100}width={100}  />
          <p className='flex justify-center items-center'>Marketing<br/>50+ Courses Available</p>
        </div>
        <div className='w-[410.67px] h-[132px] rounded-[5px] p-4 gap-8 bg-[#F7F7F7] flex flex-row'>
          <Image src={'/imges/frames/Frame 292 (7).svg'} alt='group frame' width={100} height={100} />
          <p className='flex justify-center items-center'>Development<br/>50+ Courses Available</p>
        </div>
        </div>
        <div className='w-[1280px] flex justify-between gap-6 pb-6 '>
        <div className='w-[410.67px] h-[132px] rounded-[5px] p-4 gap-8 bg-[#F7F7F7] flex flex-row'>
          <Image src={'/imges/frames/Frame 292 (1).svg'} alt='mic frame' width={100} height={100} />
          <p className='flex justify-center items-center'>Communication<br/>50+ Courses Available</p>
        </div>
        <div className='w-[410.67px] h-[132px] rounded-[5px] p-4 gap-8 bg-[#F7F7F7] flex flex-row'>
          <Image src={'/imges/frames/Frame 292 (4).svg'} alt='link frame' width={100} height={100} />
          <p className='flex justify-center items-center'>Digital Marketing<br/>50+ Courses Available</p>
        </div>
        <div className='w-[410.67px] h-[132px] rounded-[5px] p-4 gap-8 bg-[#F7F7F7] flex flex-row'>
          <Image src={'/imges/frames/Frame 292 (6).svg'} alt='arrow frame' width={100} height={100} />
          <p className='flex justify-center items-center'>Self Development<br/>50+ Courses Available</p>
        </div>
        </div>
        <div className='w-[1280px] flex justify-between gap-6 pb-6' >
        <div className='w-[410.67px] h-[132px] rounded-[5px] p-4 gap-8 bg-[#F7F7F7] flex flex-row'>
          <Image src={'/imges/frames/Frame 292 (2).svg'} alt='briefcase frame' width={100} height={100} />
          <p className='flex justify-center items-center'>Business<br/>50+ Courses Available</p>
        </div>
        <div className='w-[410.67px] h-[132px] rounded-[5px] p-4 gap-8 bg-[#F7F7F7] flex flex-row'>
          <Image src={'/imges/frames/Frame 292 (5).svg'} alt='book frame' width={100} height={100} />
          <p className='flex justify-center items-center'>Finance<br/>50+ Courses Available</p>
        </div>
        <div className='w-[410.67px] h-[132px] rounded-[5px] p-4 gap-8 bg-[#F7F7F7] flex flex-row'>
          <Image src={'/imges/frames/Frame 292 (8).svg'} alt='book1 frame' width={100} height={100} />
          <p className='flex justify-center items-center'>Consulting<br/>50+ Courses Available</p>
        </div>
        </div>
        <div className='text-center mt-6 '>
          <button className='bg-transparent border border-black text-black px-4 py-2 rounded'>Veiw All Courses</button>
        </div>
        </div>
        
  )
}

export default category