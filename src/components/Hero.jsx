import { useEffect, useRef } from "react";
import gsap from "gsap";
import SplitType from "split-type";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(TextPlugin);

const Hero = () => {
  const headingRef = useRef(null);
  const paragraphRef = useRef(null);
  const imageRef = useRef(null);
  const bubbleTextRef = useRef(null);
  const swordRef = useRef(null); // new ref for sword image

  useEffect(() => {
    // Split heading and paragraph
    const headingSplit = new SplitType(headingRef.current, {
      types: "chars, words",
      tagName: "span",
    });

    const paragraphSplit = new SplitType(paragraphRef.current, {
      types: "lines",
      tagName: "span",
    });

    // Animate heading
    gsap.from(headingSplit.chars, {
      y: 100,
      opacity: 0,
      duration: 1.4,
      ease: "power4.out",
      stagger: 0.035,
      delay: 0.2,
    });

    // Animate paragraph lines
    gsap.from(paragraphSplit.lines, {
      opacity: 0,
      y: 40,
      duration: 1,
      ease: "power3.out",
      stagger: 0.1,
      delay: 1.2,
    });

    // Animate main image
    gsap.fromTo(
      imageRef.current,
      { y: 120, opacity: 0, scale: 0.8 },
      {
        y: 0,
        opacity: 1,
        scale: 1.5,
        duration: 1.6,
        ease: "expo.out",
        delay: 1.5,
      }
    );

    // Animate sword image
    gsap.fromTo(
      swordRef.current,
      { x: 100, y: -100, opacity: 0, rotate: 15 },
      {
        x: 0,
        y: 0,
        opacity: 1,
        rotate: 0,
        duration: 1.4,
        ease: "power3.out",
        delay: 1,
      }
    );

    // Parallax movement
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 15;
      const y = (e.clientY / window.innerHeight - 0.5) * 15;
      gsap.to(imageRef.current, {
        x,
        y,
        duration: 0.6,
        ease: "power2.out",
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Typing bubble effect
  useEffect(() => {
    gsap.to(bubbleTextRef.current, {
      text: "Loading... probably better than Wolverine ever did.",
      duration: 3.5,
      delay: 2,
      ease: "none",
    });
  }, []);

  return (
    <section
      id="home"
      className="relative h-screen w-full flex flex-col justify-between items-center text-white bg-gradient-to-b from-black via-[#0d0d1c] to-[#180303] overflow-hidden px-6 pt-24"
    >
      {/* Sword Image Top Right */}
      <img
        ref={swordRef}
        src="/images/sword.png"
        alt="Sword"
        className="hidden md:block absolute top-28 right-18 w-[100px] md:w-[60px] z-20 pointer-events-none"
      />

      {/* Talking Bubble */}
      <div className="hidden md:block  absolute bottom-8 left-8 bg-[#1c1c1c] text-white px-4 py-2 rounded-lg border-2 border-red-600 max-w-xs text-sm font-[Inter] shadow-md z-20">
        <span ref={bubbleTextRef} className="block text-white/90 bubble-text"></span>
      </div>

      {/* Text Section */}
      <div className="z-10 text-center">
        <h1
          ref={headingRef}
          className="text-4xl md:text-8xl font-extrabold font-negra leading-tight tracking-tight"
        >
          Welcome to DeadpoolVerse
        </h1>

        <p
          ref={paragraphRef}
          className="mt-6 text-lg md:text-xl max-w-xl mx-auto font-[Inter] text-white/80"
        >
          <span className="text-[#FF3C3C] font-bold">No heroes.</span>{" "}
          <span className="text-white/90">No rules.</span> <br />
          “Breaking rules, fourth walls, and your expectations — with every shot.”
        </p>
      </div>

      {/* Image Section */}
      <div className="z-10 mb-12">
        <img
          ref={imageRef}
          src="/images/deadpool-image.png"
          alt="Deadpool"
          className="w-[260px] md:w-[380px] mx-auto object-contain pointer-events-none"
        />
      </div>

      {/* Scroll Down Arrow */}
      <a
        href="#neural"
        className="absolute bottom-6 right-6 flex flex-col items-center text-white/70 text-xs hover:text-white transition-colors duration-300 z-20"
      >
        <span className="mb-1">Scroll Down</span>
        <svg
          className="w-5 h-5 animate-bounce"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </a>
    </section>
  );
};

export default Hero;
