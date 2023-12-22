import React from "react";
import Display from "./Display";
import Button from "./Button";
import { useState } from "react";




function Calculator() {
  return (
      <div className="flex justify-center items-center h-screen">
          <div className="bg-gray-800 p-5 rounded-lg">
              <Display />
              <div className="grid grid-cols-4 gap-2">
              <Display value={/* state value */} />
              <Button id="one" label="1" onClick={/* handle click */} />
              </div>
          </div>
      </div>
  );
}