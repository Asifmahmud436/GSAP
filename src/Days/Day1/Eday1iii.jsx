import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Eday1iii() {
  const boxRef = useRef(null);
  useEffect(() => {
    gsap.fromTo(
      boxRef.current,
      { opacity: 0, scale: 0.3, rotation: 0 },
      {
        opacity: 1,
        scale: 1,
        rotation: 360,
        scrollTrigger: {
          trigger: boxRef.current,
          start: "top 80%",
          end: "top 30%",
          toggleActions: "play none none reverse",
          scrub: true,
          stagger:0.2
        },
      }
    );
  }, []);
  return (
    <>
      <div className="h-screen" />
      <div
        className="w-64 h-64 bg-green-600 text-white text-center flex items-center justify-center shadow-2xl"
        ref={boxRef}
      >
        Animated box
      </div>
      <div className="h-screen" />
    </>
  );
}

export default Eday1iii;
