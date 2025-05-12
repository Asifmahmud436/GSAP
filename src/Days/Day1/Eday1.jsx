import { useEffect, useRef } from "react";
import gsap from "gsap";

function Eday1() {
  const headRef = useRef(null);
  const buttonRef = useRef(null);
  const timelineRef = useRef(null);

  useEffect(() => {
    if (!timelineRef.current) {
      timelineRef.current = gsap
        .timeline({repeat:-1})
        .fromTo(
          headRef.current,
          { x: -300, opacity: 0},
          { x: 0, opacity: 1, duration: 1,rotation:360 },
          
          
        )
        .fromTo(
            buttonRef.current, 
            { scale: 0 }, 
            { scale: 1, duration: 1 }
        );
    }
  }, []);

  return (
    <div className="text-center flex justify-center gap-4 m-3">
      <div className="text-3xl" ref={headRef}>
        Eday1
      </div>
      <button className="rounded-md p-2 bg-gray-500" ref={buttonRef}>
        Salam
      </button>
    </div>
  );
}

export default Eday1;
