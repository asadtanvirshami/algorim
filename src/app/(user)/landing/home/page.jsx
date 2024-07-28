import React from "react";
import Hero from "./hero";
import Quote from "./quote";

const Home = () => {
  return (
    <div>
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
              <div data-aos="fade-down">
                <Hero />
                <Quote />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
