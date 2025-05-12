import { useRef,useLayoutEffect } from "react";
import gsap from "gsap";


export default function Challenge1(){
    const box1 = useRef(null);
    const box2 = useRef(null);
    const box3 = useRef(null);

    useLayoutEffect(()=>{
        const tl = gsap.timeline();
        tl
            .to(box1.current,{x:150,duration:1})
            .to(box2.current,{y:-150,duration:1})
            .to(box3.current,{rotation:180,duration:1})
    },[])
    return(
        <div className="flex justify-center items-center h-screen gap-4">
            <div className="w-14 h-14 bg-blue-700" ref={box1}/>
            <div className="w-14 h-14 bg-green-700" ref={box2}/>
            <div className="w-14 h-14 bg-orange-700" ref={box3}/>
        </div>
    )
}