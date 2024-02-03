"use client";
import React, { useState } from "react";
import Image from "next/image";

const LandingPage = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <div
        className={`absolute w-screen h-screen justify-center items-center flex  ${
          isHovered ? "opacity-100" : "opacity-0"
        } transition-opacity duration-300`}
        id="hoverEffect"
        style={{ zIndex: 10 }} // Keep z-index constant to prevent stacking context issues
      >
        <Image
          className="h-96 sm:h-[50vh] w-auto"
          src="/images/heroFront.png"
          height={1000}
          width={1000}
          alt="missingImage"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        />
      </div>
      <div className="absolute w-screen h-screen justify-center items-center flex -z-20 grayscale">
        <Image
          className="h-96 sm:h-[50vh] w-auto"
          src="/images/heroBack.png"
          height={1000}
          width={1000}
          alt="missingImage"
        />
      </div>
      <section className="h-[95vh] w-screen flex justify-center items-center flex-col z-0">
        <div
          className="font-bold text-center flex flex-col justify-evenly items-center text-6xl sm:text-8xl h-3/6 w-[70vw] sm:text-[#ebebeb] text-sky-500 sm:mix-blend-difference"
          id="hoverElement"
        >
          <h1 className="text-white">Tim</h1>
          <span>Developer & Student</span>
          <span>Austria 2024</span>
        </div>
      </section>
      <section className="h-[50vh] w-screen flex justify-center items-center">
        <p className="sm:w-2/6 w-[80vw]">
          Hello! I&apos;m Tim, a 17-year-old enthusiast from Austria, deeply
          engrossed in the world of IT and Web Development. I&apos;m currently
          immersing myself in coding and design, eager to unlock new
          possibilities and innovative solutions in this dynamic field.
        </p>
      </section>
    </>
  );
};

export default LandingPage;
