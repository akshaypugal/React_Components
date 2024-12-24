import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

const SearchIcon = () => {
  const [inputField, setInputField] = useState(false); // Input field toggle
  const [bg, setBg] = useState('white'); // Background color

  const handle = () => {
    // Toggle background color when the section is clicked
    setBg(inputField ? 'white' : '#f0f0f0'); // Change color based on inputField
  };

  return (
    <div>
      <section
        style={{ backgroundColor: bg }}
        onClick={handle} // Toggle background color on section click
      >
        {inputField ? (
          <input
            type="text"
            onBlur={() => setInputField(false)} // Blur to hide input field
            autoFocus
          />
        ) : (
          <FaSearch onClick={() => setInputField(true)} /> // Show search icon
        )}
      </section>
    </div>
  );
};

export default SearchIcon;
