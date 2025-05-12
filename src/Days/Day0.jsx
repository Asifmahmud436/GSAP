import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Day0() {
  const boxRef = useRef(null);

  useEffect(() => {
    gsap.to(boxRef.current, 
      {
      scrollTrigger: {
        trigger: boxRef.current,
        start: "top center",
        toggleActions: "play none none reverse",
      },
      x: 300,
      duration: 2,
    });
  }, []);

  return (
    <div>
      <div style={{ height: "100vh" }} />
      <div
        ref={boxRef}
        style={{
          width: 100,
          height: 100,
          background: "green",
          margin: "0 auto",
        }}
      />
      <div style={{ height: "100vh" }} />
    </div>
  );
}
