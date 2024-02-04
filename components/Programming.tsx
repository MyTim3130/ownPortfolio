"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger)

const Programming = () => {
  const [loaded, setLoaded] = useState(false);


  useEffect(() => {
    setLoaded(true);
  });

  useEffect(()=>{
    gsap.fromTo(
      "#programmingTitle",
      { x: 500, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: "#programmingTitle",
          start: "top+=100 bottom", // Adjusted for demonstration
          end: "bottom+=400 bottom",
          scrub: true,
        },
      }
    );

    gsap.fromTo(
      "#programmingText",
      { x: 500, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: "#programmingText",
          start: "top+=100 bottom", // Adjusted for demonstration
          end: "bottom+=400 bottom",
          scrub: true,
        },
      }
    );

    
    gsap.fromTo(
      "#programmingHashtags",
      { y: 200, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: "#programmingText",
          start: "bottom+=100 bottom", // Adjusted for demonstration
          end: "bottom+=400 bottom",
          scrub: true,
        },
      }

    );
  },[loaded])
  return (
    <>
      <section className="mt-20 flex sm:justify-between items-center sm:items-start flex-col-reverse sm:flex-row">
        <div
          className="w-3/6 grid grid-cols-1 sm:ml-10 mt-20 sm:grid-cols-2 h-fit"
          id="paddingFix"
        >
          <CardContainer className="inter-var mb-10 sm:w-5/6 lg:w-full">
            <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
              <CardItem translateZ="20">
                <Image
                  src="/images/cc-tProject.png"
                  height={1000}
                  width={1000}
                  alt="missing Image"
                ></Image>
              </CardItem>
              <CardItem translateZ="70">
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white xl:text-2xl lg:text-xl">
                  CC&T Call Center und Telemarketing
                </h5>
              </CardItem>
              <CardItem translateZ="40">
                <p className="font-normal text-gray-700 dark:text-gray-400 lg:text-sm">
                  My first collaboration with a big Client. The Website here was
                  100% made by me and is still (to this day) maintenanced by me.
                </p>
              </CardItem>
            </CardBody>
          </CardContainer>
          <CardContainer className="inter-var sm:ml-20 mb-10 sm:w-5/6 lg:w-full">
            <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
              <CardItem translateZ="20">
                <Image
                  src="/images/cc-tProject.png"
                  height={1000}
                  width={1000}
                  alt="missing Image"
                ></Image>
              </CardItem>
              <CardItem translateZ="70">
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white xl:text-2xl lg:text-xl">
                  CC&T Call Center und Telemarketing
                </h5>
              </CardItem>
              <CardItem translateZ="40">
                <p className="font-normal text-gray-700 dark:text-gray-400 lg:text-sm">
                  My first collaboration with a big Client. The Website here was
                  100% made by me and is still (to this day) maintenanced by me.
                </p>
              </CardItem>
            </CardBody>
          </CardContainer>
          <CardContainer className="inter-var mb-10 sm:w-5/6 lg:w-full">
            <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
              <CardItem translateZ="20">
                <Image
                  src="/images/cc-tProject.png"
                  height={1000}
                  width={1000}
                  alt="missing Image"
                ></Image>
              </CardItem>
              <CardItem translateZ="70">
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white xl:text-2xl lg:text-xl">
                  CC&T Call Center und Telemarketing
                </h5>
              </CardItem>
              <CardItem translateZ="40">
                <p className="font-normal text-gray-700 dark:text-gray-400 lg:text-sm">
                  My first collaboration with a big Client. The Website here was
                  100% made by me and is still (to this day) maintenanced by me.
                </p>
              </CardItem>
            </CardBody>
          </CardContainer>
          <CardContainer className="inter-var sm:ml-20 mb-10 sm:w-5/6 lg:w-full">
            <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
              <CardItem translateZ="20">
                <Image
                  src="/images/cc-tProject.png"
                  height={1000}
                  width={1000}
                  alt="missing Image"
                ></Image>
              </CardItem>
              <CardItem translateZ="70">
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white xl:text-2xl lg:text-xl">
                  CC&T Call Center und Telemarketing
                </h5>
              </CardItem>
              <CardItem translateZ="40">
                <p className="font-normal text-gray-700 dark:text-gray-400 lg:text-sm">
                  My first collaboration with a big Client. The Website here was
                  100% made by me and is still (to this day) maintenanced by me.
                </p>
              </CardItem>
            </CardBody>
          </CardContainer>
        </div>
        <div className="sm:w-3/6 w-screen flex justify-between items-center h-[80vh] flex-col">
          <h2 className="text-6xl mt-20 sm:text-4xl md:text-5xl lg:text-6xl" id="programmingTitle">
            Programming
          </h2>
          <span className="w-4/6" id="programmingText">
            I&apos;ve been captivated by programming for nearly seven years, with a
            special love for web development. This field, with its endless
            potential for creativity and innovation, has always been where my
            passion lies. Yet, my journey hasn&apos;t been confined to just one area.
            I&apos;ve also developed skills across a range of domains, from database
            management to software development and even a bit of machine
            learning. This broad skill set enriches my main focus, making me not
            just a programmer, but a problem solver and a lifelong learner.
            Through this journey, I&apos;ve realized that my true joy comes from the
            challenge of creating and improving, no matter the platform.
          </span>
          <div className="flex flex-col" id="programmingHashtags">
            <div>#Web</div>
            <div>#Programming</div>
            <div>#Passion</div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Programming;
