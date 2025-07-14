import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const weapons = [
  {
    name: "Twin Katanas",
    desc: "Unmatched slicing skills with regenerating flair.",
    stat: "Lethality: 9999%",
    img: "/images/katana.png",
  },
  {
    name: "Desert Eagles",
    desc: "Double pistols for double trouble.",
    stat: "Accuracy: 87%",
    img: "/images/desert-eagle.png",
  },
  {
    name: "Grenades",
    desc: "Boom. Boom. Boom. Laughter follows.",
    stat: "Explosion Radius: OVERKILL",
    img: "/images/grenade.png",
  },
];

const DeadpoolArsenal = () => {
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);
  const headingRef = useRef(null);
  const descRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.fromTo(
        headingRef.current,
        { y: -50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power4.out",
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 90%",
            toggleActions: "play reset play reset",
          },
        }
      );

      // Description animation
      gsap.fromTo(
        descRef.current,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: descRef.current,
            start: "top 90%",
            toggleActions: "play reset play reset",
          },
        }
      );

      // Weapon card animations
      cardRefs.current.forEach((card, i) => {
        gsap.fromTo(
          card,
          { y: 80, opacity: 0, rotateX: 30 },
          {
            y: 0,
            opacity: 1,
            rotateX: 0,
            duration: 1.2,
            ease: "power3.out",
            delay: i * 0.2,
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              toggleActions: "play reset play reset",
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="simulation"
      className="relative w-full bg-gradient-to-b from-[#0c0c0c] via-[#17090b] to-[#0a0a0a] text-white py-28 px-6 overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/grain.png')] opacity-5 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 text-center space-y-6">
        <h2
          ref={headingRef}
          className="text-4xl md:text-7xl font-negra font-bold text-[#FF1F1F] tracking-tight"
        >
          Deadpool's Arsenal
        </h2>
        <p
          ref={descRef}
          className="text-white/70 text-lg max-w-xl mx-auto font-inter"
        >
          Dive into Deadpool’s dangerously ridiculous toolkit. Each weapon is as chaotic as his punchlines.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mt-10">
          {weapons.map((weapon, i) => (
            <div
              key={i}
              ref={(el) => (cardRefs.current[i] = el)}
              className="group relative p-6 rounded-xl border border-red-500/40 bg-gradient-to-br from-[#1a1a1a] via-[#1a0e10] to-[#0f0f0f] shadow-[0_0_20px_#ff1f1f33] hover:shadow-[0_0_40px_#ff1f1f88] transition-all duration-300 overflow-hidden"
            >
              <img
                src={weapon.img}
                alt={weapon.name}
                className="w-58 h-38 mx-auto mb-6 group-hover:scale-110 transition-transform duration-500 drop-shadow-[0_0_10px_#ff1f1f99]"
              />
              <h3 className="text-2xl text-[#FF3C3C] font-bold mb-2 font-orbitron group-hover:text-[#ff1f1f]">
                {weapon.name}
              </h3>
              <p className="text-white/80 text-sm mb-3 font-inter">
                {weapon.desc}
              </p>
              <span className="text-red-400 font-mono text-xs tracking-wider uppercase">
                {weapon.stat}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DeadpoolArsenal;
