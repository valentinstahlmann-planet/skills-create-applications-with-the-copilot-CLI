/**
 * Comprehensive unit tests for the Node.js CLI Calculator
 * Tests all operations: addition, subtraction, multiplication, division, modulo, power, square root
 * Includes edge cases and examples from calc-basic-operations.png and calc-extended-operations.png
 */

const { operations, calculate } = require('../calculator');

describe('Calculator Operations', () => {
  
  // ============ ADDITION TESTS ============
  describe('Addition', () => {
    test('should add two positive numbers (example: 2 + 3 = 5)', () => {
      expect(operations.add(2, 3)).toBe(5);
    });

    test('should add multiple numbers', () => {
      expect(operations.add(1, 2, 3, 4, 5)).toBe(15);
    });

    test('should add negative numbers', () => {
      expect(operations.add(-5, -3)).toBe(-8);
    });

    test('should add positive and negative numbers', () => {
      expect(operations.add(10, -3)).toBe(7);
    });

    test('should add decimal numbers', () => {
      expect(operations.add(1.5, 2.5)).toBe(4);
    });

    test('should handle zero', () => {
      expect(operations.add(0, 0)).toBe(0);
      expect(operations.add(5, 0)).toBe(5);
    });

    test('should handle single number', () => {
      expect(operations.add(42)).toBe(42);
    });

    test('should handle empty arguments', () => {
      expect(operations.add()).toBe(0);
    });
  });

  // ============ SUBTRACTION TESTS ============
  describe('Subtraction', () => {
    test('should subtract two positive numbers (example: 10 - 4 = 6)', () => {
      expect(operations.subtract(10, 4)).toBe(6);
    });

    test('should subtract multiple numbers sequentially', () => {
      expect(operations.subtract(20, 5, 3, 2)).toBe(10);
    });

    test('should subtract negative numbers', () => {
      expect(operations.subtract(5, -3)).toBe(8);
    });

    test('should handle negative result', () => {
      expect(operations.subtract(3, 10)).toBe(-7);
    });

    test('should subtract decimal numbers', () => {
      expect(operations.subtract(5.5, 2.3)).toBeCloseTo(3.2);
    });

    test('should handle zero', () => {
      expect(operations.subtract(10, 0)).toBe(10);
      expect(operations.subtract(0, 5)).toBe(-5);
    });

    test('should handle single number', () => {
      expect(operations.subtract(42)).toBe(42);
    });
  });

  // ============ MULTIPLICATION TESTS ============
  describe('Multiplication', () => {
    test('should multiply two positive numbers (example: 45 * 2 = 90)', () => {
      expect(operations.multiply(45, 2)).toBe(90);
    });

    test('should multiply multiple numbers', () => {
      expect(operations.multiply(2, 3, 4)).toBe(24);
    });

    test('should multiply negative numbers', () => {
      expect(operations.multiply(-5, -3)).toBe(15);
      expect(operations.multiply(-5, 3)).toBe(-15);
    });

    test('should multiply decimal numbers', () => {
      expect(operations.multiply(2.5, 4)).toBe(10);
    });

    test('should handle zero', () => {
      expect(operations.multiply(5, 0)).toBe(0);
      expect(operations.multiply(0, 0)).toBe(0);
    });

    test('should handle one', () => {
      expect(operations.multiply(42, 1)).toBe(42);
    });

    test('should handle single number', () => {
      expect(operations.multiply(42)).toBe(42);
    });

    test('should handle empty arguments', () => {
      expect(operations.multiply()).toBe(1);
    });

    test('should multiply large numbers', () => {
      expect(operations.multiply(1000, 1000)).toBe(1000000);
    });
  });

  // ============ DIVISION TESTS ============
  describe('Division', () => {
    test('should divide two positive numbers (example: 20 / 5 = 4)', () => {
      expect(operations.divide(20, 5)).toBe(4);
    });

    test('should divide multiple numbers sequentially', () => {
      expect(operations.divide(100, 2, 5)).toBe(10);
    });

    test('should divide negative numbers', () => {
      expect(operations.divide(-20, 4)).toBe(-5);
      expect(operations.divide(20, -4)).toBe(-5);
      expect(operations.divide(-20, -4)).toBe(5);
    });

    test('should divide decimal numbers', () => {
      expect(operations.divide(10, 4)).toBe(2.5);
    });

    test('should handle division resulting in decimal', () => {
      expect(operations.divide(7, 2)).toBe(3.5);
    });

    test('should handle zero dividend', () => {
      expect(operations.divide(0, 5)).toBe(0);
    });

    test('should throw error for division by zero', () => {
      expect(() => operations.divide(10, 0)).toThrow('Division by zero is not allowed');
    });

    test('should throw error for division by zero in sequence', () => {
      expect(() => operations.divide(100, 2, 0, 5)).toThrow('Division by zero is not allowed');
    });

    test('should handle single number', () => {
      expect(operations.divide(42)).toBe(42);
    });

    test('should divide large numbers', () => {
      expect(operations.divide(1000000, 1000)).toBe(1000);
    });
  });

  // ============ MODULO TESTS ============
  describe('Modulo', () => {
    test('should calculate modulo of two positive numbers (example: 5 % 2 = 1)', () => {
      expect(operations.modulo(5, 2)).toBe(1);
    });

    test('should calculate modulo with larger numbers', () => {
      expect(operations.modulo(10, 3)).toBe(1);
      expect(operations.modulo(17, 5)).toBe(2);
    });

    test('should return 0 when dividend is divisible by divisor', () => {
      expect(operations.modulo(10, 5)).toBe(0);
      expect(operations.modulo(20, 4)).toBe(0);
    });

    test('should handle modulo with negative dividend', () => {
      expect(operations.modulo(-10, 3)).toBe(-1);
      expect(operations.modulo(-5, 2)).toBe(-1);
    });

    test('should handle modulo with negative divisor', () => {
      expect(operations.modulo(10, -3)).toBe(1);
      expect(operations.modulo(5, -2)).toBe(1);
    });

    test('should handle both negative numbers', () => {
      expect(operations.modulo(-10, -3)).toBe(-1);
    });

    test('should handle zero dividend', () => {
      expect(operations.modulo(0, 5)).toBe(0);
    });

    test('should throw error for modulo by zero', () => {
      expect(() => operations.modulo(10, 0)).toThrow('Modulo by zero is not allowed');
    });

    test('should handle decimal numbers', () => {
      expect(operations.modulo(5.5, 2)).toBeCloseTo(1.5);
    });

    test('should handle large numbers', () => {
      expect(operations.modulo(1000000, 7)).toBe(1);
    });
  });

  // ============ POWER TESTS ============
  describe('Power', () => {
    test('should calculate power of two numbers (example: 2 ^ 3 = 8)', () => {
      expect(operations.power(2, 3)).toBe(8);
    });

    test('should calculate power with positive integers', () => {
      expect(operations.power(3, 2)).toBe(9);
      expect(operations.power(5, 3)).toBe(125);
      expect(operations.power(10, 2)).toBe(100);
    });

    test('should handle power of 0', () => {
      expect(operations.power(5, 0)).toBe(1);
      expect(operations.power(100, 0)).toBe(1);
    });

    test('should handle base of 0', () => {
      expect(operations.power(0, 5)).toBe(0);
      expect(operations.power(0, 1)).toBe(0);
    });

    test('should handle power of 1', () => {
      expect(operations.power(5, 1)).toBe(5);
      expect(operations.power(100, 1)).toBe(100);
    });

    test('should handle base of 1', () => {
      expect(operations.power(1, 5)).toBe(1);
      expect(operations.power(1, 100)).toBe(1);
    });

    test('should handle negative exponent (fractional result)', () => {
      expect(operations.power(2, -1)).toBe(0.5);
      expect(operations.power(2, -2)).toBe(0.25);
      expect(operations.power(10, -1)).toBe(0.1);
    });

    test('should handle negative base with positive exponent', () => {
      expect(operations.power(-2, 3)).toBe(-8);
      expect(operations.power(-2, 2)).toBe(4);
      expect(operations.power(-3, 3)).toBe(-27);
    });

    test('should handle decimal base', () => {
      expect(operations.power(2.5, 2)).toBe(6.25);
      expect(operations.power(1.5, 3)).toBe(3.375);
    });

    test('should handle decimal exponent (roots)', () => {
      expect(operations.power(4, 0.5)).toBe(2);
      expect(operations.power(8, 1/3)).toBeCloseTo(2, 10);
    });

    test('should handle large exponents', () => {
      expect(operations.power(2, 10)).toBe(1024);
      expect(operations.power(10, 6)).toBe(1000000);
    });
  });

  // ============ SQUARE ROOT TESTS ============
  describe('Square Root', () => {
    test('should calculate square root of a number (example: √16 = 4)', () => {
      expect(operations.squareRoot(16)).toBe(4);
    });

    test('should calculate square root of perfect squares', () => {
      expect(operations.squareRoot(4)).toBe(2);
      expect(operations.squareRoot(9)).toBe(3);
      expect(operations.squareRoot(25)).toBe(5);
      expect(operations.squareRoot(64)).toBe(8);
      expect(operations.squareRoot(100)).toBe(10);
    });

    test('should calculate square root of non-perfect squares', () => {
      expect(operations.squareRoot(2)).toBeCloseTo(1.414213, 5);
      expect(operations.squareRoot(3)).toBeCloseTo(1.732050, 5);
      expect(operations.squareRoot(10)).toBeCloseTo(3.162277, 5);
    });

    test('should handle square root of 0', () => {
      expect(operations.squareRoot(0)).toBe(0);
    });

    test('should handle square root of 1', () => {
      expect(operations.squareRoot(1)).toBe(1);
    });

    test('should throw error for square root of negative numbers', () => {
      expect(() => operations.squareRoot(-4)).toThrow('Square root of negative numbers is not supported');
      expect(() => operations.squareRoot(-1)).toThrow('Square root of negative numbers is not supported');
      expect(() => operations.squareRoot(-100)).toThrow('Square root of negative numbers is not supported');
    });

    test('should handle decimal numbers', () => {
      expect(operations.squareRoot(2.25)).toBe(1.5);
      expect(operations.squareRoot(6.25)).toBe(2.5);
      expect(operations.squareRoot(0.25)).toBe(0.5);
    });

    test('should handle large numbers', () => {
      expect(operations.squareRoot(10000)).toBe(100);
      expect(operations.squareRoot(1000000)).toBe(1000);
    });

    test('should handle very small positive numbers', () => {
      expect(operations.squareRoot(0.01)).toBe(0.1);
      expect(operations.squareRoot(0.0001)).toBe(0.01);
    });
  });

  // ============ CALCULATE FUNCTION TESTS ============
  describe('Calculate Function', () => {
    test('should calculate addition', () => {
      expect(calculate('add', [2, 3])).toBe(5);
    });

    test('should calculate subtraction', () => {
      expect(calculate('subtract', [10, 4])).toBe(6);
    });

    test('should calculate multiplication', () => {
      expect(calculate('multiply', [45, 2])).toBe(90);
    });

    test('should calculate division', () => {
      expect(calculate('divide', [20, 5])).toBe(4);
    });

    test('should calculate modulo', () => {
      expect(calculate('modulo', [5, 2])).toBe(1);
    });

    test('should calculate power', () => {
      expect(calculate('power', [2, 3])).toBe(8);
    });

    test('should calculate square root', () => {
      expect(calculate('squareRoot', [16])).toBe(4);
    });

    test('should throw error for division by zero through calculate', () => {
      expect(() => calculate('divide', [10, 0])).toThrow('Division by zero is not allowed');
    });

    test('should throw error for modulo by zero through calculate', () => {
      expect(() => calculate('modulo', [10, 0])).toThrow('Modulo by zero is not allowed');
    });

    test('should throw error for square root of negative through calculate', () => {
      expect(() => calculate('squareRoot', [-4])).toThrow('Square root of negative numbers is not supported');
    });

    test('should handle multiple numbers through calculate', () => {
      expect(calculate('add', [1, 2, 3, 4, 5])).toBe(15);
      expect(calculate('multiply', [2, 3, 4])).toBe(24);
    });
  });

  // ============ EDGE CASES & SPECIAL SCENARIOS ============
  describe('Edge Cases', () => {
    test('should handle very small decimal numbers', () => {
      expect(operations.add(0.1, 0.2)).toBeCloseTo(0.3);
    });

    test('should handle very large numbers', () => {
      expect(operations.add(999999999, 1)).toBe(1000000000);
      expect(operations.multiply(1000000, 1000000)).toBe(1000000000000);
    });

    test('should handle mixed operations with negative and positive', () => {
      expect(operations.add(-10, 20, -5, 15)).toBe(20);
      expect(operations.multiply(-2, -3, -4)).toBe(-24);
    });

    test('should maintain precision with decimals', () => {
      expect(operations.divide(10, 3)).toBeCloseTo(3.333333, 5);
    });
  });

  // ============ REAL-WORLD EXAMPLES ============
  describe('Real-world calculation examples', () => {
    test('should calculate restaurant bill split', () => {
      const total = 125.50;
      const people = 5;
      expect(operations.divide(total, people)).toBe(25.1);
    });

    test('should calculate total price with tax', () => {
      const price = 100;
      const taxRate = 1.08;
      expect(operations.multiply(price, taxRate)).toBe(108);
    });

    test('should calculate compound interest factor', () => {
      expect(operations.multiply(1.05, 1.05, 1.05)).toBeCloseTo(1.157625);
    });

    test('should calculate change from purchase', () => {
      const paid = 50;
      const cost = 37.25;
      expect(operations.subtract(paid, cost)).toBe(12.75);
    });

    test('should calculate if a number is even using modulo', () => {
      expect(operations.modulo(10, 2)).toBe(0); // even
      expect(operations.modulo(11, 2)).toBe(1); // odd
    });

    test('should calculate compound growth with power', () => {
      const principal = 1000;
      const rate = 1.05; // 5% growth
      const years = 3;
      const growth = operations.power(rate, years);
      expect(operations.multiply(principal, growth)).toBeCloseTo(1157.625);
    });

    test('should calculate distance using square root (Pythagorean theorem)', () => {
      // For a right triangle with sides 3 and 4, hypotenuse = √(9+16) = √25 = 5
      const sideA = 3;
      const sideB = 4;
      const sumOfSquares = operations.add(
        operations.power(sideA, 2),
        operations.power(sideB, 2)
      );
      expect(operations.squareRoot(sumOfSquares)).toBe(5);
    });

    test('should check leap year using modulo', () => {
      // Year divisible by 4 is leap year
      expect(operations.modulo(2024, 4)).toBe(0); // leap year
      expect(operations.modulo(2023, 4)).toBe(3); // not leap year
    });
  });
});
