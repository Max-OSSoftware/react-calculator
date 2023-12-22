import React from "react";


// Button.jsx
export default function Button({ id, label, onClick }) {
  return (
      <button 
          id={id}
          className="bg-gray-600 text-white p-4 rounded hover:bg-gray-500 active:bg-gray-700 focus:outline-none"
          onClick={onClick}
      >
          {label}
      </button>
  );
}
