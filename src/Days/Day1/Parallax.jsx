import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger)

function Parallax() {
    const containerRef = useRef(null);
    const imageRef = useRef(null);
    const textRef = useRef(null);

    useEffect(()=>{
        gsap.fromTo(
            imageRef.current,
            {y:0},
            {y:-100,scrollTrigger:{
                trigger:containerRef.current,
                toggleActions:"play none none reverse",
                scrub:true,
                start:"top bottom",
                end:"+=500",
                // pin:true,
                ease:"none"
            }},
        )
        gsap.fromTo(
            textRef.current,
            {opacity:0,y:20},
            {opacity:1,y:0,scrollTrigger:{
                trigger:textRef.current,
                toggleActions:"play none none reverse",
                start:"top 80%",
                end:"top 30%"
                
            }},
        )
    },[])
  return (
    <>
    <div className="h-screen"/>
    <div className="relative min-h-[800px] overflow-hidden mx-auto max-w-4xl" ref={containerRef}>

      <img
        src="/bannerImg.png"
        className="absolute top-0 left-0 w-full h-full object-cover"
        ref={imageRef}
      />
      <h2
        className="relative z-10 text-white text-4xl text-center mt-40"
        ref={textRef}
      >
        Welcome to the Future
      </h2>
    </div>
    <div className="h-screen"/>
    </>
  );
}

export default Parallax;
