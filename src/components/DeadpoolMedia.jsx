import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const DeadpoolMedia = () => {
  const sectionRef = useRef(null);
  const videoRef = useRef(null);
  const titleRef = useRef(null);
  const imagesRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate section title
      gsap.fromTo(
        titleRef.current,
        { y: 100, opacity: 0, scale: 0.8 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1.6,
          ease: "expo.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 90%",
            toggleActions: "play reset play reset",
          },
        }
      );

      // Video animation
      gsap.fromTo(
        videoRef.current,
        { y: 60, scale: 0.9, opacity: 0 },
        {
          y: 0,
          scale: 1,
          opacity: 1,
          duration: 1.5,
          ease: "power4.out",
          scrollTrigger: {
            trigger: videoRef.current,
            start: "top 90%",
            toggleActions: "play reset play reset",
          },
        }
      );

      // Images animation
      imagesRef.current.forEach((img, i) => {
        gsap.fromTo(
          img,
          { y: 80, opacity: 0, scale: 0.95 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 1.3,
            ease: "power3.out",
            delay: i * 0.15,
            scrollTrigger: {
              trigger: img,
              start: "top 90%",
              toggleActions: "play reset play reset",
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const fightDescriptions = [
    "Deadpool slices through enemies in a subway ambush.",
    "Explosive highway showdown with style and sarcasm.",
    "Final boss fight with maximum effort and zero chill."
  ];

  return (
    <section
      ref={sectionRef}
      id="media"
      className="relative w-full bg-gradient-to-b from-[#0a0a0a] via-[#1a0b0e] to-[#0c0c0c] text-white py-28 px-6 overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/grain.png')] opacity-5 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 space-y-20">
        {/* Section Title */}
        <h2
          ref={titleRef}
          className="text-center text-4xl md:text-8xl font-negra font-bold text-[#ff1f1f] tracking-tight mb-12 drop-shadow-[0_5px_15px_#ff1f1f88]"
        >
          Deadpool Media
        </h2>

        {/* Cinematic Video */}
        <div
          ref={videoRef}
          className="rounded-xl overflow-hidden shadow-[0_0_40px_#ff1f1f88] border-2 border-[#ff1f1f]/40 hover:shadow-[0_0_60px_#ff1f1faa] transition-all duration-500 w-full max-w-full mx-auto"
        >
          <video
            className="w-full h-[300px] md:h-[500px] object-cover"
            autoPlay
            muted
            loop
            playsInline
            src="/videos/deadpool-video.mp4"
          />
        </div>

        {/* Fight Images */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {["fight-1.jpg", "fight-2.jpg", "fight-3.jpg"].map((img, idx) => (
            <div
              key={idx}
              ref={(el) => (imagesRef.current[idx] = el)}
              className="group relative overflow-hidden rounded-xl border border-red-500/30 hover:border-[#ff1f1f] transition-all duration-300 shadow-md hover:shadow-[0_0_30px_#ff1f1faa] cursor-pointer bg-gradient-to-br from-[#1a1a1a] via-[#1a0e10] to-[#0f0f0f]"
            >
              <img
                src={`/images/${img}`}
                alt={`Deadpool Fight ${idx + 1}`}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-center py-2 text-sm text-[#ff1f1f] font-bold tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Deadpool Fight Scene #{idx + 1}
              </div>
              <p className="text-white/70 text-xs px-4 py-3 font-inter">
                {fightDescriptions[idx]}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DeadpoolMedia;
