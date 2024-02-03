'use client'
import React, { useState, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ImageScroll = () => {
  const [isWideScreen, setIsWideScreen] = useState(false);

  useEffect(() => {
    const checkWidth = () => setIsWideScreen(window.innerWidth > 640);
    checkWidth(); // Initial check

    // Register resize event listener to handle window resizing
    window.addEventListener('resize', checkWidth);

    // GSAP animations setup
    if (isWideScreen) {
      gsap.fromTo("#photosLeft", 
        { y: 1000 },
        {
          y: -3000,
          scrollTrigger: {
            trigger: "#PhotographyTab",
            start: "top top",
            end: "+=3000",
            scrub: true,
          }
        }
      );

      gsap.fromTo("#photosRight", 
        { y: -6000 },
        {
          y: 3000,
          scrollTrigger: {
            trigger: "#PhotographyTab",
            start: "top top",
            end: "+=3000",
            scrub: true,
          }
        }
      );
    }

    // Cleanup function to remove the resize event listener and kill ScrollTriggers when component unmounts
    return () => {
      window.removeEventListener('resize', checkWidth);
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [isWideScreen]);

  return (
    <section className="mr-10 flex photos flex-col sm:flex-row -z-50" id="photosLeft">
      <div className="h-fit sm:w-3/6 w-screen flex flex-col items-center">
      <div>
          <div className="h-52 w-52 sm:h-[50vh] sm:w-[20vw] bg-[url(/images/left1.png)] bg-cover rounded-2xl mb-7"></div>
        </div>
        <div>
          <div className="h-52 w-52  sm:h-[50vh] sm:w-[20vw] bg-[url(/images/left2.png)] bg-cover rounded-2xl mb-7"></div>
        </div>
        <div>
          <div className="h-52 w-52 sm:h-[50vh] sm:w-[20vw]  bg-[url(/images/left3.png)] bg-cover rounded-2xl mb-7"></div>
        </div>
        <div>
          <div className="h-52 w-52 sm:h-[50vh] sm:w-[20vw]  bg-[url(/images/left4.png)] bg-cover rounded-2xl mb-7"></div>
        </div>
        <div>
          <div className="h-52 w-52 sm:h-[50vh] sm:w-[20vw]  bg-[url(/images/left5.png)] bg-cover rounded-2xl mb-7"></div>
        </div>
        <div>
          <div className="h-52 w-52 sm:h-[50vh] sm:w-[20vw]  bg-[url(/images/left6.JPG)] bg-cover rounded-2xl mb-7"></div>
        </div>
        <div>
          <div className="h-52 w-52 sm:h-[50vh] sm:w-[20vw]  bg-[url(/images/left7.png)] bg-cover rounded-2xl mb-7"></div>
        </div>
        <div>
          <div className="h-52 w-52 sm:h-[50vh] sm:w-[20vw]  bg-[url(/images/left8.JPG)] bg-cover rounded-2xl mb-7"></div>
        </div>
      </div>
      
      {isWideScreen && (
        <div className="h-fit photos sm:w-3/6 w-screen flex flex-col items-center" id="photosRight">
          <div>
          <div className="h-52 w-52 sm:h-[50vh] sm:w-[20vw]  bg-[url(/images/right1.JPG)] bg-cover rounded-2xl mb-7"></div>{" "}
        </div>
        <div>
          <div className="h-52 w-52 sm:h-[50vh] sm:w-[20vw]  bg-[url(/images/right2.JPG)] bg-cover rounded-2xl mb-7"></div>{" "}
        </div>
        <div>
          <div className="h-52 w-52 sm:h-[50vh] sm:w-[20vw]  bg-[url(/images/right3.JPG)] bg-cover rounded-2xl mb-7"></div>{" "}
        </div>
        <div>
          <div className="h-52 w-52 sm:h-[50vh] sm:w-[20vw]  bg-[url(/images/right4.JPG)] bg-cover rounded-2xl mb-7"></div>{" "}
        </div>
        <div>
          <div className="h-52 w-52 sm:h-[50vh] sm:w-[20vw]  bg-[url(/images/right5.JPG)] bg-cover rounded-2xl mb-7"></div>{" "}
        </div>
        <div>
          <div className="h-52 w-52 sm:h-[50vh] sm:w-[20vw]  bg-[url(/images/right6.jpg)] bg-cover rounded-2xl mb-7"></div>{" "}
        </div>
        <div>
          <div className="h-52 w-52 sm:h-[50vh] sm:w-[20vw]  bg-[url(/images/right7.jpg)] bg-cover rounded-2xl mb-7"></div>{" "}
        </div>
        <div>
          <div className="h-52 w-52 sm:h-[50vh] sm:w-[20vw]  bg-[url(/images/right8.JPG)] bg-cover rounded-2xl mb-7"></div>{" "}
        </div>

        </div>
      )}
    </section>
  );
};

export default ImageScroll;
