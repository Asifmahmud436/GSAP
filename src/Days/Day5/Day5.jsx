"use client"

import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useLayoutEffect, useRef } from "react"
gsap.registerPlugin(ScrollTrigger)

export default function Day5() {
  const wrapperRef = useRef()
  const sectionRef = useRef()

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Calculate the width of the horizontal content
      // 4 slides at 100vw each = 400vw - 100vw (viewport) = 300vw to scroll
      const sections = gsap.utils.toArray(".horizontal-wrapper > div")

      const horizontal = gsap.to(wrapperRef.current, {
        xPercent: -100 * (sections.length - 1), // Move exactly the right amount
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: () => `+=${sectionRef.current.offsetWidth}`, // Dynamic end based on actual width
          scrub: true,
          pin: true,
          markers: true,
          anticipatePin: 1,
          invalidateOnRefresh: true, // Recalculate on window resize
        },
      })

      sections.forEach((slide) => {
        gsap.from(slide, {
          opacity: 0,
          scale: 0.9,
          scrollTrigger: {
            trigger: slide,
            containerAnimation: horizontal,
            start: "left center",
            toggleActions: "play none none reverse",
          },
        })
      })
      const slides = gsap.utils.toArray('.slide')
      gsap.from()
      slides.forEach((slide)=>{
        const title = slide.querySelector('h2')
        const desc = slide.querySelector('p')

        gsap.from(title,{
            y:50,
            opacity:0,
            duration:1,
            scrollTrigger:{
                trigger:slide,
                containerAnimation:horizontal,
                start:"left center"
            }
        })
        gsap.from(desc,{
            opacity:0,
            delay:0.3,
            duration:1,
            scrollTrigger:{
                trigger:slide,
                containerAnimation:horizontal,
                start: "left center"
            }
        })
      })
    })

    return () => ctx.revert() // Clean up all animations
  }, [])

  return (
    <div>
      {/* section 1 */}
      <section className="h-screen bg-gray-900 flex items-center justify-center text-5xl font-bold">Welcome</section>

      {/* section 2 */}
      <section className="h-screen bg-blue-800 flex items-center justify-center text-5xl font-bold">About</section>

      {/* horizontal scroll section */}
      <section ref={sectionRef} className="horizontal-section relative h-screen bg-black overflow-hidden">
        <div ref={wrapperRef} className="horizontal-wrapper flex w-[400vw] h-full">
          <div className="w-screen h-full flex items-center justify-center bg-red-600 slide">
            <h2 className="text-5xl font-bold mb-4">Slide X</h2>
            <p className="text-xl">This is a random description</p>
          </div>
          <div className="w-screen h-full flex items-center justify-center bg-green-600 slide">
            <h2 className="text-5xl font-bold mb-4">Slide X</h2>
            <p className="text-xl">This is a random description</p>
          </div>
          <div className="w-screen h-full flex items-center justify-center bg-yellow-600 slide">
            <h2 className="text-5xl font-bold mb-4">Slide X</h2>
            <p className="text-xl">This is a random description</p>
          </div>
          <div className="w-screen h-full flex items-center justify-center bg-purple-600 slide">
            <h2 className="text-5xl font-bold mb-4">Slide X</h2>
            <p className="text-xl">This is a random description</p>
          </div>
        </div>
      </section>

      {/* section 4 */}
      <section className="h-screen bg-gray-700 flex items-center justify-center text-5xl font-bold">Contact</section>
    </div>
  )
}
