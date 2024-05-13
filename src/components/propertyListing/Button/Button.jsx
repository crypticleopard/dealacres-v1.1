'use client';
import React, { useState } from "react";

const Button = ({ heading, onClick, isActive, hashClick }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true); 
    if(hashClick) onClick(); 
  };

  return (
    <button
      onClick={handleClick}
      className={`py-1 px-6 mr-2 mb-2 rounded-xl border-solid custom-border  shadow-md shadow-violet-100 text-base ${
        isClicked && isActive ?  "custom-border-select" : " "
      } `}
    >
      {heading}
    </button>
  );
};
export default Button







