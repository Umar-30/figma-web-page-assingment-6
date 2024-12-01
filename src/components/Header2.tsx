import React from "react";
import Image from "next/image";

const Header2 = () => {
  return (
    <div className="w-[1280px] h-[72px] border px-6 py-4 shadow-inner x-0 y--1 shadow-black bg-[#F7F7F7]">
      <div
        className=" flex flex-row px-4 py-2 justify-between items-center "
      >
        <Image
          src={"/imges/Ddsgnr Library.svg"}
          alt={"logo"}
          width={130.6}
          height={41}
        />

        <ul className="flex space-x-14 cursor-pointer items-center justify-center">
           <li><a href="#" className="hover:scale-95 hover:underline transition-all">Home</a></li>
           <li><a href="#" className="hover:scale-95 hover:underline transition-all">Coursec</a></li>
           <li><a href="#" className="hover:scale-95 hover:underline transition-all">Services</a></li>
           <li><a href="#" className="hover:scale-95 hover:underline transition-all">Acheivement</a></li>
           <li><a href="#" className="hover:scale-95 hover:underline transition-all">About us</a></li>
           <li><a href="#" className="hover:scale-95 hover:underline transition-all">Testimonial</a></li>
        </ul>
        <div className="flex flex-row space-y-2 md:space-y-0 md:space-x-4 mt-4 md:mt-0">
        <button
          type="button"
          className="w-[80px] h-[40px] px-4 py-2 rounded-md border text-center"
        >
          Login
        </button>
        <button
          type="button"
          className="w-[95px] h-[40px] px-4 py-2 rounded-md border text-center bg-black text-white "
        >
          Sing up
        </button>
        </div>
      </div>
    </div>
  );
};

export default Header2;
