import React, { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap';

function Practice1() {
    const containerRef = useRef();
    const firstBox = useRef();
    const secondBox = useRef();
    const thirdBox = useRef();
    useLayoutEffect(()=>{
        const tl = gsap.timeline();

        tl
        .fromTo(
            firstBox.current,
            {x:0,opacity:0},   
            {x:300,opacity:1,duration:1}   
        )
        .fromTo(
            secondBox.current,
            {y:0},   
            {y:-300,duration:1}   
        )
        .fromTo(
            thirdBox.current,
            {scale:0.5},
            {scale:1,rotate:360,duration:1}   
        )
    })
  return (
    <div className='flex justify-center items-center w-screen h-screen' ref={containerRef}>
        <div className='w-12 h-12 bg-red-400' ref={firstBox}></div>
        <div className='w-12 h-12 bg-green-500' ref={secondBox}></div>
        <div className='w-12 h-12 bg-blue-600' ref={thirdBox}></div>
    </div>
  )
}

export default Practice1