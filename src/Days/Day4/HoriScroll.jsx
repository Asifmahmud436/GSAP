import React, { useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function HoriScroll() {
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
       gsap.to('.horizontal-wrapper', {
        xPercent: -300,
        ease: 'none',
        scrollTrigger: {
          trigger: '.horizontal-wrapper',
          start: 'top top',
          end: () => '+=10000',
          scrub: true,
          pin: true,
          anticipatePin: 1,
        },
      });

      
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      <div className="h-screen relative bg-gray-900 text-white">
        <div className="flex horizontal-wrapper h-full" style={{ width: '100vw' }}>
          <div className="w-screen h-screen flex items-center justify-center text-5xl font-bold bg-gray-800 border-r-2 border-black">
            Panel 1
          </div>
          <div className="w-screen h-screen flex items-center justify-center text-5xl font-bold bg-red-700 border-r-2 border-black">
            Panel 2
          </div>
          <div className="w-screen h-screen flex items-center justify-center text-5xl font-bold bg-blue-600 border-r-2 border-black">
            Panel 3
          </div>
          <div className="w-screen h-screen flex items-center justify-center text-5xl font-bold bg-lime-500 border-r-2 border-black">
            Panel 4
          </div>
        </div>
      </div>

      {/* Scroll space to allow animation */}
      {/* <div className="h-[100vh] bg-black flex items-center justify-center text-white">
        Scroll finished 🖤
      </div> */}
    </>
  );
}

export default HoriScroll;
