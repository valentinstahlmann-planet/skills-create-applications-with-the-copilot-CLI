#!/usr/bin/env node

/**
 * Node.js CLI Calculator
 * 
 * Supports the following operations:
 * - Addition (+): Add two or more numbers
 * - Subtraction (-): Subtract numbers from a starting value
 * - Multiplication (*): Multiply two or more numbers
 * - Division (/): Divide numbers (includes division by zero error handling)
 */

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Calculator operations
const operations = {
  /**
   * Addition: Add two or more numbers
   */
  add: (...numbers) => numbers.reduce((sum, num) => sum + num, 0),
  
  /**
   * Subtraction: Subtract numbers from a starting value
   */
  subtract: (...numbers) => numbers.reduce((diff, num, index) => 
    index === 0 ? num : diff - num
  ),
  
  /**
   * Multiplication: Multiply two or more numbers
   */
  multiply: (...numbers) => numbers.reduce((product, num) => product * num, 1),
  
  /**
   * Division: Divide numbers (with division by zero error handling)
   */
  divide: (...numbers) => {
    return numbers.reduce((quotient, num, index) => {
      if (index !== 0 && num === 0) {
        throw new Error('Division by zero is not allowed');
      }
      return index === 0 ? num : quotient / num;
    });
  }
};

function calculate(operation, numbers) {
  try {
    const result = operations[operation](...numbers);
    return result;
  } catch (error) {
    throw error;
  }
}

// Export for testing
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { operations, calculate };
}

function displayMenu() {
  console.log('\n=== Node.js CLI Calculator ===');
  console.log('Supported operations:');
  console.log('  + : Addition');
  console.log('  - : Subtraction');
  console.log('  * : Multiplication');
  console.log('  / : Division');
  console.log('  c : Clear/New calculation');
  console.log('  q : Quit');
  console.log('=============================\n');
}

function promptUser() {
  rl.question('Enter operation (+, -, *, /) or q to quit: ', (operation) => {
    operation = operation.trim().toLowerCase();
    
    if (operation === 'q') {
      console.log('Thank you for using the calculator. Goodbye!');
      rl.close();
      return;
    }
    
    if (operation === 'c') {
      console.log('Calculator cleared.');
      promptUser();
      return;
    }
    
    const opMap = {
      '+': 'add',
      '-': 'subtract',
      '*': 'multiply',
      '/': 'divide'
    };
    
    if (!opMap[operation]) {
      console.log('Invalid operation. Please try again.');
      promptUser();
      return;
    }
    
    rl.question('Enter numbers separated by spaces: ', (input) => {
      const numbers = input.trim().split(/\s+/).map(Number);
      
      if (numbers.some(isNaN)) {
        console.log('Invalid input. Please enter valid numbers.');
        promptUser();
        return;
      }
      
      if (numbers.length < 2) {
        console.log('Please enter at least two numbers.');
        promptUser();
        return;
      }
      
      try {
        const result = calculate(opMap[operation], numbers);
        console.log(`\nResult: ${result}\n`);
      } catch (error) {
        console.log(`\nError: ${error.message}\n`);
      }
      
      promptUser();
    });
  });
}

// Only run the CLI if this is the main module
if (require.main === module) {
  displayMenu();
  promptUser();
}
