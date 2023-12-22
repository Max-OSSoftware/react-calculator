import React, { useState } from 'react';


const handleInput = (value, display, setDisplay) => {
  // Prevent multiple leading zeros
  if (value === '0' && display === '0') {
    return;
  }

  // Prevent leading zero after operator
  if (['+', '-', '*', '/'].includes(value) && display.endsWith('0') && display.endsWith('0 ')) {
    return;
  } else if (['+', '-', '*', '/'].includes(value) && display.endsWith('0')) { // Prevent leading zero before decimal
    return;
  } 
  // Handle decimal point
  if (value === '.') {
    if (display.endsWith('.') || (display.includes('.') && display.split(' ').pop().includes('.'))) {
      // Prevent two decimals in one number
      return;
    }
  }




  // Handle operators
  if (['+', '-', '*', '/'].includes(value)) {
    if (['+', '-', '*', '/'].includes(display.slice(-1))) {
      // Replace the last operator with the new one
      setDisplay(display.slice(0, -1) + value);
    } else {
      setDisplay(display + value);
    }
  } else {
    // Update display for numbers and decimal points
    setDisplay(display === '0' ? value : display + value);
  }
};


const calculateResult = (display, setDisplay) => {
  try {
    // Split the display string into an array of numbers and operators
    const tokens = display.split(' ');

    // Apply the order of operations: multiplication and division first, then addition and subtraction
    let result = parseFloat(tokens[0]);
    for (let i = 1; i < tokens.length; i += 2) {
      const operator = tokens[i];
      const operand = parseFloat(tokens[i + 1]);

      if (operator === '*') {
        result *= operand;
      } else if (operator === '/') {
        result /= operand;
      } else if (operator === '+') {
        result += operand;
      } else if (operator === '-') {
        result -= operand;
      }
    }

    setDisplay(String(result));
  } catch (error) {
    setDisplay('Error');
  }
};




const App = () => {
  const [display, setDisplay] = useState('0');

  return (
      <div id="calculator">
          <div id="display">{display}</div>
        <button id="zero" onClick={() => handleInput('0', display, setDisplay)}>0</button>
        <button id="one" onClick={() => handleInput('1', display, setDisplay)}>1</button>
        <button id="two" onClick={() => handleInput('2', display, setDisplay)}>2</button>
        <button id="three" onClick={() => handleInput('3', display, setDisplay)}>3</button>
        <button id="four" onClick={() => handleInput('4', display, setDisplay)}>4</button>
        <button id="five" onClick={() => handleInput('5', display, setDisplay)}>5</button>
        <button id="six" onClick={() => handleInput('6', display, setDisplay)}>6</button>
        <button id="seven" onClick={() => handleInput('7', display, setDisplay)}>7</button>
        <button id="eight" onClick={() => handleInput('8', display, setDisplay)}>8</button>
        <button id="nine" onClick={() => handleInput('9', display, setDisplay)}>9</button>
        <button id="add" onClick={() => handleInput('+', display, setDisplay)}>+</button>
        <button id="subtract" onClick={() => handleInput('-', display, setDisplay)}>-</button>
        <button id="multiply" onClick={() => handleInput('*', display, setDisplay)}>*</button>
        <button id="divide" onClick={() => handleInput('/', display, setDisplay)}>/</button>
        <button id="decimal" onClick={() => handleInput('.', display, setDisplay)}>.</button>
        <button id="clear" onClick={() => setDisplay('0')}>AC</button>
        <button id="equals" onClick={() => calculateResult(display, setDisplay)}>=</button>
      </div>
  );
};

export default App;






