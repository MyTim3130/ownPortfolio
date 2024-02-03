'use client'
import LandingPage from "@/components/LandingPage";
import Skills from "@/components/Skills";
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
<div id="smooth-wrapper">
    <div id="smooth-content">
    <LandingPage></LandingPage>
      <Skills></Skills>
    </div>
  </div>
      
   </>
  );
}
