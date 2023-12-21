import React, { useState } from 'react';

const App = () => {
  const [display, setDisplay] = useState('0');
  const [lastActionWasCalculation, setLastActionWasCalculation] = useState(false);

  const handleInput = (value) => {
    // Prevent multiple leading zeros
    if (lastActionWasCalculation && !['+', '-', '*', '/'].includes(value)) {
      setDisplay(value);
      setLastActionWasCalculation(false);
      return;
    }
    if (['+', '-', '*', '/'].includes(value)) {
      if (['+', '-', '*', '/'].includes(display.slice(-1))) {
        // Replace the last operator with the new one
        setDisplay(display.slice(0, -1) + value);
      } else {
        setDisplay(display + ' ' + value + ' ');
      }
      return;
    }

    // Handle decimal point
    if (value === '.') {
      if (display.includes('.') && !display.includes(' ')) {
        // Prevent two decimals in one number
        return;
      } else if (display.slice(-1) === ' ') {
        // Add a leading zero if decimal is the first in a new number
        setDisplay(display + '0.');
        return;
      }
    }

    // Update display for other inputs
    setDisplay(display === '0' ? value : display + value);
  };

  const calculateResult = () => {
    try {
      // Replace the use of eval with a safer method
      const result = eval(`"use strict"; (${display})`);
      setDisplay(String(result));
    } catch (error) {
      setDisplay('Error');
    }
  };

  const clearDisplay = () => {
    setDisplay('0');
  };

  return (
    <div id="calculator">
      <div id="display">{display}</div>
      <button id="clear" onClick={clearDisplay}>C</button>
      <button id="zero" onClick={() => handleInput('0')}>0</button>
      <button id="one" onClick={() => handleInput('1')}>1</button>
      <button id="two" onClick={() => handleInput('2')}>2</button>
      <button id="add" onClick={() => handleInput('+')}>+</button>
      <button id="three" onClick={() => handleInput('3')}>3</button>
      <button id="four" onClick={() => handleInput('4')}>4</button>
      <button id="five" onClick={() => handleInput('5')}>5</button>
      <button id="subtract" onClick={() => handleInput('-')}>-</button>
      <button id="six" onClick={() => handleInput('6')}>6</button>
      <button id="seven" onClick={() => handleInput('7')}>7</button>
      <button id="eight" onClick={() => handleInput('8')}>8</button>
      <button id="multiply" onClick={() => handleInput('*')}>*</button>
      <button id="nine" onClick={() => handleInput('9')}>9</button>
      <button id="decimal" onClick={() => handleInput('.')}>.</button>
      <button id="divide" onClick={() => handleInput('/')}>/</button>
      <button id="equals" onClick={calculateResult}>=</button>
    </div>
  );
};
export default App;

