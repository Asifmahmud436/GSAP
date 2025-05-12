// text fade from left to center
import { useRef, useEffect } from "react";
import gsap from "gsap";

export default function Day1(){
    const headRef = useRef(null)
    const buttonRef = useRef(null)
    useEffect(()=>{
        gsap.fromTo(
            headRef.current,
            {x:-400,opacity:0},
            {x:0,opacity:1,duration:1.5,ease:"power3.out"},
        )
        gsap.fromTo(
            buttonRef.current,
            {scale:0},
            {scale:1,duration:1},
        )
    },[])
    return(
        <div className="flex gap-4 justify-center py-2">
            <h1 ref={headRef}
                className="text-3xl text-blue-800 text-center"
            > আসসালামু আলাইকুম 🤍</h1>
            <button ref={buttonRef} className="bg-blue-800 text-white p-2 rounded-md">Salam</button>
        </div>
    )
}