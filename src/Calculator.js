import React, { useState } from 'react';
import Button from './Button';
import Display from './Display';
import { evaluate } from 'mathjs';


function Calculator() {
  const [displayValue, setDisplayValue] = useState('0');

  const handleButtonClick = (value) => {
    // Clear
    if (value === 'C') {
      setDisplayValue('0');
      return;
    }
  
    // Handle equals
    if (value === '=') {
      try {
        const result = evaluate(displayValue);
        setDisplayValue(result.toString());
      } catch (error) {
        setDisplayValue('Error');
      }
      return;
    }
  
    // Building the expression
    setDisplayValue((prevValue) => {
      // Check if the last character is an operator
      const isLastCharOperator = ['+', '-', '*', '/'].includes(prevValue.slice(-1));
      const isSecondLastCharOperator = ['+', '*', '/'].includes(prevValue.slice(-2, -1));
  
      // Handling consecutive operators
      if (['+', '*', '/'].includes(value)) {
        if (isLastCharOperator) {
          // Replace last operator or operator followed by a minus
          return isSecondLastCharOperator ? prevValue.slice(0, -2) + value : prevValue.slice(0, -1) + value;
        }
      } else if (value === '-' && ['+', '*', '/'].includes(prevValue.slice(-1))) {
        // Allow negative sign after another operator
        return prevValue + value;
      }
  
      // Preventing double decimals in a single number
      if (value === '.' && prevValue.split(/[\+\-\*\/]/).pop().includes('.')) {
        return prevValue;
      }
  
      // Append the value
      return prevValue === '0' && value !== '.' ? value : prevValue + value;
    });
  };
  
  


  // calculator face starts here  
  
  return (
    <div className="max-w-xs mx-auto my-10">
     <Display value={displayValue} />


      <div className="grid grid-cols-4 gap-2">

<Button id="one" label="1" onClick={() => handleButtonClick('1')} />
<Button id="two" label="2" onClick={() => handleButtonClick('2')} />
<Button id="three" label="3" onClick={() => handleButtonClick('3')} />
<Button id="add" label="+" onClick={() => handleButtonClick('+')} />
<Button id="four" label="4" onClick={() => handleButtonClick('4')} />
<Button id="five" label="5" onClick={() => handleButtonClick('5')} />
<Button id="six" label="6" onClick={() => handleButtonClick('6')} />
<Button id="subtract" label="-" onClick={() => handleButtonClick('-')} />
<Button id="seven" label="7" onClick={() => handleButtonClick('7')} />
<Button id="eight" label="8" onClick={() => handleButtonClick('8')} />
<Button id="nine" label="9" onClick={() => handleButtonClick('9')} />
<Button id="multiply" label="*" onClick={() => handleButtonClick('*')} />
<Button id="clear" label="C" onClick={() => handleButtonClick('C')} />
<Button id="zero" label="0" onClick={() => handleButtonClick('0')} />
<Button id="equals" label="=" onClick={() => handleButtonClick('=')} />
<Button id="divide" label="/" onClick={() => handleButtonClick('/')} />
<Button id="decimal" label="." onClick={() => handleButtonClick('.')} />



      </div>
    </div>
    // calculator face ends here
  );
}

export default Calculator;
