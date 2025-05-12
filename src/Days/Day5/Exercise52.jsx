"use client";

import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export default function Exercise52() {
  const containerRef = useRef(null);
  const pinSectionRef = useRef(null);

  useLayoutEffect(() => {
    // Create the ScrollTrigger
    const scrollTrigger = ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top 0%",
      end: "bottom bottom",
    //   y:-200,
      pin: pinSectionRef.current,
      pinSpacing: false,
    });

    // Clean up on unmount
    return () => {
      scrollTrigger.kill();
    };
  }, []);

  return (
    <>
      <div ref={containerRef} className=" flex flex-col md:flex-row">
        {/* Pin section - will be pinned on the left */}
        <div
          ref={pinSectionRef}
          className="w-full md:w-1/2 h-[200px] flex justify-center items-center bg-gray-100 "
        >
          <h1 className="text-3xl font-bold">Hello world</h1>
        </div>

        {/* Scrollable content */}
        <div className="w-full md:w-1/2">
          <div className="h-screen border-2 border-red-600 flex items-center justify-center">
            <span className="text-xl">Section 1</span>
          </div>
          <div className="h-screen border-2 border-blue-700 flex items-center justify-center">
            <span className="text-xl">Section 2</span>
          </div>
          <div className="h-screen border-2 border-green-600 flex items-center justify-center">
            <span className="text-xl">Section 3</span>
          </div>
        </div>
      </div>
      <div className="h-screen bg-black w-screen"></div>
    </>
  );
}
