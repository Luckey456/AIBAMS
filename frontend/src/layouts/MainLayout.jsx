import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import StarBackground from '../components/Stater';
import BackgroundDots from "../components/ui/constantbg.jsx";

const MainLayout = ({ children, showStars = false , showBackground = false }) => {
  return (
    <div className="min-h-screen flex flex-col bg-secondary-500 relative overflow-hidden">
      {showStars && <StarBackground />}
      <Navbar />
      <div className="absolute inset-0 z-0">
        {showBackground && <BackgroundDots />}
      </div>
      <main className="flex-grow w-full relative">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;