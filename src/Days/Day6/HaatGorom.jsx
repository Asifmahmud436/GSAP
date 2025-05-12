import gsap from "gsap";
import { useLayoutEffect, useRef } from "react";

export default function HaatGorom() {
  const containerRef = useRef();
  useLayoutEffect(() => {
    const tl = gsap.timeline()
    gsap.set(containerRef.current,{width:"50vw",height:'50vh',margin:"0 auto",justifyContent:"center",placeItems:'center',marginTop:"400px"})
    tl
    .fromTo('.cardEr', {
        y: 100,
        opacity: 0,
      },
      {y:0,opacity:1,ease: "power2.out",stagger:0.5,duration:0.33}
      )
    .to(containerRef.current,{
      css:{
        width:"100vw",
        height:"100vh"
      }
      
    })
    
  }, []); 

  return (
    <div className=" flex overflow-hidden bg-white border-2 border-red-600" ref={containerRef}>
      <div className="w-1/3 h-full bg-black  cardEr"></div>
      <div className="w-1/3 h-full bg-black  cardEr"></div>
      <div className="w-1/3 h-full bg-black cardEr"></div>
    </div>
  );
}
