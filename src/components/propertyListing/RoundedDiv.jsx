import React, { useState } from 'react';

const RoundedDiv = ({ size, width, height, onClick, dropdown, dropdownLength }) => {
  const [selectedButton, setSelectedButton] = useState(null);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleButtonClick = (index) => {
    setSelectedButton(index);
    if (onClick) {
      onClick(index + 1);
    }
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setShowDropdown(false);
  };

  
  const dropdownOptions = Array.from({ length: dropdownLength }, (_, index) => index + size + 1);

  return (
    <div className="relative flex items-center">
      <div className="flex justify-start gap-4 my-2">
        {Array.from({ length: size }, (v, index) => (
          <button
            key={index + 1}
            style={{
              width: `${width}px`,
              height: `${height}px`,
              backgroundColor: selectedButton === index ? '#3498db' : 'white',
              color: selectedButton === index ? 'white' : '#3498db',
            }}
            className="rounded-full flex items-center justify-center font-bold border border-blue-700"
            onClick={() => handleButtonClick(index)}
          >
            {index + 1}
          </button>
        ))}
      </div>
      {dropdown && (
        <div className="relative ml-4 ">
          <button
            onClick={() => setShowDropdown(!showDropdown)}
            className={`flex items-center justify-center rounded-full w-[35px] h-[35px] border  border-blue-700 bg-${showDropdown ? 'gray-200' : 'white'}`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 text-gray-700"
              viewBox="0 0 20 20"
              fill="currentColor"
              transform={showDropdown ? 'rotate(180)' : 'rotate(0)'}
            >
              <path
                fillRule="evenodd"
                d="M9.292 13.707a1 1 0 001.414 0l4-4a1 1 0 00-1.414-1.414l-3.293 3.293-3.293-3.293a1 1 0 00-1.414 1.414l4 4z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          {showDropdown && (
            <div className="absolute top-full right-0 mt-1 z-10 bg-white border border-gray-300 rounded max-h-40 overflow-y-auto">
              {dropdownOptions.map((option, index) => (
                <button
                  key={index}
                  className="block w-full py-2 px-4 text-left text-gray-800 hover:bg-gray-200"
                  onClick={() => handleOptionSelect(option)}
                >
                  {option}
                </button>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default RoundedDiv;
