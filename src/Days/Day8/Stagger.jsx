import gsap from "gsap"
import { useLayoutEffect } from "react"
import ScrollTrigger from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)

export default function Stagger(){
    useLayoutEffect(()=>{
        gsap.fromTo(".list li",{
            opacity:0,
            y:130,
        },{
            opacity:1,
            y:0,
            duration:0.5,
            stagger:{
                each:0.2,
                from:'end',
                // amount:0.5
            },
            scrollTrigger:{
                trigger:'.list',
                start:"top center",
                toggleActions:"play reverse reset reverse"
            }
        })
    })
    return(
        <>
            <div className="h-screen"/>
            <ul className="list flex gap-6 h-screen justify-center items-center text-5xl">
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
                <li>Item 4</li>
                <li>Item 5</li>
                <li>Item 6</li>
            </ul>
            <div className="h-screen"></div>
        </>
    )
}