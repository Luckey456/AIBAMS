import React, { useEffect, useRef } from "react";
import '../../Styles/IntegrationsSection.css'; // Add this CSS file

const IntegrationsSection = () => {
  const sectionRef = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const section = sectionRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            console.log("Section is in view!"); // Debug log
            const icons = section.querySelectorAll('.icon-container');
            icons.forEach((icon) => {
              icon.classList.add('animate-in'); // Trigger animation
            });
            hasAnimated.current = true;
          }
        });
      },
      { 
        threshold: 0.2, // 20% of the section must be visible
        rootMargin: '0px 0px -100px 0px' // Trigger 100px before fully in view
      }
    );

    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  return (
    <div ref={sectionRef} className="relative w-full py-16 bg-transparent" style={{ minHeight: '100vh' }}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="absolute text-center mt-55 z-20 mx-57 my-50">
          <h2 className="!text-5xl font-bold text-white leading-tight mb-6">
            <span>Seamless integrations</span> <br />with your entire tech stack
          </h2>
          <button className="bg-blue-500 hover:bg-blue-800 text-black font-bold py-3 px-6 rounded-full shadow-lg shadow-neutral-950 hover:text-white transform transition-all duration-500 ease-in-out hover:scale-110 hover:brightness-110 -ml-10">
            See All Integrations
          </button>
        </div>

        <div className="relative w-full h-full mx-auto" style={{ maxWidth: "1500px" }}>
          <div className="relative inset-0 grid grid-cols-12 gap-6">
            {Array(72).fill(0).map((_, i) => (
              <div key={i} className="bg-[#2b2b2b4f] rounded-xl w-20 h-20"></div>
            ))}
          </div>
          <div className="absolute left-1/4 translate-x-2 top-1">
            <div className="icon-container adp-icon w-20 h-20 rounded-xl bg-white shadow-lg flex items-center justify-center overflow-hidden">
              <div className="w-20 h-20 bg-red-500 flex items-center justify-center">
                <span className="text-white text-xs font-bold">ADP</span>
              </div>
            </div>
          </div>
          <div className="absolute left-1/2 translate-x-27 top-0">
            <div className="icon-container personio-icon w-20 h-20 rounded-xl bg-white shadow-lg flex items-center justify-center overflow-hidden">
              <div className="w-20 h-20 bg-amber-500 flex items-center justify-center">
                <span className="text-white text-sm font-bold">P</span>
              </div>
            </div>
          </div>
          <div className="absolute right-1/4 translate-x-25 top-26">
            <div className="icon-container teams-icon w-20 h-20 rounded-xl bg-white shadow-lg flex items-center justify-center overflow-hidden">
              <div className="w-20 h-20 bg-blue-500 flex items-center justify-center">
                <span className="text-white text-xs font-bold">T</span>
              </div>
            </div>
          </div>
          <div className="absolute right-1/4 -translate-x-71 top-26">
            <div className="icon-container slack-icon w-20 h-20 rounded-xl bg-white shadow-lg flex items-center justify-center overflow-hidden">
              <div className="w-20 h-20 bg-purple-800 flex items-center justify-center">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="white">
                  <path d="M19.712 10.11c.146-.493-.144-.995-.638-1.19l-2.695-.858.882-2.691c.145-.493-.145-.995-.639-1.19-.493-.145-.995.145-1.19.639l-.882 2.69-2.69-.882c-.494-.144-.996.145-1.19.639-.145.493.144.995.638 1.19l2.69.882-.882 2.69c-.144.494.145.996.639 1.19.494.145.996-.144 1.19-.638l.883-2.691 2.69.882c.494.144.996-.145 1.19-.639zM9.425 15.32c.146-.493-.144-.995-.638-1.19l-2.695-.858.882-2.691c.145-.493-.145-.995-.639-1.19-.493-.145-.995.145-1.19.639l-.882 2.69-2.69-.882c-.494-.144-.996.145-1.19.639-.145.493.144.995.638 1.19l2.69.882-.882 2.69c-.144.494.145.996.639 1.19.494.145.996-.144 1.19-.639l.883-2.691 2.69.882c.494.144.996-.145 1.19-.639z" />
                </svg>
              </div>
            </div>
          </div>
          <div className="absolute top-26">
            <div className="icon-container jira-icon w-20 h-20 rounded-xl bg-white shadow-lg flex items-center justify-center overflow-hidden">
              <div className="w-20 h-20 bg-blue-500 flex items-center justify-center">
                <svg viewBox="0 0 24 24" width="24" height="24" fill="white">
                  <path d="M12 2c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10-4.48-10-10-10zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
                </svg>
              </div>
            </div>
          </div>
          <div className="absolute left-1/4 -translate-x-47 top-63 -translate-y-1/2 z-4">
            <div className="icon-container google-icon w-20 h-20 rounded-xl bg-amber-500 shadow-lg flex items-center justify-center overflow-hidden">
              <div className="w-20 h-20">
                <svg viewBox="0 0 24 24" width="32" height="32">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                </svg>
              </div>
            </div>
          </div>
          <div className="absolute right-16 top-52 translate-x-18">
            <div className="icon-container gusto-icon w-20 h-20 rounded-xl bg-white shadow-lg flex items-center justify-center overflow-hidden">
              <div className="w-20 h-20 bg-red-300 flex items-center justify-center">
                <span className="text-white text-xl font-bold">g</span>
              </div>
            </div>
          </div>
          <div className="absolute right-1/4 translate-x-2 top-112.5 -translate-y-8">
            <div className="icon-container greenhouse-icon w-20 h-20 rounded-xl bg-white shadow-lg flex items-center justify-center overflow-hidden">
              <div className="w-20 h-20 bg-green-600 flex items-center justify-center">
                <span className="text-white text-xl font-bold">g</span>
              </div>
            </div>
          </div>
          <div className="absolute left-1/4 -translate-x-22 bottom-26">
            <div className="icon-container loading-icon w-20 h-20 rounded-xl bg-white shadow-lg flex items-center justify-center overflow-hidden">
              <div className="w-20 h-20 bg-red-400 flex items-center justify-center">
                <span className="text-white text-sm font-bold">H</span>
              </div>
            </div>
          </div>
          <div className="absolute right-22 bottom-52">
            <div className="icon-container user-smile-icon w-20 h-20 rounded-xl bg-white shadow-lg flex items-center justify-center overflow-hidden">
              <div className="w-20 h-20 bg-teal-500 flex items-center justify-center">
                <span className="text-white text-xl">ü</span>
              </div>
            </div>
          </div>
          <div className="absolute bottom-26 left-0">
            <div className="icon-container salesforce-icon w-20 h-20 rounded-xl bg-white shadow-lg flex items-center justify-center overflow-hidden">
              <div className="w-20 h-20 bg-blue-400 flex items-center justify-center">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="white">
                  <path d="M12 4C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 10c-4.41 0-8 1.79-8 4v2h16v-2c0-2.21-3.59-4-8-4z" />
                </svg>
              </div>
            </div>
          </div>
          <div className="absolute left-1/2 -translate-x-20 bottom-0">
            <div className="icon-container hubspot-icon w-20 h-20 rounded-xl bg-white shadow-lg flex items-center justify-center overflow-hidden">
              <div className="w-20 h-20 bg-red-400 flex items-center justify-center">
                <span className="text-white text-sm font-bold">H</span>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 right-21">
            <div className="icon-container workday-icon w-20 h-20 rounded-xl bg-white shadow-lg flex items-center justify-center overflow-hidden">
              <div className="w-20 h-20 bg-blue-200 flex items-center justify-center">
                <span className="text-white text-sm font-bold">W</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntegrationsSection;