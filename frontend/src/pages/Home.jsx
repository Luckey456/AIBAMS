import React, { forwardRef, useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../Styles/Home.css";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

import PlatformArc from "../components/ui/Arc.jsx";
import ButtonHero from "../components/ui/herosectionButton.jsx";
import EnchantedScroll from "../components/ui/EnhanshedScroll.jsx";
import FourGrid from "../components/ui/Fourgrid.jsx";
import ToolsGrid from "../components/ui/newProduct.jsx";
import VerticalScrollSection from "../components/ui/newStackingcards.jsx";
import BackgroundDots from "../components/ui/constantbg.jsx";
import CustomButton from "../components/Button.jsx";

const Hero = forwardRef((props, ref) => {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 600,
      easing: "ease-out",
      delay: 100,
    });
  }, []);

  const fourGridSectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: fourGridSectionRef,
    offset: ["start end", "start start"],
  });

  // Smooth scroll progress without bounce
  const springScroll = useSpring(scrollYProgress, {
    stiffness: 50, // Lower stiffness for less "springiness"
    damping: 40, // Higher damping to eliminate bounce
    mass: 1, // Keep mass at 1 for natural feel
  });

  // Map spring value (0 to 1) to marginTop range (50px to 250px)
  const marginTop = useTransform(springScroll, [0, 1], ["50px", "250px"]);

  return (
    <>
      <div className="relative w-full min-h-screen">
        <div className="absolute inset-0 z-0">
          <BackgroundDots />
        </div>

        <section
          ref={ref}
          className="relative z-10 flex flex-col items-center text-center text-white pt-35"
        >
          <motion.div
            className="flex flex-row items-center font-semibold text-[94px] leading-tight tracking-wide"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="whitespace-nowrap">Beyond Just a Tool</span>
          </motion.div>

          <div className="absolute h-full -mt-20 ml-[80%] flex flex-col justify-end bg-primary-500 opacity-50 w-100 blur-2xl rounded-l-full"></div>
          <motion.div
            className="pt-10 text-[27px] text-secondary-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <p>
              AIBAMS isn't just a tool—it's the next generation of business{" "}
              <br />
              solutions, integrating AI, automation, and analytics for <br />
              maximum efficiency.
            </p>
          </motion.div>
          <motion.div
            className="mt-20 flex justify-center gap-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            <div className="mt-1">
              <button className="relative overflow-hidden bg-gradient-to-r from-[#FFD700] via-[#FFC107] to-[#ff9500] text-black font-bold py-3 px-10 rounded-full transition-all duration-200 ease-out hover:shadow-[0_0_25px_12px_rgba(255,255,255,0.4)] before:absolute before:top-0 before:left-[-100%] before:h-full before:w-full before:bg-white/30 before:opacity-0 before:transition-all before:duration-300 before:ease-out hover:before:left-full hover:before:opacity-100">
                Get Started
              </button>
            </div>
            <div className="mt-1">
              <button className="bg-black text-[#fad643] font-bold py-[12px] px-6 rounded-full transition-all duration-200 ease-out hover:border-1 hover:border-white">
                Book a Demo
              </button>
            </div>
          </motion.div>
        </section>

        <div className="relative z-10">
          <motion.section
            ref={fourGridSectionRef}
            className="pt-20"
            style={{ marginTop, willChange: "margin-top" }}
          >
            <div>
              <FourGrid />
            </div>
          </motion.section>

          <div className="-mt-60">
            <motion.div
              className="relative z-10"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <PlatformArc />
            </motion.div>
          </div>

          <section className="relative z-10 product mt-25">
            <motion.div
              className="product-title text-2xl text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <div className="flex justify-center items-center gap-10">
                <div className="font-bold text-5xl md:text-6xl leading-tight tracking-wide text-primary-300">
                  <span>FUSION SUITE</span>
                </div>
              </div>
            </motion.div>
          </section>

          <motion.div
            className="mt-35"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <ToolsGrid />
          </motion.div>

          <div className="absolute right-10 flex justify-end w-full pr-65 mt-50">
            <button className="flex items-center gap-2 font-semibold text-[20px] cursor-pointer border-none bg-none">
              <p className="relative text-white transition-all duration-300 ease-out after:absolute after:bottom-[-7px] after:left-0 after:w-0 after:h-[2px] after:bg-red-500 after:transition-all after:duration-300 after:ease-out hover:after:w-full">
                <span className="absolute inset-0 overflow-hidden text-red-500 w-0 transition-all duration-300 ease-out hover:w-full">
                  Subscribe
                </span>
                Subscribe
              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 text-white transition-transform duration-200 ease-out hover:translate-x-1 hover:text-red-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </button>
          </div>

          <section className="relative -z-10 text-3xl text-center pt-150 tracking-wider">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <span className="pl-10 font-bold text-secondary-400 pr-5">
                Web Builder{" "}
              </span>
              on
              <br />
              <span className="firetext">STEREOIDS</span>
            </motion.h1>
            <motion.div
              className="flex items-center justify-center pt-20 pb-20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <button
                type="submit"
                className="flex text-black justify-center gap-2 items-center mx-auto shadow-xl text-lg bg-[#fdd40e] backdrop-blur-md lg:font-semibold isolation-auto border-gray-50 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-emerald-500 hover:text-gray-50 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-6 py-3 overflow-hidden border-2 rounded-full group"
              >
                Explore
                <svg
                  className="w-8 h-8 justify-end group-hover:rotate-90 group-hover:bg-gray-50 text-gray-50 ease-linear duration-300 rounded-full border border-gray-700 group-hover:border-none p-2 rotate-45"
                  viewBox="0 0 16 19"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
                    className="fill-gray-800 group-hover:fill-gray-800"
                  />
                </svg>
              </button>
            </motion.div>
          </section>
        </div>
      </div>
    </>
  );
});

Hero.displayName = "Hero";
export default Hero;