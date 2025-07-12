import { useEffect, useState } from "react";
import gsap from "gsap";

const Loader = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      gsap.to(".loader-wrapper", {
        opacity: 0,
        scale: 0.9,
        duration: 0.5,
        ease: "power3.out",
        onComplete: () => setIsLoaded(true),
      });
    }, 1500);

    return () => clearTimeout(timeout);
  }, []);

  if (isLoaded) return null;

  return (
    <div className="loader-wrapper fixed inset-0 z-[9999] flex items-center justify-center bg-black bg-gradient-to-br from-[#0a0a0a] via-[#0f0f11] to-black">
      <div className="relative flex flex-col items-center justify-center gap-6">
     
        <svg className="w-36 h-36 animate-spin" viewBox="0 0 100 100">
          <circle
            cx="50"
            cy="50"
            r="45"
            stroke="#ff0033"
            strokeWidth="4"
            fill="none"
            strokeDasharray="283"
            strokeDashoffset="75"
            strokeLinecap="round"
            className="opacity-30 blur-[1px]"
          />
        </svg>


        <div className="relative text-white font-mono text-3xl md:text-4xl tracking-widest glitch font-bold uppercase">
          <span aria-hidden="true" className="absolute left-0 top-0 text-red-500 opacity-40 -translate-x-1 translate-y-1">MetaMerc</span>
          <span aria-hidden="true" className="absolute left-0 top-0 text-blue-500 opacity-40 translate-x-1 -translate-y-1">MetaMerc</span>
          MetaMerc
        </div>


        <p className="text-sm md:text-base text-white/70 font-medium tracking-wide italic">
          <span className="text-red-500 font-semibold">Protocol Initiated:</span> Systems coming online...
        </p>

     
        <p className="text-[11px] text-white/40 uppercase tracking-[0.3em] font-semibold animate-pulse mt-3">
          <span className="text-red-400 font-bold">Don't forget to turn the music on.</span>
        </p>
      </div>
    </div>
  );
};

export default Loader;
