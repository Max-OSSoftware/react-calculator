import React from "react";


function Button({ label, onClick, id }) {
    return (
      <button
        id={id}
        className="bg-gray-200 p-6 rounded text-xl focus:outline-none focus:bg-gray-300 text-black"
        onClick={onClick}
      >
        {label}
      </button>
    );
  }
  
  export default Button;
  