import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="w-[1280px] h-[800px] flex">
      <div className="w-[640px] h-[300] text-center">
        <h1 className="text-[56px] font-bold leading-[67.2px] gap-[24px] pt-40">
          Learn new skills <br />
          online with ease
        </h1>
        <p className="text-[18px] leading-[27px] pt-4">
          Discover a wide range of courses covering a variety of
          <br /> subjects, taught by expert instructors.
        </p>
        <button
          type="button"
          className="text-[16px] leading-[24px] px-6 py-3 gap-2
            bg-black text-white mt-5 rounded-sm"
        >
          Start learning now
        </button>
        <button
          type="button"
          className="text-[16px] leading-[24px] px-6 py-3 gap-2
            text-black mt-5 rounded-sm border-[2px] ml-4"
        >
          Explore Courses
        </button>
      </div>
      <div className="w-[640px] h-[800px]">
        <Image src={"/imges/Image.svg"} alt="image" height={800} width={640} />
      </div>
    </div>
  );
};

export default Hero;
