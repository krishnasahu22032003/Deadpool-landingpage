import { useState, useEffect } from "react";
import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

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
        </>
      )}
    </main>
  );
}

export default App;
