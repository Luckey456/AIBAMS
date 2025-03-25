import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProductDisplay from '../../components/ui/productDisplay.jsx';

const NoiseTexture = () => (
  <svg className="absolute inset-0 w-full h-full opacity-20 pointer-events-none" style={{ filter: 'contrast(170%) brightness(1000%)' }}>
    <filter id='noiseFilter'>
      <feTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch' />
    </filter>
    <rect width='100%' height='100%' filter='url(#noiseFilter)' />
  </svg>
);

const ClosedCard = ({ item, onClick }) => (
  <motion.div
    layoutId={`card-${item.id}`}
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.8 }}
    transition={{ duration: 0.5, ease: "easeInOut" }}
    className="bg-transparent rounded-[30px] shadow-md text-white p-4 cursor-pointer flex flex-col border border-gray-800 col-span-1 h-[300px] relative overflow-hidden hover:border-white hover:bg-white/10 transition-colors duration-300"
    onClick={onClick}
  >
    <NoiseTexture />
    <motion.div layout className="mt-5 relative z-10">
      <ProductDisplay productId={item.id} />
    </motion.div>
    <motion.h2 layout className="text-xl !mt-10 text-center font-bold text-white relative z-10">
      {item.name}
    </motion.h2>
    <motion.p 
      className="mt-2 text-white text-center truncate text-sm relative z-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      Click to view details
    </motion.p>
  </motion.div>
);

const ExpandedCard = ({ item, onClick }) => (
  <motion.div
    layoutId={`card-${item.id}`}
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.8 }}
    transition={{ duration: 0.5, ease: "easeInOut" }}
    className="bg-transparent rounded-[20px] shadow-md text-white p-6 cursor-pointer flex flex-row border border-gray-800 col-span-2 h-[300px] relative overflow-hidden hover:border-[#a3a2a2] hover:bg-white/10 transition-colors duration-300"
    onClick={() => onClick(item.id)}
  >
    <NoiseTexture />
    <motion.div layout className="ml-10 mt-10 relative z-10 flex-shrink-0">
      <ProductDisplay productId={item.id} size="large" />
    </motion.div>
    <div className="flex-1 flex flex-col mt-8 ml-10">
      <motion.h2 layout className="text-2xl text-center font-bold text-white relative z-10">
        {item.name}
      </motion.h2>
      <motion.p 
        className="mt-4 text-white text-base relative z-10"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        {item.description}
      </motion.p>
      {item.ctaText && (
        <motion.a 
          href="#" 
          className="text-blue-400 mt-4 hover:text-blue-300 text-base font-medium relative z-10 block text-center"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          {item.ctaText}
        </motion.a>
      )}
    </div>
  </motion.div>
);

const ProductGrid = () => {
  const products = [
    { id: 1, name: "Product 1", description: "AI-powered voice API.", ctaText: "Learn More" },
    { id: 2, name: "Product 2", description: "High-speed speech transcription.", ctaText: "Get Started" },
    { id: 3, name: "Product 3", description: "Intelligent conversation models.", ctaText: "Explore Now" },
    { id: 4, name: "Product 4", description: "Next-gen voice recognition.", ctaText: "Unlock Voice AI" },
    { id: 5, name: "Product 5", description: "Advanced speech synthesis.", ctaText: "Try Now" },
    { id: 6, name: "Product 6", description: "Custom AI speech processing.", ctaText: "Start Free Trial" },
    { id: 7, name: "Product 7", description: "Advanced speech synthesis.", ctaText: "Try Now" },
    { id: 8, name: "Product 8", description: "Custom AI speech processing.", ctaText: "Start Free Trial" },
  ];

  const [expandedId, setExpandedId] = useState(null);

  const handleProductClick = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="container mx-auto flex justify-center items-center">
      <div className="grid grid-cols-3 gap-6 w-[1100px]">
        <AnimatePresence mode="sync">
          {products.map((item) => (
            expandedId === item.id ? (
              <ExpandedCard 
                key={item.id}
                item={item}
                onClick={handleProductClick}
              />
            ) : (
              <ClosedCard 
                key={item.id}
                item={item}
                onClick={() => handleProductClick(item.id)}
              />
            )
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ProductGrid;
