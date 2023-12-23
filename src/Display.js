import React from "react";


function Display({ value }) {
  return (
    <div id="display" className="bg-gray-100 p-6 rounded mb-2 text-right text-2xl text-white">
      {value}
    </div>
  );
}

export default Display;
