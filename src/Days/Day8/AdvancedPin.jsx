import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useLayoutEffect } from "react";
gsap.registerPlugin(ScrollTrigger);

export default function AdvancedPin() {
  useLayoutEffect(() => {
    ScrollTrigger.create({
      trigger: ".section",
      pin: true,
      start: "top top",
      end: "+=100%",
      onEnter: () => gsap.to(".content", { opacity: 1, y: 0 }),
      onLeaveBack: () => gsap.to(".content", { opacity: 0, y: 50 }),
    });
    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  return (
    <div>
      <div className="panel h-screen bg-red-600">
        <div class="content">Your actual content here</div>
      </div>
      <div className="panel h-screen bg-blue-600">
        <div class="content">Your actual content here</div>
      </div>
      <div className="panel h-screen bg-green-600">
        <div class="content">Your actual content here</div>
      </div>
    </div>
  );
}
