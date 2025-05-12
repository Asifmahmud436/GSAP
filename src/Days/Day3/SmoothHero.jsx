"use client";

import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitText from "gsap/SplitText";
import AboutMe from "../Day5/AboutMe";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(SplitText);

export default function Hero() {
  const h1Ref = useRef(null);
  const imgRef = useRef(null);
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    // Set will-change for performance
    gsap.set([h1Ref.current, imgRef.current], {
      willChange: "transform",
    });
    gsap.set(containerRef.current, { position: "absolute" });
    const tl = gsap.timeline();
    const mySplit = new SplitText(".split", { type: "words" });
    const chars = mySplit.words;
    // Image zoom animation

    gsap.fromTo(
      imgRef.current,
      { scale: 1 },
      {
        scale: 1.5,
        ease: "none",
        duration: 9,
        repeat: -1,
        yoyoEase: true,
      }
    );

    

    tl.from(chars, {
      yPercent: 130,
      stagger: 0.5,
      ease: "power1.out",
      // duration:3
    })

      .to(chars, {
        color: "#faa307",
        stagger: 0.5,
        duration: 1,
      })

      .to(containerRef.current, { yPercent: -100 });

    // Cleanup function
    return () => {
      if (mySplit) mySplit.revert();
    };
  }, []);

  return (
    <div className="font-[Syncopate] font-bold">
      <div className="relative">
        {/* Hero Section */}
        <div
          className="h-[100svh] w-full relative overflow-hidden "
          ref={containerRef}
        >
          {/* Background Image */}
          <img
            src="p3.jpg"
            alt="Hero background"
            className="w-full h-full object-cover absolute inset-0 z-10"
            ref={imgRef}
          />

          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-black/30 z-10"></div>

          {/* Text Content */}
          <div className="flex items-center justify-center w-full h-full z-20 relative px-4 sm:px-6 md:px-8">
            <h1
              ref={h1Ref}
              className="uppercase split text-white text-center text-[2rem] sm:text-[2.5rem] md:text-[3.5rem] lg:text-[5rem] xl:text-[6rem] leading-tight overflow-hidden"
            >
              Assalamu 
              Alaikum
            </h1>
          </div>
        </div>

        <AboutMe />
        
      </div>
    </div>
  );
}
