import React, { useState } from 'react';
import Button from './Button';
import Display from './Display';

function Calculator() {
  const [displayValue, setDisplayValue] = useState('0');

  const handleButtonClick = (value) => {
    // Clear
    if (value === 'C') {
      setDisplayValue('0');
      return;
    }
  
    // Equals - here, we'll later implement safe evaluation
    if (value === '=') {
      // Temporary placeholder for evaluation logic
      setDisplayValue('Result');
      return;
    }
  
    // Preventing multiple operators and decimal points
    if ((value === '.' && displayValue.includes('.')) ||
        (['+', '-', '*', '/'].includes(value) && ['+', '-', '*', '/'].includes(displayValue.slice(-1)))) {
      return;
    }
  
    // Preventing leading zeros
    if (displayValue === '0' && value === '0') {
      return;
    }
  
    // Update displayValue
    setDisplayValue((prevValue) => 
      prevValue === '0' || ['+', '-', '*', '/', 'Result'].includes(prevValue) ? value : prevValue + value
    );
  };
  
  
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
