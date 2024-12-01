import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="w-[1280px] h-[684px]  px-12">
      <div className=" w-[1120px]h-[82px] flex justify-between pt-10">
        <div className="w-[500px] -[100px]">
          <h3 className="font-semibold text-[18px] ">
            Subscribe to our newsletter
          </h3>
          <p className="text-[16px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        <div className=" ">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-2 border rounded outline-1 "
          />
          <button className="border rounded outline-1 px-4 py-2 m-2">
            Subscribe
          </button>
          <p className="text-xs">
            By subscribing you agree to with our Privacy Policy
          </p>
        </div>
      </div>
      <div className=" h-[225px] flex flex-cols justify-around  pt-[50px]">
        <Image
          src={"/imges/Ddsgnr Library.svg"}
          alt="logo"
          height={40}
          width={130.6}
        />
        <div className="w-[250px] h-[225px] ">
          <ul>
            <li className="font-semibold text-[16px]">Courses</li>
            <li>Business</li>
            <li>Development</li>
            <li>Technology</li>
            <li>Design</li>
            <li>Progrmming</li>
          </ul>
        </div>
        <div className="w-[250px] h-[225px] ">
          <ul>
            <li className="font-semibold text-[16px]">Resources</li>
            <li>Career</li>
            <li>Resume</li>
            <li>Learning</li>
            <li>Interwiew Prepration</li>
            <li>Jobs</li>
          </ul>
        </div>
        <div className="w-[250px] h-[225px]">
          <ul>
            <li className="font-semibold text-[16px]">About Us</li>
            <li>Contact</li>
            <li>Help/Support</li>
            <li>FAQ</li>
            <li>Term and Condition</li>
            <li>Partners</li>
          </ul>
        </div>
      </div>
      <div className="h-[24px] w-[1280px] flex justify-between pt-14 border-t botder-t-2 border-t-black">
        <div className="w-[564px] h-[21px]  justify-start ">
          <p>2023 Ddsgnr. All right reserved.</p>
        </div>
        <div className=" flex space-x-6">
          <Link href={"#"} className="hover:underline">
            Privacy Policy
          </Link>
          <Link href={"#"} className="hover:underline">
            Terms of Service
          </Link>
          <Link href={"#"} className="hover:underline">
            Cookies Settings
          </Link>
        </div>
        <div className="w-[132px] h-[24px] flex justify-end space-x-2 ">
          <Image
            src={"/imges/Facebook.svg"}
            alt="icon"
            height={24}
            width={24}
          />
          <Image
            src={"/imges/Instagram.svg"}
            alt="icon"
            height={24}
            width={24}
          />
          <Image src={"/imges/Twitter.svg"} alt="icon" height={24} width={24} />
          <Image
            src={"/imges/LinkedIn.svg"}
            alt="icon"
            height={24}
            width={24}
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
