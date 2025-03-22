import React from "react";

const Button = ({ text = "Subscribe", onClick }) => {
  return (
    <button
    className="relative px-8 py-3 bg-black text-white font-semibold rounded-lg border-2 border-[#6060ff] 
               hover:border-[#6060ff] transition-all duration-300 hover:shadow-[0_0_25px_12px_rgba(18,57,255,0.4)] 
               active:scale-95 active:shadow-[0_0_15px_7px_rgba(18,57,255,0.7)] group"
    onClick={onClick}
  >
      <span className="flex items-center space-x-2">
        <span>{text}</span>
        <svg
          className="w-6 h-6 transition-transform duration-500 hover:translate-x-1"
          aria-hidden="true"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
            fillRule="evenodd"
            fill="currentColor"
          />
        </svg>
      </span>
      <span
        className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 
                   bg-gradient-to-r from-blue-500/20 to-blue-500/20"
      ></span>
    </button>
  );
};

export default Button;
