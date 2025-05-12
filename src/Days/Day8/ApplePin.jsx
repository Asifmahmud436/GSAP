import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useLayoutEffect } from "react";
gsap.registerPlugin(ScrollTrigger);

export default function ApplePin() {
  useLayoutEffect(() => {

    const sections = gsap.utils.toArray(".panel");

    sections.forEach((section, i) => {
      ScrollTrigger.create({
        trigger: section,
        start: "top top",
        end: "+=100%",
        pin: true,
        pinSpacing: true, // Adds spacing to "push" content
        id: `panel-${i}`,
      });
    });

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  return (
    <div>
      <div className="panel h-screen bg-red-600">Section 1 (Pinned)</div>
      <div className="panel h-screen bg-blue-600">Section 2 (Pinned)</div>
      <div className="panel h-screen bg-green-600">Section 3 (Pinned)</div>
    </div>
  );
}
