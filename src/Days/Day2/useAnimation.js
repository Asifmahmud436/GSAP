import {  useLayoutEffect} from "react";
import gsap from "gsap";

export default function useAnimation(order,box1,box2,box3){
    useLayoutEffect(()=>{
        if(order){
            const tl = gsap.timeline();
            tl.addLabel("intro")
              .to(box1.current, { x: 150, duration: 1 }, "intro")
              .to(box2.current, { y: -150, duration: 1 }, "intro+=0.5")
              .to(box3.current, { rotation: 180, duration: 1 }, "intro+=1");
              return()=> tl.kill();
        }
        else{
            const tl = gsap.timeline();
            tl.addLabel("intro")
              .to(box1.current, { x: 0, duration: 1 }, "intro")
              .to(box2.current, { y: 0, duration: 1 }, "intro+=0.5")
              .to(box3.current, { rotation: -180, duration: 1 }, "intro+=1");
              return()=> tl.kill();
        }
        
    })
    
}