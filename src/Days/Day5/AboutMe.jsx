import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitText from "gsap/SplitText";
import KnightModel from "../Day9/KnightModel";
import Environment from "../Day9/Environment";
import { FaArrowDown } from "react-icons/fa";
import ScrollSmoother from "gsap/ScrollSmoother";
import {  Database, Layout, Server } from "lucide-react"

gsap.registerPlugin(SplitText, ScrollTrigger, ScrollSmoother);

function AboutMe() {
  const headerRef = useRef();
  const pRef = useRef();
  const containerRef = useRef();
  const aiRef = useRef();
  const imgRef1 = useRef();
  const imgRef2 = useRef();
  const imgRef3 = useRef();
  const iconRef = useRef();
  const smoothWrapperRef = useRef();
  const smoothContentRef = useRef();

  useLayoutEffect(() => {
    const smoother = ScrollSmoother.create({
      wrapper: smoothWrapperRef.current,
      content: smoothContentRef.current,
      smooth: 1.5,
      effects: true,
    });

    const splitText = new SplitText(headerRef.current, { type: "words" });
    const myText = splitText.words;
    const splitText2 = new SplitText(pRef.current, { type: "chars" });
    const myText2 = splitText2.chars;
    const tl = gsap.timeline();

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
      });

    const sections = gsap.utils.toArray(".meSection");

    sections.forEach((section) =>
      ScrollTrigger.create({
        trigger: section,
        start: "top top",
        end: "+=50000",
        pin: true,
        pinSpacing: false,
      })
    );

    gsap.fromTo(iconRef.current, { y: 0 }, { y: -10, repeat: -1, yoyo: true });

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
      }
    );

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
      }
    );

    gsap.fromTo(
      imgRef3.current,
      { y: 0 },
      {
        y: -100,
        scrollTrigger: {
          trigger: imgRef3.current,
          start: "top bottom",
          end: "+=500",
          scrub: true,
          toggleActions: "play none none reverse",
        },
      }
    );
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
      }
    );

    return () => {
      if (splitText) splitText.revert();
      if (smoother) smoother.kill();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <div id="smooth-wrapper" ref={smoothWrapperRef}>
      <div id="smooth-content" ref={smoothContentRef}>
        <div
          className="w-full overflow-hidden min-h-screen font-[Syncopate] bg-black px-4 md:p-8 flex flex-col lg:flex-row justify-between meSection"
          ref={containerRef}
        >
          <div className="flex-grow mb-8 lg:mb-0">
            <div
              className="uppercase font-semibold text-white w-full mx-auto"
              ref={headerRef}
            >
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
                I am a fullstack dev. To me, Design is an art. From crafting
                intuitive user interfaces to building robust backend systems, I
                bring both structure and soul into every line I write. To me,
                design is more than color and layout — it's storytelling,
                emotion, and purpose. I believe great digital experiences live
                at the intersection of logic and art. Whether it's shaping
                smooth animations with GSAP, creating seamless APIs with Django,
                or deploying full-scale apps, I aim to make every project
                meaningful, impactful, and beautifully functional. Let's build
                something that speaks.
              </div>
              <p className="my-4 text-white">
                You can move the knight on the right side. <br /> Scroll Below
                to see what can i do for you{" "}
                <FaArrowDown
                  className="text-shadow-white mt-3 text-4xl"
                  ref={iconRef}
                />
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
                <a
                  href="https://bracademic.netlify.app/"
                  target="_blank"
                  className="mx-auto"
                  rel="noreferrer"
                >
                  <div className="w-full sm:w-[400px] md:w-[500px] lg:w-[600px] h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] border border-black overflow-hidden">
                    <img
                      src="./project1.png"
                      alt="project 1"
                      className="w-full h-full object-cover"
                      ref={imgRef1}
                    />
                  </div>
                </a>

                <a
                  href="https://aisalescoach.netlify.app/"
                  target="_blank"
                  className="mx-auto"
                  rel="noreferrer"
                >
                  <div className="w-full sm:w-[400px] md:w-[500px] lg:w-[600px] h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] border border-black overflow-hidden">
                    <img
                      src="./project2.png"
                      alt="project 1"
                      className="w-full h-full object-cover"
                      ref={imgRef2}
                    />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-lg w-full overflow-hidden min-h-screen font-[Syncopate] bg-black px-4 md:p-8 justify-between meSection relative">
          <h1 className="uppercase text-xl sm:text-2xl absolute z-10 text-white">
            Integrate 3d models with React3 Fiber <br />
            <span className="font-semibold text-green-400">
              (Use Mouse to interract)
            </span>
          </h1>
          <Environment />
        </div>

        {/* hire me section */}
        <div className="w-full rounded-lg overflow-hidden lg:min-h-screen bg-black text-[#B5B5B5] px-4 py-8  md:p-8 lg:items-center meSection">
          <h1 className="text-xl sm:text-2xl font-[Syncopate] uppercase max-w-5xl mx-auto text-center">
            We can work together
          </h1>

          <div className="max-w-6xl mx-auto my-6 md:my-12 flex flex-col lg:flex-row justify-between gap-16">
            {/* Profile Image */}
            <div className="w-full lg:w-[40%] h-[300px] sm:h-[400px] md:h-[500px] lg:h-auto overflow-hidden rounded-md mx-auto">
              <img
                src="./dp.jpg"
                alt="profile"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Tech Stack Section */}
            <div className="w-full lg:w-[80%] text-lg sm:text-xl">
              <h1 className="text-xl uppercase mb-6 font-[Syncopate]">
                My Stack:
              </h1>

              {/* Frontend Stack */}
              <div className="mb-8 flex items-start justify-between">
                <div className="uppercase text-2xl md:text-3xl mb-4 flex items-center gap-2">
                  <Layout className="w-6 h-6" /> Frontend
                </div>
                <div className="font-[Roboto_flex] flex flex-wrap items-center gap-4 md:gap-6 w-[300px]">
                  <div className="flex gap-2 items-center font-light">
                    <img
                      src="./js.webp"
                      className="w-6 h-6 md:w-8 md:h-8"
                      alt="JavaScript"
                    />
                    <span className="text-base md:text-lg">Javascript</span>
                  </div>
                  <div className="flex gap-2 items-center font-light">
                    <img
                      src="./tailwind.svg"
                      className="w-6 h-6 md:w-8 md:h-8"
                      alt="Tailwind CSS"
                    />
                    <span className="text-base md:text-lg">TailwindCSS</span>
                  </div>
                  <div className="flex gap-2 items-center font-light">
                    <img
                      src="./bootstrap.svg"
                      className="w-6 h-6 md:w-8 md:h-8"
                      alt="Bootstrap"
                    />
                    <span className="text-base md:text-lg">Bootstrap</span>
                  </div>
                  <div className="flex gap-2 items-center font-light">
                    <img
                      src="./react.svg"
                      className="w-6 h-6 md:w-8 md:h-8"
                      alt="React"
                    />
                    <span className="text-base md:text-lg">React</span>
                  </div>
                  <div className="flex gap-2 items-center font-light">
                    <img
                      src="./nextjs.png"
                      className="w-6 h-6 md:w-8 md:h-8 rounded-xl"
                      alt="Next.js"
                    />
                    <span className="text-base md:text-lg">NextJS</span>
                  </div>
                  <div className="flex gap-2 items-center font-light">
                    <img
                      src="./gsap.svg"
                      className="w-6 h-6 md:w-8 md:h-8 rounded-xl"
                      alt="GSAP"
                    />
                    <span className="text-base md:text-lg">GSAP</span>
                  </div>
                </div>
              </div>

              {/* Backend Stack */}
              <div className="mb-8 flex items-start justify-between">
                <div className="uppercase text-2xl md:text-3xl mb-4 flex items-center gap-2">
                  <Server className="w-6 h-6" /> Backend
                </div>
                <div className="font-[Roboto_flex] flex flex-wrap items-center gap-4 md:gap-6 w-[300px]">
                  <div className="flex gap-2 items-center font-light">
                    <img
                      src="./python.svg"
                      className="w-6 h-6 md:w-8 md:h-8"
                      alt="Node.js"
                    />
                    <span className="text-base md:text-lg">Python</span>
                  </div>
                  <div className="flex gap-2 items-center font-light">
                    <img
                      src="./django.svg"
                      className="w-6 h-6 md:w-8 md:h-8 rounded-xl"
                      alt="Next.js API"
                    />
                    <span className="text-base md:text-lg">Django</span>
                  </div>
                  <div className="flex gap-2 items-center font-light">
                    <img
                      src="./django.svg"
                      className="w-6 h-6 md:w-8 md:h-8 rounded-xl"
                      alt="Next.js API"
                    />
                    <span className="text-base md:text-lg">DRF</span>
                  </div>
                  {/* Add more backend technologies as needed */}
                </div>
              </div>

              {/* Database Stack */}
              <div className="mb-8 flex items-start justify-between">
                <div className="uppercase text-2xl md:text-3xl mb-4 flex items-center gap-2">
                  <Database className="w-6 h-6" /> Database
                </div>
                <div className="font-[Roboto_flex] flex flex-wrap items-center gap-4 md:gap-6 w-[300px]">
                  <div className="flex gap-2 items-center font-light">
                    <img
                      src="./mysql.png"
                      className="w-6 h-6 md:w-8 md:h-8 rounded-xl"
                      alt="Next.js API"
                    />
                    <span className="text-base md:text-lg">MySql</span>
                  </div>
                  <div className="flex gap-2 items-center font-light">
                    <img
                      src="./postgresql.svg"
                      className="w-6 h-6 md:w-8 md:h-8 rounded-xl"
                      alt="Next.js API"
                    />
                    <span className="text-base md:text-lg">PostgreSql</span>
                  </div>
                  <div className="flex gap-2 items-center font-light">
                    <img
                      src="./sqlite.svg"
                      className="w-6 h-6 md:w-8 md:h-8 rounded-xl"
                      alt="Next.js API"
                    />
                    <span className="text-base md:text-lg">DBsqlite</span>
                  </div>
                  {/* Add more database technologies as needed */}
                </div>
              </div>

              {/* Contact Information */}
              <div className="mt-8">
                <h1 className="text-xl uppercase mb-3 font-[Syncopate]">
                  Contact Me:
                </h1>
                <p className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 mb-2 justify-between font-[Roboto_flex]">
                  <span className=" text-base">Cell</span>
                  <span className="text-base md:text-lg font-light w-[300px] text-start">+8801317482129</span>
                </p>
                <p className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 justify-between font-[Roboto_flex]">
                  <span className="text-base">Email</span>
                  <span className="text-base md:text-lg break-all font-light w-[300px] text-start">
                    safaandsafa4@gmail.com
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
