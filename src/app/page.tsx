import Image from "next/image";
import Hero from "@/components/Hero";
import Logo from "../components/Logo";
import Category from "@/components/Category";
import Acheivement from "@/components/Acheivement";
import Cources from "@/components/Cources";
import Team from "@/components/Team";
import Testimonial from "@/components/Testimonial";
import Footer from "@/components/Footer"; 
import type { AppProps } from "next/app";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight:'100',
  subsets:['latin'],
  display:'swap',

})

export default function Home() {
  return (
   <div className="h-[2135px] w-[428px]">
  
  <Hero />
  <Logo />
  <Category />
  <Acheivement />
  <Cources />
  <Team />
  <Testimonial />
  <Footer />
 </div>
  );
}
