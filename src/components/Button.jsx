import React from "react";

const Button = ({ value, onClick, className }) => {
  return (
    <button
      className={`py-3 text-xl font-semibold rounded transition-transform transform hover:scale-105 bg-gray-700 text-white hover:bg-gray-600 active:scale-95 ${className}`}
      onClick={() => onClick(value)}
    >
      {value}
    </button>
  );
};

export default Button;
