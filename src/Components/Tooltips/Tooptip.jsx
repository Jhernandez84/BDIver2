import React from "react";

const TooltipButton = ({ text }) => {
  return (
    <div className="relative inline-block">
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Hover me
      </button>
      <div className="hidden bg-gray-800 text-white text-center rounded p-2 absolute bottom-full left-1/2 transform -translate-x-1/2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        {text}
      </div>
    </div>
  );
};

export default TooltipButton;