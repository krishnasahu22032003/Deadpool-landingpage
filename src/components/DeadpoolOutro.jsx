import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const DeadpoolOutro = () => {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        textRef.current,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1.4,
          ease: "power3.out",
          scrollTrigger: {
            trigger: textRef.current,
            start: "top 90%",
            toggleActions: "play reset play reset",
          },
        }
      );

      gsap.fromTo(
        buttonRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: buttonRef.current,
            start: "top 90%",
            toggleActions: "play reset play reset",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="transmission"
      className="relative w-full bg-gradient-to-b from-[#0a0a0a] via-[#1a0b0e] to-black text-white py-28 px-6 overflow-hidden"
    >
      <div className="max-w-5xl mx-auto relative z-10 text-center space-y-8" ref={textRef}>
        <h2 className="text-4xl md:text-6xl font-negra text-[#FF1F1F] tracking-tight">
          Ready to Join the Mayhem?
        </h2>
        <p className="text-white/80 text-lg font-inter max-w-2xl mx-auto">
          You’ve seen the blades, the bullets, the bad jokes — now it’s your turn to step into the madness.
          Embrace the chaos, break a few rules, and let Deadpool be your unhinged spirit guide.
        </p>
        <button
          ref={buttonRef}
          className="mt-6 px-8 py-4 bg-[#FF1F1F] text-white font-bold text-lg rounded-full cursor-pointer transition-all shadow-[0_0_20px_#ff1f1f88] hover:bg-[#ff3c3c] hover:scale-105 hover:shadow-[0_0_30px_#ff1f1faa]"
        >
          Enter the Deadpoolverse
        </button>
      </div>
    </section>
  );
};

export default DeadpoolOutro;