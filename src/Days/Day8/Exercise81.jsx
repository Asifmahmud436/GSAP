import gsap from "gsap"
import { useLayoutEffect } from "react"


export default function Exercise81(){
    useLayoutEffect(()=>{
        const ctx = gsap.context(()=>{
            gsap.fromTo(".list div",
            {x:300,opacity:0},
            {x:0,opacity:1,stagger:{
                each:0.2,
                from:"random"
            }}
        )
        })
        return ()=> ctx.revert()
    },[])
    return(
        <>
            <div className="flex flex-col list gap-4">
                <div className="w-20 h-20 border-3 border-blue-700"></div>
                <div className="w-20 h-20 border-3 border-blue-700"></div>
                <div className="w-20 h-20 border-3 border-blue-700"></div>
                <div className="w-20 h-20 border-3 border-blue-700"></div>
                
            </div>
        </>
    )
}