"use client"

import { useRef, useLayoutEffect } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import SplitText from "gsap/SplitText"
import KnightModel from "../Day9/KnightModel"
import Environment from "../Day9/Environment"
import { FaArrowDown } from "react-icons/fa"

gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin(SplitText)

function AboutMe() {
  const headerRef = useRef()
  const pRef = useRef()
  const containerRef = useRef()
  const aiRef = useRef()
  const imgRef1 = useRef()
  const imgRef2 = useRef()
  const iconRef = useRef()

  useLayoutEffect(() => {
    const splitText = new SplitText(headerRef.current, { type: "words" })
    const myText = splitText.words
    const splitText2 = new SplitText(pRef.current, { type: "chars" })
    const myText2 = splitText2.chars
    const tl = gsap.timeline()

    tl.from(myText, {
      yPercent: 130,
      stagger: 0.2,
      ease: "power1.out",
      delay: 2,
      scrollTrigger: {
        trigger: containerRef.current,
        toggleActions: "play none none reverse",
        start: "top center",
      },
    })
      .from(myText2, {
        opacity: 0,
        duration: 2,
      })
      .to(myText2, {
        css: {
          color: "lime",
          fontWeight: 900,
        },
        stagger: 0.1,
        delay: 1,
      })

    const sections = gsap.utils.toArray(".meSection")

    sections.forEach((section) =>
      ScrollTrigger.create({
        trigger: section,
        start: "top top",
        end: "+=50000",
        pin: true,
        pinSpacing: false,
      }),
    )

    gsap.fromTo(iconRef.current, { y: 0 }, { y: -10, repeat: -1, yoyo: true })

    gsap.fromTo(
      aiRef.current,
      { xPercent: +100 },
      {
        xPercent: -120,
        duration: 12,
        scrollTrigger: {
          trigger: aiRef.current,
          start: "top bottom",
        },
      },
    )

    gsap.fromTo(
      imgRef1.current,
      { y: 0 },
      {
        y: -100,
        scrollTrigger: {
          trigger: imgRef1.current,
          start: "top top",
          end: "+=500",
          scrub: true,
          toggleActions: "play none none reverse",
        },
      },
    )

    gsap.fromTo(
      imgRef2.current,
      { y: 0 },
      {
        y: -100,
        scrollTrigger: {
          trigger: imgRef2.current,
          start: "top top",
          end: "+=500",
          scrub: true,
          toggleActions: "play none none reverse",
        },
      },
    )

    return () => {
      if (splitText) splitText.revert()
      ScrollTrigger.getAll().forEach((t) => t.kill())
    }
  }, [])

  return (
    <div>
      <div
        className="w-full overflow-hidden min-h-screen font-[Syncopate] bg-black px-4 md:p-8 flex flex-col lg:flex-row justify-between meSection"
        ref={containerRef}
      >
        <div className="flex-grow mb-8 lg:mb-0">
          <div className="uppercase font-semibold text-white w-full mx-auto" ref={headerRef}>
            <div className="text-lg md:text-xl leading-5">I am</div>
            <div className="leading-tight text-white uppercase font-bold text-[2rem] sm:text-[2.5rem] md:text-[3.5rem] lg:text-[5rem] xl:text-[5rem] overflow-hidden w-full">
              Asif Mahmud
            </div>
          </div>

          <div className="w-full">
            <div
              className="text-white w-full md:w-3/4 text-sm sm:text-base md:text-lg font-light leading-5 overflow-hidden font-[Montserrat]"
              ref={pRef}
            >
              I am a fullstack dev. To me, Design is an art. From crafting intuitive user interfaces to building robust
              backend systems, I bring both structure and soul into every line I write. To me, design is more than color
              and layout — it's storytelling, emotion, and purpose. I believe great digital experiences live at the
              intersection of logic and art. Whether it's shaping smooth animations with GSAP, creating seamless APIs
              with Django, or deploying full-scale apps, I aim to make every project meaningful, impactful, and
              beautifully functional. Let's build something that speaks.
            </div>
            <p className="my-4 text-white">
              Scroll Below to see what can i do for you{" "}
              <FaArrowDown className="text-shadow-white mt-3 text-4xl" ref={iconRef} />
            </p>
          </div>
        </div>
        <div className="w-full lg:w-[600px] h-[300px] sm:h-[400px] lg:h-full">
          <KnightModel />
          <h1 className="text-white text-center">Use Mouse to interact</h1>
        </div>
      </div>

      <div className="rounded-lg w-full overflow-hidden min-h-screen font-[Syncopate] bg-white px-4 md:p-8 justify-between meSection">
        <h1 className="text-xl sm:text-2xl">AI integrated apps</h1>
        <div className="relative bg-white">
          <div
            className="w-max absolute text-black top-1/2 left-0 transform -translate-y-1/2 text-4xl sm:text-6xl md:text-8xl font-[Montserrat] uppercase z-0 font-bold whitespace-nowrap"
            ref={aiRef}
          >
            These are my fullstack and AI integrated Apps
          </div>

          <div className="relative z-10 pt-[70px] px-2 sm:px-8">
            <div className="flex justify-around flex-col lg:flex-row gap-8">
              <a href="https://bracademic.netlify.app/" target="_blank" className="mx-auto" rel="noreferrer">
                <div className="w-full sm:w-[400px] md:w-[500px] lg:w-[600px] h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] border border-black overflow-hidden">
                  <img src="./project1.png" alt="project 1" className="w-full h-full object-cover" ref={imgRef1} />
                </div>
              </a>

              <a href="https://aisalescoach.netlify.app/" target="_blank" className="mx-auto" rel="noreferrer">
                <div className="w-full sm:w-[400px] md:w-[500px] lg:w-[600px] h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] border border-black overflow-hidden">
                  <img src="./project2.png" alt="project 1" className="w-full h-full object-cover" ref={imgRef2} />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-lg w-full overflow-hidden min-h-screen font-[Syncopate] bg-black px-4 md:p-8 justify-between meSection relative">
        <h1 className="uppercase text-xl sm:text-2xl absolute z-10 text-white">
          Integrate 3d models with React3 Fiber <br />
          <span className="font-semibold text-green-400">(Use Mouse to interract)</span>
        </h1>
        <Environment />
      </div>

      <div className="w-full rounded-lg overflow-hidden min-h-screen font-sans bg-white text-black px-4 md:p-8 meSection">
        <h1 className="text-xl sm:text-2xl font-[Syncopate] max-w-5xl mx-auto">We can work together</h1>
        <div className="max-w-5xl mx-auto my-6 md:my-12 flex flex-col lg:flex-row justify-between gap-8">
          <div className="w-full lg:w-[500px] h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden rounded-md mx-auto">
            <img src="./dp.jpg" alt="profile" className="w-full h-full object-cover" />
          </div>
          <div className="text-lg sm:text-xl md:text-2xl">
            <h1 className="font-semibold text-2xl sm:text-3xl md:text-4xl mb-3">My Stack:</h1>
            <p>
              <span className="text-blue-700 font-semibold">Frontend:</span> React, NextJs
            </p>
            <p>
              <span className="text-blue-700 font-semibold">Backend:</span> Django, DRF
            </p>
            <p>
              <span className="text-blue-700 font-semibold">Animation:</span> GSAP, R3F
            </p>
            <div className="mt-6">
              <h1 className="font-semibold text-xl sm:text-2xl mb-3 mt-6">Contact Me:</h1>
              <p>
                <span className="text-blue-700 font-semibold">Cell:</span> +8801317482129
              </p>
              <p>
                <span className="text-blue-700 font-semibold">Email:</span> safaandsafa4@gmail.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutMe
