import React from "react";


// Display.jsx
export default function Display({ value }) {
  return (
      <div id="display" className="bg-gray-700 text-white text-2xl p-4 rounded mb-3">
          {value}
      </div>
  );
}
