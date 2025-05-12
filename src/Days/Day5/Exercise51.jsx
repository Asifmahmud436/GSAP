import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function Exercise1() {
  const containerRef = useRef();
  const firstBox = useRef();
  const secondBox = useRef();
  const thirdBox = useRef();
  useLayoutEffect(() => {
    const ctx = gsap.context(()=>{
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger:containerRef.current,
                scrub: false,
                start: "top 20%",
                toggleActions: "play none none reverse",
              },
        });
    
        tl.fromTo(
          firstBox.current,
          { x: 0, opacity: 0 },
          {
            x: 300,
            opacity: 1,
            duration: 1,
            
          }
        )
          .fromTo(
            secondBox.current,
            { y: 0 },
            {
              y: -300,
              duration: 1,
              backgroundColor:'purple',
              
            }
          )
          .fromTo(
            thirdBox.current,
            { scale: 0.5 },
            {
              scale: 1,
              rotate: 360,
              duration: 1,
              
            }
          );
    },containerRef);
    return ()=> ctx.revert();
  },[]);
  return (
    <div>
      <div className="h-screen"></div>
      <div
        className="flex justify-center items-center w-screen h-screen"
        ref={containerRef}
      >
        <div className="w-12 h-12 bg-red-400" ref={firstBox}></div>
        <div className="w-12 h-12 bg-green-500" ref={secondBox}></div>
        <div className="w-12 h-12 bg-blue-600" ref={thirdBox}></div>
      </div>
    </div>
  );
}

export default Exercise1;
