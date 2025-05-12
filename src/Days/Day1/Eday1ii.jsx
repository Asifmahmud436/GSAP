import React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useEffect } from "react";
gsap.registerPlugin(ScrollTrigger);

function Eday1ii() {
  const boxRef1 = useRef(null);
  const boxRef2 = useRef(null);
  const boxRef3 = useRef(null);
  useEffect(() => {
    gsap.fromTo(
      boxRef1.current,
      { y: 100, opacity: 0, scale: 0.5 },
      {
        scrollTrigger: {
          trigger: boxRef1.current,
          start: "top 80%",
          end:"top 50%",
          toggleActions: "play none none reverse",
          scrub:true,
        },
        y: 0,
        opacity: 1,
        scale: 1,
      }
    );
    gsap.fromTo(
      boxRef2.current,
      { y: 100, scale: 0.5, opacity: 0 },
      {
        scrollTrigger: {
          trigger: boxRef2.current,
          start: "top 80%",
          end:"top 50%",
          toggleActions: "play none none reverse",
          scrub:true,
        },
        y: 0,
        opacity: 1,
        scale: 1,
      }
    );
    gsap.fromTo(
      boxRef3.current,
      { y: 100, opacity: 0, scale: 0.5 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        scrollTrigger: {
          trigger: boxRef3.current,
          start: "top 80%",
          end:"top 50%",
          toggleActions: "play none none reverse",
        //   scrub:true,
        },
      }
    );
  }, []);
  return (
    <div className="p-6">
      <div className="h-dvh" />
      <div className="text-3xl h-64 bg-red-500 w-64 shadow-lg" ref={boxRef1} />
      <div className="h-dvh" />
      <div
        className="text-3xl h-64 bg- w-64 bg-green-500 shadow-lg"
        ref={boxRef2}
      />
      <div className="h-dvh" />
      <div
        className="text-3xl h-64 bg- w-64 bg-blue-500 shadow-lg"
        ref={boxRef3}
      />
      <div className="h-dvh" />
    </div>
  );
}

export default Eday1ii;
