import React, { forwardRef, useEffect, useRef } from "react";
import AOS from "aos"; 
import "aos/dist/aos.css";
import "../Styles/Home.css";
import { motion, useScroll, useTransform } from "framer-motion";

import PlatformArc from "../components/ui/Arc.jsx";
import ButtonHero from "../components/ui/herosectionButton.jsx";
import EnchantedScroll from "../components/ui/EnhanshedScroll.jsx";
import FourGrid from "../components/ui/Fourgrid.jsx";
import ToolsGrid from "../components/ui/newProduct.jsx";
import VerticalScrollSection from "../components/ui/newStackingcards.jsx";
import BackgroundDots from "../components/ui/constantbg.jsx";
import CustomButton from "../components/Button.jsx";

const Hero = forwardRef((props, ref) => {
  // Initialize AOS
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 800,
    });
  }, []);

  // Ref and scroll tracking for FourGrid section
  const fourGridSectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: fourGridSectionRef,
    offset: ["start end", "start start"] // From when it enters bottom to when it reaches top
  });

  // Transform scroll progress into margin-top
  // Increase from 32rem to 64rem, stopping when the element is fully in view
  const marginTop = useTransform(scrollYProgress, [0, 0.65], ["50px", "250px"]);

  return (
    <>
      <div className="relative w-full min-h-screen">
        {/* Background Dots */}
        <div className="absolute inset-0 z-0">
          <BackgroundDots />
        </div>

        {/* Hero Section */}
        <section
          ref={ref}
          className="relative z-10 flex flex-col items-center text-center text-white pt-35"
        >
          <div className="flex flex-row items-center font-semibold text-[94px] leading-tight tracking-wide">
            <span className="whitespace-nowrap" data-aos="fade-down">Beyond Just a Tool</span>
          </div>

          <div className="absolute h-full -mt-20 ml-[80%] flex flex-col justify-end bg-primary-500 opacity-50 w-100 blur-2xl rounded-l-full"></div>
          <div className="pt-10 text-[27px] text-secondary-300" data-aos="fade-up" data-aos-delay="200">
            <p>
              AIBAMS isn't just a tool—it's the next generation of business <br />
              solutions, integrating AI, automation, and analytics for <br />
              maximum efficiency.
            </p>
          </div>
          <div className="mt-20 -ml-4 flex justify-center gap-6" data-aos="fade-up" data-aos-delay="400">
            <div className="mt-1">
              <CustomButton text="Get Started" />
            </div>
            <div className="mt-1">
              <ButtonHero text="Book a Demo" />
            </div>
          </div>
        </section>

        {/* Rest of the content */}
        <div className="relative z-10">
          {/* FourGrid Section with dynamic margin */}
          <motion.section
            ref={fourGridSectionRef}
            className="pt-20"
            style={{
              marginTop: marginTop // Increases until scrollYProgress reaches 0.5
            }}
          >
            <div className="">
              <FourGrid />
            </div>
          </motion.section>

          <div className="-mt-60">
            <div className="relative z-10 " data-aos="fade-up">
              <PlatformArc />
            </div>
          </div>

          {/* Product Section */}
          <section className="relative z-10 product mt-30">
            <div className="product-title text-2xl text-center" data-aos="fade-up">
              <div className="flex justify-center items-center gap-10">
                <div className="font-bold text-5xl md:text-6xl leading-tight tracking-wide text-primary-300">
                  <span>FUSION SUITE</span>
                </div>
              </div>
            </div>
          </section>

          {/* ToolsGrid with AOS */}
          <div className="mt-30" data-aos="fade-up">
            <ToolsGrid />
          </div>

          {/* Call to Action */}
          <section className="relative z-10 text-3xl text-center pt-150 tracking-wider" data-aos="fade-up">
            <h1>
              <span className="pl-10 font-bold text-secondary-400 pr-5">Web Builder </span>
              on<br /> 
              <span className="firetext">STEREOIDS</span>
            </h1>
            <div className="flex items-center justify-center pt-20 pb-20" data-aos="fade-up" data-aos-delay="200">
              <CustomButton>join for free</CustomButton>
            </div>
          </section>
        </div>
      </div>
    </>
  );
});

Hero.displayName = "Hero";
export default Hero;