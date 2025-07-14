import { useState, useEffect } from "react";
import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import MeetDeadpool from "./components/MeetDeadpool";
import DeadpoolOrigins from "./components/DeadpoolOrigins";
import DeadpoolMedia from "./components/DeadpoolMedia";
import DeadpoolArsenal from "./components/DeadpoolArsenal";
import DeadpoolOutro from "./components/DeadpoolOutro";
import DeadpoolFooter from "./components/DeadpoolFooter";

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
    <main className="min-h-screen w-screen overflow-x-hidden overflow-hidden relative">
      {!isLoaded && <Loader />}  {/* Show loader until page is ready */}
      {isLoaded && (
        <>
          <Navbar />
          <Hero />
          <MeetDeadpool/>
          <DeadpoolOrigins/>
          <DeadpoolMedia/>
          <DeadpoolArsenal/>
          <DeadpoolOutro/>
          <DeadpoolFooter/>
        </>
      )}
    </main>
  );
}

export default App;
