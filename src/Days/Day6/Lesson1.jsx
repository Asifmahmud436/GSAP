import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Lesson1() {
  const box1 = useRef(null);
  const box2 = useRef(null);
  const box3 = useRef(null);

  useEffect(() => {
    // Box 1: Fade in from left
    gsap.from(box1.current, {
      x: -200,
      opacity: 0,
      duration: 1.5,
      scrollTrigger: {
        trigger: box1.current,
        start: "top 80%",
        end: "top 30%",
        toggleActions: "restart none none reset",
        scrub:true
      },
    });

    // Box 2: Scale up with scrub
    gsap.to(box2.current, {
      scale: 1.2,
      scrollTrigger: {
        trigger: box2.current,
        start: "top center",
        end: "bottom center",
        scrub: true,
        toggleActions: "restart none none reset",
      },
    });

    // Box 3: Rotate with reverse on scroll up
    gsap.fromTo(
      box3.current,
      { rotate: 0 },
      {
        rotate: 270,
        duration: 1,
        scrollTrigger: {
          trigger: box3.current,
          start: "top 70%",
          end: "top 30%",
          toggleActions: "restart none none reverse",
          markers:true
        },
      }
    );
  }, []);

  return (
    <div className="space-y-40 p-10 bg-white text-white min-h-screen">
        <div className="h-screen"></div>
      <section className="h-screen flex items-center justify-center">
        <div
          ref={box1}
          className="w-40 h-40 bg-pink-500 rounded-xl shadow-lg"
        >
          Fade & Slide
        </div>
      </section>

      <section className="h-screen flex items-center justify-center">
        <div
          ref={box2}
          className="w-40 h-40 bg-green-500 rounded-xl shadow-lg"
        >
          Scale on Scroll
        </div>
      </section>

      <section className="h-screen flex items-center justify-center">
        <div
          ref={box3}
          className="w-40 h-40 bg-blue-500 rounded-xl shadow-lg"
        >
          Rotate
        </div>
      </section>
    </div>
  );
}

export default Lesson1;
