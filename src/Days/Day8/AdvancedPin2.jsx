import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useLayoutEffect } from "react";
gsap.registerPlugin(ScrollTrigger)

export default function AdvancedPin2(){
    useLayoutEffect(()=>{
        const sections = gsap.utils.toArray(".panel")

        sections.forEach((section)=>(
            ScrollTrigger.create({
                trigger:section,
                start:"top top",
                end:"+=200%",
                pin:true,
                pinSpacing:false
            })
        ))

        return ()=> ScrollTrigger.getAll().forEach(t=>t.kill())
    },[])
    return(
        <div>
            <div className="bg-red-500 h-screen panel">Section 1</div>
            <div className="bg-green-500 h-screen panel">Section 2</div>
            <div className="bg-blue-500 h-screen panel">Section 3</div>
        </div>
    )
}