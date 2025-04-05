import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; 
import "../Styles/Fusionsuite.css";
import GridProducts from "../components/ui/newProductgrid.jsx";
import ProductDisplay from "../components/ui/productDisplay.jsx";
import Productcontainers from "../components/ui/Productcontainers.jsx";
import CustomButton from "../components/Button.jsx";
import ButtonHero from "../components/ui/herosectionButton.jsx";

const Fusionsuite = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true, // Ensures animation runs only once
      easing: "ease-in-out",
    });
  }, []);

  return (
    <>
        
    
    <div className="fusionsuite-container">
      
      <GridProducts data-aos="fade-up" />
      {/* <div className="mt-50">
      <Productcontainers data-aos="fade-up" />

      </div> */}

      <section className="bg-transparent mt-60">
        <div className="text-center p-20 font-bold tracking-widest line-height-100">
          <div className="flex justify-center items-center">
            <p
              className="text-[70px] md:text-5xl font-semibold text-white font-inter"
              data-aos="zoom-in"
            >
              Experience the
              <span className="highlight c1 px-2 hover:bg-[#D9EDF8] hover:text-black transition-colors">
                Future
              </span>
              of <br />
              <span className="highlight c2 px-2 hover:bg-[#FFADAD] hover:text-black transition-colors">
                AI-Powered
              </span>
              Solutions
            </p>
          </div>
        </div>
        <div className="mt-5 mb-10 flex justify-center gap-6" data-aos="fade-up">
          <div className="mt-1">
            <CustomButton>Get Started</CustomButton>
          </div>
          <div className="mt-1">
            <ButtonHero text="Join Free" />
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default Fusionsuite;
