'use client'
import LandingPage from "@/components/LandingPage";
import Photography from "@/components/Photography";
import Programming from "@/components/Programming";
import gsap from "gsap";
import {ScrollSmoother} from "gsap/ScrollSmoother";
import { useEffect } from "react";

gsap.registerPlugin(ScrollSmoother) 
export default function Home() {
  useEffect(()=>{
    ScrollSmoother.create({
      smooth: 1,
      effects: true,
    });
  },[])
  
  return (
   <>
   <video className="absolute h-screen w-screen" autoPlay muted loop>
  <source src="/images/texture.mp4" type="video/mp4"></source>
</video>

<div id="smooth-wrapper">
    <div id="smooth-content">
    <LandingPage></LandingPage>
      <Photography></Photography>
      <Programming></Programming>
    </div>
   
  </div>
      
   </>
  );
}
