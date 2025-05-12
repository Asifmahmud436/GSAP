import gsap from "gsap";
import { useRef,useLayoutEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger)


export default function ChallengeX(){
    const containerRef = useRef(null);
    useLayoutEffect(()=>{
        const boxes = gsap.utils.toArray(".box");
        gsap.to(
            boxes,
            {x:300,
                scrollTrigger:{
                trigger:containerRef.current,
                start:"top 80%",
                end:"top 20%",
                toggleActions: "play true none reverse",
                markers:true,
            }},
            
        )
    },[])
    return(
        <>
            <div className="h-screen"></div>
            {/* three boxes */}
            <div className="flex flex-col gap-4" ref={containerRef}>
                <div className="h-32 w-32 bg-red-600 box"></div>
                <div className="h-32 w-32 bg-green-600 box"></div>
                <div className="h-32 w-32 bg-blue-600 box"></div>
            </div>
            <div className="h-screen"></div>
        </>
    )
}