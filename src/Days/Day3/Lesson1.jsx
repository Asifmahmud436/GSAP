import gsap from "gsap";
import { useRef, useLayoutEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function ChallengeX() {

  
  const pinSectionRef = useRef(null);
  const progressBarRef = useRef(null);

  useLayoutEffect(() => {
    gsap.to(progressBarRef.current, {
      width: "100%",
      ease: "none",
      scrollTrigger: {
        trigger: pinSectionRef.current,
        start: "top top",
        end: "+=500", // কত scroll করলে শেষ
        scrub: true,
        pin: true,
        markers: true,
      },
    });
  }, []);
  return (
    <>
      <div className="h-screen bg-slate-100">Intro Section</div>

      <div
        ref={pinSectionRef}
        className="h-[100vh] bg-white relative flex items-center justify-center"
      >
        <div className="w-[80%] h-[20px] bg-gray-300 rounded overflow-hidden">
          <div className="h-full bg-blue-500" ref={progressBarRef}></div>
        </div>
      </div>

      <div className="h-screen bg-slate-100">Outro Section</div>
    </>
  );
}
