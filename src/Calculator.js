import React, { useState } from 'react';
import Button from './Button';
import Display from './Display';

function Calculator() {
    

//---------------------------------------------------------------------------------------------//
    const [previousInput, setPreviousInput] = useState('');
    const [currentInput, setCurrentInput] = useState('');
    const [operation, setOperation] = useState(null);
    const [expression, setExpression] = useState('');

    const handleButtonClick = (value) => {
        if (value >= '0' && value <= '9') {
            if (value === '0' && currentInput === '0') {
              // Prevent adding multiple leading zeros
              return;
            } else if (currentInput === '0') {
              // Replace the leading zero if it's the only character
              setCurrentInput(value);
            } else {
              // Append the number to the current input
              setCurrentInput(prev => prev + value);
            }
            setExpression(prev => prev.endsWith(' 0') && value === '0' ? prev : prev + value);
          } else if (value === '.') {
          if (!currentInput.includes('.')) {
            setCurrentInput(currentInput => currentInput ? currentInput + value : '0.');
            setExpression(expression => expression.endsWith('.') ? expression : expression + value);
          }
        } else if (value === 'C') {
          setCurrentInput('');
          setPreviousInput('');
          setOperation(null);
          setExpression('');
        } else if (value === '=') {
          performCalculation();
          return; // Prevent further processing
        } else if (["+", "-", "*", "/"].includes(value)) {
          handleOperator(value);
          setExpression(prev => prev.trim() + " " + value + " ");
        }
      };



      //---------------------------------------------------------------------------------------------//


      const handleOperator = (newOperator) => {
        if (currentInput === '-' && newOperator !== '-') {
          // Change the operation if only a negative sign is present
          setOperation(newOperator);
          setExpression(prev => prev.slice(0, -1) + newOperator + " ");
        } else {
          if (currentInput && currentInput !== '-') {
            if (previousInput) {
              performCalculation();
              setPreviousInput(currentInput);
              setCurrentInput('');
            } else {
              setPreviousInput(currentInput);
              setCurrentInput('');
            }
          } else if (!currentInput && operation) {
            // Replace the current operation if no input is present
            setExpression(prev => prev.slice(0, -3) + newOperator + " ");
          }
          setOperation(newOperator);
        }
      };
      
      




//---------------------------------------------------------------------------------------------//




const performCalculation = () => {
    if (operation && previousInput) {
      const result = calculate(previousInput, currentInput || '0', operation);
      setCurrentInput(result);
      setPreviousInput(result);
      setOperation(null);
      setExpression(result);
    }
  };
  
  
  

//---------------------------------------------------------------------------------------------//

    const calculate = (num1, num2, operation) => {
      const firstNum = parseFloat(num1);
      const secondNum = parseFloat(num2);
      switch (operation) {
        case '+': return String(firstNum + secondNum);
        case '-': return String(firstNum - secondNum);
        case '*': return String(firstNum * secondNum);
        case '/': return String(firstNum / secondNum);
        default: return '';
      }
    };

//---------------------------------------------------------------------------------------------//

  return (
    <div className="max-w-xs mx-auto my-10">
   <div id="display">
    <Display value={expression || '0'} />
    </div>

    <div className="grid grid-cols-4 gap-2">
      {/* Number Buttons */}
      <Button label="9" id="nine" onClick={() => handleButtonClick('9')} />
      <Button label="8" id="eight" onClick={() => handleButtonClick('8')} />
      <Button label="7" id="seven" onClick={() => handleButtonClick('7')} />
      <Button label="6" id="six" onClick={() => handleButtonClick('6')} />
      <Button label="5" id="five" onClick={() => handleButtonClick('5')} />
      <Button label="4" id="four" onClick={() => handleButtonClick('4')} />
      <Button label="3" id="three" onClick={() => handleButtonClick('3')} />
      <Button label="2" id="two" onClick={() => handleButtonClick('2')} />
      <Button label="1" id="one" onClick={() => handleButtonClick('1')} />
      <Button label="0" id="zero" onClick={() => handleButtonClick('0')} />

        {/* Operator Buttons */}
      <Button label="." id="decimal" onClick={() => handleButtonClick('.')} />
      <Button label="=" id="equals" onClick={() => handleButtonClick('=')} />
        <Button label="+" id="add" onClick={() => handleButtonClick('+')} />
        <Button label="-" id="subtract" onClick={() => handleButtonClick('-')} />
        <Button label="*" id="multiply" onClick={() => handleButtonClick('*')} />
        <Button label="/" id="divide" onClick={() => handleButtonClick('/')} />
        <Button label="C" id="clear" onClick={() => handleButtonClick('C')} />


    </div>
  </div>
  );
}

export default Calculator;
