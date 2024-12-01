import React from 'react'
import Image from 'next/image'

const Testimonial = () => {
  return (
    <div className='w-[1280px] h-[830.89px] bg-[#F7F7F7]'>
      <div className='w-[560px] h-[109px]'>
        <h1 className='font-bold text-[48px]'>Customer testimonials</h1>
        <p className='text-[18px] leading-[27px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <div className='flex justify-between py-8'>
        <Image src={'/imges/testimonial/Content (3).svg'} alt='review image' height={321.89} width={362.67} />
        <Image src={'/imges/testimonial/Content (4).svg'} alt='review image' height={321.89} width={362.67} />
        <Image src={'/imges/testimonial/Content (5).svg'} alt='review image' height={321.89} width={362.67} />
      </div>
      <div className='flex justify-between'>
        <Image src={'/imges/testimonial/Slider Dots.svg'} alt='slider dots' height={8} width={72} />
        <Image src={'/imges/testimonial/Slider Buttons.svg'} alt='slider button' height={48} width={111} />
      </div>
    </div>
  )
}

export default Testimonial