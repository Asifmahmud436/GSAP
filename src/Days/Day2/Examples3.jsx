import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";

function ExamplesIII() {
  const box1 = useRef(null);
  const box2 = useRef(null);
  const box3 = useRef(null);

  useLayoutEffect(() => {
    const tl = gsap.timeline();

    tl.addLabel("start")
        .to(box1.current, { x: 100, duration: 1 },"start")
      .to(box2.current, {y: 100,duration: 1,},"start+=0.5")
      .to(box3.current, {rotation:360,duration: 1},"start+=1");
  });
  return (
    <div className="flex gap-4 justify-center items-center h-screen">
      <div ref={box1} className="w-16 h-16 bg-red-500" />
      <div ref={box2} className="w-16 h-16 bg-green-500" />
      <div ref={box3} className="w-16 h-16 bg-blue-500" />
    </div>
  );
}

export default ExamplesIII;
