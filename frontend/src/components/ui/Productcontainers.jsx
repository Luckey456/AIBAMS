import React, { useState } from "react";
import { motion } from "framer-motion";
import ProductDisplay from '../../components/ui/productDisplay.jsx';

const NoiseTexture = () => (
  <svg className="absolute inset-0 w-full h-full opacity-20 pointer-events-none" style={{ filter: 'contrast(170%) brightness(1000%)' }}>
    <filter id='noiseFilter'>
      <feTurbulence 
        type='fractalNoise' 
        baseFrequency='0.8' 
        numOctaves='4' 
        stitchTiles='stitch'
      />
    </filter>
    <rect width='100%' height='100%' filter='url(#noiseFilter)' />
  </svg>
);

const ClosedCard = ({ item, onClick }) => (
  <motion.div
    layout
    transition={{ duration: 0.5, ease: "easeInOut" }}
    className="bg-transparent rounded-[30px] shadow-md text-white p-4 cursor-pointer flex flex-col border border-gray-800 col-span-1 h-[300px] relative overflow-hidden hover:border-white hover:bg-white/10 transition-colors duration-300"
    onClick={onClick}
  >
    <NoiseTexture />
    <motion.div 
      layout
      className="mt-5 relative z-10"
    >
      <ProductDisplay productId={item.id} />
    </motion.div>
    <motion.h2 
      layout 
      className="text-xl !mt-10 text-center font-bold text-white relative z-10"
    >
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

const ExpandedCard = ({ item, onClick, isExpanded }) => (
  <motion.div
    layout
    transition={{ duration: 0.5, ease: "easeInOut" }}
    className="bg-transparent rounded-[20px] shadow-md text-white p-6 cursor-pointer flex flex-row border border-gray-800 col-span-2 h-[300px] relative overflow-hidden hover:border-[#a3a2a2] hover:bg-white/10 transition-colors duration-300"
    onClick={(e) => {
      if (!isExpanded) {
        onClick(e);
      }
    }}
  >
    <NoiseTexture />
    <motion.div 
      layout
      className="ml-37 mt-15 relative z-10 flex-shrink-0"
    >
      <ProductDisplay productId={item.id} size="large" />
    </motion.div>
    <div className="flex-1 flex flex-col mt-8 ml-10">
      <motion.h2 
        layout 
        className="text-2xl text-center font-bold text-white relative z-10"
      >
        {item.name}
      </motion.h2>
      <motion.p 
        className="mt-4 ml-20 text-white text-base relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
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
    { 
      id: 1, 
      name: "Voice Agent API", 
      color: "bg-black", 
      description: "A unified voice-to-voice API that enables natural-sounding conversations between humans and machines.",
      ctaText: "Unlock Voice AI at Scale",
    },
    { 
      id: 2, 
      name: "Speech to Text", 
      color: "bg-black", 
      description: "Transcribe speech with unmatched accuracy, speed, and cost.",
      ctaText: "Learn More",
    },
    { 
      id: 3, 
      name: "Voice Agent API", 
      color: "bg-black", 
      description: "A unified voice-to-voice API that enables natural-sounding conversations between humans and machines.",
      ctaText: "Unlock Voice AI at Scale",
    },
    { 
      id: 4, 
      name: "Speech to Text", 
      color: "bg-black", 
      description: "Transcribe speech with unmatched accuracy, speed, and cost.",
      ctaText: "Learn More",
    },
    { 
      id: 5, 
      name: "Voice Agent API", 
      color: "bg-black", 
      description: "A unified voice-to-voice API that enables natural-sounding conversations between humans and machines.",
      ctaText: "Unlock Voice AI at Scale",
    },
    { 
      id: 6, 
      name: "Speech to Text", 
      color: "bg-black", 
      description: "Transcribe speech with unmatched accuracy, speed, and cost.",
      ctaText: "Learn More",
    },
    { 
      id: 7, 
      name: "Voice Agent API", 
      color: "bg-black", 
      description: "A unified voice-to-voice API that enables natural-sounding conversations between humans and machines.",
      ctaText: "Unlock Voice AI at Scale",
    },
    { 
      id: 8, 
      name: "Speech to Text", 
      color: "bg-black", 
      description: "Transcribe speech with unmatched accuracy, speed, and cost.",
      ctaText: "Learn More",
    },
  ];

  const [expandedId, setExpandedId] = useState(1);

  const handleProductClick = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const getReorderedProducts = () => {
    let reordered = [...products];

    if (expandedId === 3) {
      [reordered[2], reordered[3]] = [reordered[3], reordered[2]];
    }
    if (expandedId === 6) {
      [reordered[5], reordered[6]] = [reordered[6], reordered[5]];
    }

    return reordered;
  };

  return (
    <div className="container mx-auto justify-center items-center !ml-50">
      <div className="grid grid-cols-3 gap-6 h-[1000px] w-[1100px]">
        {getReorderedProducts().map((item) => (
          item.id === expandedId ? (
            <ExpandedCard 
              key={item.id}
              item={item}
              onClick={() => handleProductClick(item.id)}
              isExpanded={true}
            />
          ) : (
            <ClosedCard 
              key={item.id}
              item={item}
              onClick={() => handleProductClick(item.id)}
            />
          )
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;