import { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function Challenge5() {
  const containerRef = useRef(null);
  const circleRefs = useRef([]);
  const [play, setPlay] = useState(false);

  // Add elements to array ref
  const addToRefs = (el) => {
    if (el && !circleRefs.current.includes(el)) {
      circleRefs.current.push(el);
    }
  };

  useLayoutEffect(() => {
    const radius = 100;
    const angleStep = (2 * Math.PI) / circleRefs.current.length;
  
    circleRefs.current.forEach((el, index) => {
      const angle = index * angleStep;
      const x = radius * Math.cos(angle);
      const y = radius * Math.sin(angle);
      gsap.set(el, { x, y });
    });
  
    let tl;
    if (play) {
      tl = gsap.timeline();
      tl.to(containerRef.current, {
        rotate: 360,
        transformOrigin: "center center",
        duration: 5,
        ease: "linear",
        repeat: -1,
      });
    }
  
    return () => tl?.kill();
  }, [play]);
  

  return (
    <>
      <div
        ref={containerRef}
        className="relative w-[300px] h-[300px] border border-white flex items-center justify-center"

      >
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            ref={addToRefs}
            className="box w-14 h-14 bg-green-600 absolute rounded-full"
          />
        ))}
      </div>
      <div className="text-center text-white">
        <button
          className="p-3 rounded-md font-semibold bg-blue-600 shadow-lg"
          onClick={() => setPlay((prev) => !prev)}
        >
          {play ? "Stop" : "Play"}
        </button>
      </div>
    </>
  );
}
