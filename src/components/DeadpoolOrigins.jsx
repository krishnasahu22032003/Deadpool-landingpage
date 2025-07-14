import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const DeadpoolOrigins = () => {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Text animation from right
      gsap.fromTo(
        textRef.current,
        { x: 150, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1.5,
          ease: "power4.out",
          scrollTrigger: {
            trigger: textRef.current,
            start: "top 90%",
            toggleActions: "play reset play reset",
          },
        }
      );

      // Image animation from left with rotation
      gsap.fromTo(
        imageRef.current,
        { x: -500, rotate: -120, opacity: 0 },
        {
          x: 0,
          rotate: 0,
          opacity: 1,
          duration: 2,
          ease: "expo.out",
          delay: 0.6,
          scrollTrigger: {
            trigger: imageRef.current,
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
      id="deadpool-origins"
      className="relative w-full bg-gradient-to-b from-[#0a0a0a] via-[#12090c] to-[#180303] text-white py-28 px-6 overflow-hidden"
    >
      <div className="absolute inset-0 opacity-10 bg-[url('/images/blood-splatter.png')] bg-no-repeat bg-center bg-cover pointer-events-none" />

      <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center relative z-10">
        {/* Image */}
        <div ref={imageRef} className="relative">
          <div className="absolute -top-14 -right-14 w-36 h-36 bg-red-600/30 rounded-full blur-3xl" />
          <img
            src="/images/deadpool-2-2.png"
            alt="Deadpool Origins"
            className="w-[280px] h-auto md:w-[280px] md:h-[auto] mx-auto drop-shadow-[0_25px_35px_rgba(255,60,60,0.4)]"
          />

        </div>

        {/* Text Content */}
        <div ref={textRef} className="space-y-6">
          <h2 className="text-4xl md:text-6xl font-orbitron font-bold text-[#FF3C3C] tracking-tight">
            From Zero to Anti-Hero
          </h2>
          <p className="text-lg text-white/80 font-inter leading-relaxed">
            Before he was Deadpool, he was Wade Wilson — a mercenary with nothing to lose.
            After an experiment gone wrong, he got healing powers, a twisted sense of humor, and a vendetta.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 text-sm text-white/60 font-mono">
            {[
              { title: "🧬 Origin", desc: "Weapon X experiment turned survivor." },
              { title: "🎭 Persona", desc: "Snarky, self-aware, and often inappropriate." },
              { title: "🎯 Mission", desc: "Revenge with a side of sass." },
              { title: "🎬 Feature", desc: "Breaks the fourth wall and your expectations." },
            ].map(({ title, desc }, idx) => (
              <div
                key={idx}
                className="group bg-[#1a1a1a] p-5 cursor-pointer rounded-xl border border-red-500/30 hover:border-red-500 hover:shadow-[0_0_18px_#ff3c3c88] transition-all duration-300"
              >
                <span className="block text-white font-bold text-lg mb-2 group-hover:text-[#FF3C3C] transition-colors duration-200">
                  {title}
                </span>
                <p className="group-hover:text-white/90 transition-colors duration-200">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeadpoolOrigins;
