'use client'
import React, { useState } from "react";
import { FaRegArrowAltCircleRight } from "react-icons/fa";

export default function Student() {
  // Step 1: Set up state to store the current text
  const [text, setText] = useState("next section");

  // Step 2: Create a function that changes the text when called
  const handleClick = () => {
    setText("section changed!"); // Change the text when button is clicked
  };

  return (
    <div className="flex flex-col items-center">
      {/* Step 3: Display the current text */}
      <div className="text-xl font-bold mb-4">{text}</div>

      {/* Step 4: Add a button with an icon, which changes the text when clicked */}
      <button
        onClick={handleClick}
        className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
      >
        <span className="mr-2">Click to Change</span>
        <FaRegArrowAltCircleRight size={20} />
      </button>
    </div>
  );
}
