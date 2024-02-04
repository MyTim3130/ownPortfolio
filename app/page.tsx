"use client";
import LandingPage from "@/components/LandingPage";
import Photography from "@/components/Photography";
import Programming from "@/components/Programming";
import WaterSection from "@/components/WaterSection";
import Nav from "@/components/Nav";
import gsap from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { useEffect } from "react";

gsap.registerPlugin(ScrollSmoother);
export default function Home() {
  useEffect(() => {
    ScrollSmoother.create({
      smooth: 1,
      effects: true,
    });
  }, []);

  return (
    <div className="h-[300vh]">
      {/* <video
        autoPlay
        loop
        muted
        className="z-0 fixed h-screen w-screen object-cover opacity-40"
      >
        <source src="/images/texture.mp4" type="video/mp4" />
      </video>
      <Nav></Nav> */}


      {/* <div id="smooth-wrapper">
        <div id="smooth-content"> */}
          {/* <LandingPage></LandingPage> */}
          <Photography></Photography>
          {/* <Programming></Programming> */}
          {/* <WaterSection></WaterSection> */}
        {/* </div>

      </div> */}
    </div>
  );
}
