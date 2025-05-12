import React from 'react'
import gsap from 'gsap'
import { useLayoutEffect } from 'react'
function FreeStyle() {
    useLayoutEffect(()=>{
        gsap.fromTo(
            '.header-T > h1',
            {scaleX:0},
            {scaleX:1,ease:'power3.inOut',duration:3,stagger:0.3}
        )
    })
  return (
    <div className='header-T space-y-3 h-screen bg-black flex flex-col  items-center pt-6'>
        <h1 className='w-3/4 h-[1px] bg-white rounded-xl'></h1>
        <h1 className='w-3/4 h-[1px] bg-white rounded-xl'></h1>
        <h1 className='w-3/4 h-[1px] bg-white rounded-xl'></h1>
        <h1 className='w-3/4 h-[1px] bg-white rounded-xl'></h1>
        <h1 className='w-3/4 h-[1px] bg-white rounded-xl'></h1>
        <h1 className='w-3/4 h-[1px] bg-white rounded-xl'></h1>
        <h1 className='w-3/4 h-[1px] bg-white rounded-xl'></h1>
        
    </div>
  )
}

export default FreeStyle