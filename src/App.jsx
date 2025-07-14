import { useState, useEffect } from "react";
import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import MeetDeadpool from "./components/MeetDeadpool";
import DeadpoolOrigins from "./components/DeadpoolOrigins";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Simulate a loading delay that matches Loader animation
    const timeout = setTimeout(() => {
      setIsLoaded(true);
    }, 1800); // Make sure this matches your Loader timeout

    return () => clearTimeout(timeout);
  }, []);

  return (
    <main className="min-h-screen w-screen overflow-x-hidden relative">
      {!isLoaded && <Loader />}  {/* Show loader until page is ready */}
      {isLoaded && (
        <>
          <Navbar />
          <Hero />
          <MeetDeadpool/>
          <DeadpoolOrigins/>
        </>
      )}
    </main>
  );
}

export default App;
