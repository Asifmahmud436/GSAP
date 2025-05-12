import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Exam1() {
  const containerRef = useRef();
  const headerRef = useRef();
  const imgRef = useRef();
  const pRef = useRef();

  useLayoutEffect(() => {
    gsap.fromTo(
      imgRef.current,
      { scale: 1 },
      {
        scale: 1.5,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          pin: true,
          scrub: true,
          markers: true,
          toggleActions:"play none none reverse"
        },
      }
    );

    gsap.from(headerRef.current, {
      opacity: 0,
      y: -50,
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top center",
        end: "top top",
        scrub: true,
      },
    });

    gsap.from(pRef.current, {
      opacity: 0,
      y: 100,
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top center",
        end: "bottom center",
        scrub: true,
      },
    });
  }, []);

  return (
    <div className="bg-gray-900 text-white">
      {/* Pinned Hero Section */}
      <div
        ref={containerRef}
        className="min-h-screen flex flex-col items-center justify-center space-y-12 p-12"
      >
        {/* Image */}
        <div
          ref={imgRef}
          className="w-[400px] h-[400px] overflow-hidden rounded-2xl shadow-lg"
        >
          <img
            src="./dp.jpg"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text */}
        <div className="text-center max-w-2xl">
          <h1
            ref={headerRef}
            className="text-5xl font-bold tracking-wide mb-8"
          >
            This is the Hero Title
          </h1>
          <p ref={pRef} className="text-lg leading-relaxed text-gray-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
            aperiam sit adipisci, reiciendis quaerat voluptate quae cumque
            suscipit ut in dicta tempore officia eligendi saepe obcaecati
            beatae totam consequatur similique at cum. Nihil iusto repellat
            ullam perferendis aspernatur quae nostrum?
          </p>
        </div>
      </div>

      {/* Next Section */}
      <div className="h-screen flex items-center justify-center text-3xl font-semibold">
        Random content after pinned section
      </div>
    </div>
  );
}
