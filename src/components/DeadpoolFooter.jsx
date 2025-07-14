import { FaTwitter, FaInstagram, FaYoutube, FaFacebookF } from 'react-icons/fa';

const DeadpoolFooter = () => {
  return (
    <footer className="relative w-full bg-gradient-to-t from-black via-[#0a0a0a] to-[#17090b] text-white py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 items-start text-center md:text-left">
        {/* Brand Column */}
        <div className="space-y-4">
          <div className="text-4xl font-negra text-[#FF1F1F] drop-shadow-[0_0_12px_#ff1f1f99]">
            Deadpool
          </div>
          <p className="text-white/70 font-inter">
            Maximum chaos, minimum filter. This is where Deadpool reigns.
          </p>
        </div>

        {/* Navigation Column */}
        <div className="space-y-3">
          <h4 className="text-[#FF1F1F] text-lg font-bold font-orbitron mb-2">Explore</h4>
          <ul className="space-y-2 font-inter text-white/70">
            {['Home', 'Media', 'Arsenal', 'Join'].map((link, i) => (
              <li
                key={i}
                className="hover:text-[#FF1F1F] transition-colors cursor-pointer"
              >
                {link}
              </li>
            ))}
          </ul>
        </div>

        {/* Socials Column */}
        <div className="space-y-3">
          <h4 className="text-[#FF1F1F] text-lg font-bold font-orbitron mb-2">Follow Deadpool</h4>
          <div className="flex justify-center md:justify-start gap-5 text-2xl text-white">
            <FaTwitter className="hover:text-[#FF1F1F] transition-colors cursor-pointer" />
            <FaInstagram className="hover:text-[#FF1F1F] transition-colors cursor-pointer" />
            <FaYoutube className="hover:text-[#FF1F1F] transition-colors cursor-pointer" />
            <FaFacebookF className="hover:text-[#FF1F1F] transition-colors cursor-pointer" />
          </div>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="mt-12 text-center text-white/40 text-sm font-mono">
        © {new Date().getFullYear()} Deadpoolverse. All sarcasm reserved.
      </div>
    </footer>
  );
};

export default DeadpoolFooter;