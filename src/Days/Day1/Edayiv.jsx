import { useRef, useEffect } from "react"
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function Edayiv() {
    const boxRef = useRef(null);
    useEffect(()=>{
        gsap.fromTo(
            boxRef.current,
            {x:300,opacity:0},
            {x:0,opacity:1,
                scrollTrigger:{
                    trigger:boxRef.current,
                    start:"top 85%",
                    end:"top 40%",
                    toggleActions:"play none none reverse",
                    scrub:true
                }
            },
        )
    },[])
  return (
    <div>
        <div className="h-screen"/>
        <div className="text-4xl text-center" ref={boxRef}>
            Hello from Challenge 2!
        </div>
        <div className="h-screen"/>
    </div>
  )
}

export default Edayiv