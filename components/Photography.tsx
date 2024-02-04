"use client";
import React, { useEffect, useState } from "react";
import ImageScroll from "./ImageScroll";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Photography = () => {
  const [isWideScreen, setIsWideScreen] = useState(false);

  useEffect(() => {
    // Function to update state based on window width
    const checkScreenWidth = () => {
      setIsWideScreen(window.innerWidth > 640);
    };

    // Check screen width on mount and on resize
    checkScreenWidth();
    window.addEventListener("resize", checkScreenWidth);

    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener("resize", checkScreenWidth);
    };
  }, []);

  useEffect(() => {
    // Conditional GSAP ScrollTrigger setup based on isWideScreen
    let st: any;
    if (isWideScreen) {
      st = ScrollTrigger.create({
        trigger: "#PhotographyTab",
        pin: true, // simplified pinning
        start: "top top",
        end: "+=3000",
      });
    }

    // Cleanup function to kill ScrollTrigger when isWideScreen changes or component unmounts
    return () => {
      if (st) {
        st.kill();
      }
    };
  }, [isWideScreen]); // Depend on isWideScreen to re-run effect

  // useEffect(() => {
  //   gsap.fromTo(
  //     "#photographyTitle",
  //     { x: -500, opacity: 0 },
  //     {
  //       x: 0,
  //       opacity: 1,
  //       scrollTrigger: {
  //         trigger: "#photographyTitle",
  //         start: "top bottom", // Adjusted for demonstration
  //         end: "bottom+=200 bottom",
  //         scrub: true,
  //       },
  //     }
  //   );

  //   gsap.fromTo(
  //     ".photographyText",
  //     { x: -500, opacity: 0 },
  //     {
  //       x: 0,
  //       opacity: 1,
  //       scrollTrigger: {
  //         trigger: ".photographyText",
  //         start: "top top", // Adjusted for demonstration
  //         end: "bottom+=400 top",
  //         scrub: true,
  //       },
  //     }
  //   );
  // });

  return (
    <>
      <section
        className="h-fit w-screen flex sm:justify-between sm:flex-row flex-col justify-center"
        id="PhotographyTab"
      >
        <div className="h-[20vh] w-screen absolute z-50 photosGradientTop"></div>
        <div className=" w-screen sm:w-2/6 flex flex-col justify-evenly items-center mb-5 sm:mb-0 sm:ml-10">
          <h2
            className="text-5xl md:text-6xl xl:text-7xl font-bold"
            id="photographyTitle"
          >
            Photography
          </h2>
          {isWideScreen && (
            <p className="photographyText">
              Photography has always been more than just a hobby to me;
              it&apos;s been a lifelong passion. From capturing the simplest
              moments to exploring the depths of artistic expression through a
              lens, every click has been a step in my journey of discovery and
              joy. It&apos;s a way to see the world, to freeze time, and to tell
              stories without words.
            </p>
          )}

          {isWideScreen && (
            <div>
              <div>#Photoshop</div>
              <div>#Lightroom</div>
              <div>#Canon</div>
            </div>
          )}
        </div>
        <div className="w-3/6 h-fit sm:h-screen sm:overflow-hidden">
          <ImageScroll></ImageScroll>
        </div>

        <div className="w-screen h-fit flex flex-col items-center sm:hidden">
          {!isWideScreen && (
            <p className="w-[80vw] mb-10">
              Photography has always been more than just a hobby to me;
              it&apos;s been a lifelong passion. From capturing the simplest
              moments to exploring the depths of artistic expression through a
              lens, every click has been a step in my journey of discovery and
              joy. It&apos;s a way to see the world, to freeze time, and to tell
              stories without words.
            </p>
          )}

          {!isWideScreen && (
            <div>
              <div>#Photoshop</div>
              <div>#Lightroom</div>
              <div>#Canon</div>
            </div>
          )}
        </div>
        <div className="h-[20vh] w-screen absolute z-50 top-[80%] photosGradientBottom"></div>
      </section>
    </>
  );
};

export default Photography;
