/**
 * Comprehensive unit tests for the Node.js CLI Calculator
 * Tests all operations: addition, subtraction, multiplication, division
 * Includes edge cases and examples from calc-basic-operations.png
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

    test('should throw error for division by zero through calculate', () => {
      expect(() => calculate('divide', [10, 0])).toThrow('Division by zero is not allowed');
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
  });
});
