import React from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useRef, useEffect } from "react";
gsap.registerPlugin(ScrollTrigger);

function Edayv() {
  const boxRef = useRef(null);
  useEffect(() => {
    const items = gsap.utils.toArray('.box');
    
    gsap.fromTo(
        items,
        { y: 100, opacity: 0 },
        { y: 0, 
            opacity: 1,
            stagger:0.2, 
            scrollTrigger: {
            trigger:boxRef.current,
            end:"top 40%",
            toggleActions:"play none none reverse",
            scrub:true,   
        } ,
        duration:1,}
      );
    
  }, []);
  return (
    <div>
      <div className="h-screen"></div>
      <div className="container" ref={boxRef}>
        <div className="box bg-red-500 w-32 h-32 m-6"></div>
        <div className="box bg-red-500 w-32 h-32 m-6"></div>
        <div className="box bg-red-500 w-32 h-32 m-6"></div>
        <div className="box bg-red-500 w-32 h-32 m-6"></div>
        <div className="box bg-red-500 w-32 h-32 m-6"></div>
      </div>
      <div className="h-screen"></div>
    </div>
  );
}

export default Edayv;
