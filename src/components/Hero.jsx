import { useEffect, useRef } from "react";
import gsap from "gsap";
import SplitType from "split-type";

const Hero = () => {
  const headingRef = useRef(null);
  const paragraphRef = useRef(null);
  const imageRef = useRef(null);

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
      delay: 2.2,
    });

    // Animate image
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

  return (
    <section
      id="hero"
      className="relative h-screen w-full flex flex-col justify-between items-center text-white bg-gradient-to-b from-black via-[#0d0d1c] to-[#180303] overflow-hidden px-6 pt-24"
    >
      {/* Text Section */}
      <div className="z-10 text-center">
        <h1
          ref={headingRef}
          className="text-4xl md:text-7xl font-extrabold font-heading leading-tight tracking-tight"
        >
          Welcome to DeadpoolVerse
        </h1>

        <p
          ref={paragraphRef}
          className="mt-6 text-lg md:text-xl max-w-xl mx-auto font-[Inter] text-white/80"
        >
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
    </section>
  );
};

export default Hero;
