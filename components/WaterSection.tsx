'use client'
import React from "react";

const WaterSection = () => {
  return (
    <>
      <div className="wavesGradient h-[20vh] z-20 w-screen absolute"></div>
      <section className="h-screen w-screen flex justify-center items-center" id="ContactMe">
        <h2 className="absolute z-10 text-6xl lg:text-9xl font-extrabold mix-blend-difference mb-96">
          CONTACT ME
        </h2>
        {/* <video
          autoPlay
          loop
          muted
          className="z-0 absolute h-screen w-screen object-cover rotate-180 saturate-50"
        >
          <source src="/images/waves.mp4" type="video/mp4" />{" "}
        </video> */}
        <div className="flex flex-col md:flex-row h-[40vh] justify-evenly items-center md:h-fit w-screen absolute bottom-40 font-bold text-xl">
          <span>TIN.HAUSLKRAMPER@GMAIL.COM</span>
          <span>+43 660 133 0906</span>
          <span>
            <a href="https://www.instagram.com/my__tim_/">INSTAGRAM</a>
          </span>

          <span>
            <a href="https://discord.com/">DISCORD: mydim</a>
          </span>
        </div>
        <div className="w-screen h-20vh flex justify-center items-center absolute bottom-5">
          <span>
            <a href="https://github.com/MyTim3130">GITHUB</a>
          </span>
        </div>
      </section>
    </>
  );
};

export default WaterSection;
