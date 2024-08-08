"use client";
import React from "react";
import Hero from "./hero";
import Quote from "./quote";
import Tech from "./tech";
import { HeroParallaxDemo } from "./parallax";
import { GlobeDemo } from "./globe";
import { CardStackDemo } from "./cardstack";
import { HeroScrollDemo } from "./scrollContainer";
import Services from "./services";
const Home = () => {
  return (
    <div className="relative isolate overflow-hidden w-full h-full ">
      <svg
        className="absolute inset-0 -z-10 h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="0787a7c5-978c-4f66-83c7-11c213f99cb7"
            width={200}
            height={200}
            x="50%"
            y={-1}
            patternUnits="userSpaceOnUse"
          >
            <path d="M.5 200V.5H200" fill="none" />
          </pattern>
        </defs>
        <rect
          width="100%"
          height="100%"
          strokeWidth={0}
          fill="url(#0787a7c5-978c-4f66-83c7-11c213f99cb7)"
        />
      </svg>
      <div className="mx-auto h-full justify-center items-center align-middle max-w-7xl  sm:pb-32 lg:flex lg:py-30 lg:px-8">
        <div className="mx-auto  max-w-xl lg:mx-0 lg:max-w-xl lg:flex-shrink-0 flex flex-col justify-center">
          <div
            data-aos="fade-down-right"
            className="flex flex-col items-center justify-center text-center text-black"
          >
            <div data-aos="fade-down ">
              <Hero />
              <Quote />
              <Tech />
              <div className="grid grid-cols-2  bg-transparent">
                <div className="flex flex-row items-center justify-center  md:h-[33rem] bg-transparent relative w-full">
                  <div className="max-w-7xl mx-auto w-full flex flex-row items-center justify-center relative overflow-hidden md:[33rem] mt-[10rem] px-4">
                    <div>
                      <h2 className="text-center text-xl md:text-4xl font-bold text-black dark:text-white">
                        We provide service worldwide
                      </h2>
                      <p className="text-center text-base md:text-lg font-normal text-neutral-700 dark:text-neutral-200 max-w-md mt-2 mx-auto">
                        We are here to provide you with the best experience.
                      </p>
                    </div>
                  </div>
                </div>
                <GlobeDemo />
              </div>
              <div className="grid grid-cols-2 bg-transparent">
                <CardStackDemo />
                <div className="flex flex-row items-center justify-center md:h-[33rem] bg-transparent relative w-full">
                  <div className="max-w-7xl mx-auto w-full relative overflow-hidden  px-4">
                    <div>
                      <h2 className="text-center text-xl md:text-4xl font-bold text-black dark:text-white">
                        Our following principles
                      </h2>
                      <p className="text-center text-base md:text-lg font-normal text-neutral-700 dark:text-neutral-200 max-w-md mt-2 mx-auto">
                        Follow saying of the great. To become great.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <Services/>
              <HeroScrollDemo />

              <div className="container">
                <HeroParallaxDemo />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
