# Calculator Tests

## Test Suite Overview

This test suite provides comprehensive coverage for the Node.js CLI Calculator application.

## Running Tests

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage report
npm run test:coverage
```

## Test Coverage

### Operations Tested
- ✅ Addition (+)
- ✅ Subtraction (-)
- ✅ Multiplication (*)
- ✅ Division (/)

### Test Categories

1. **Basic Operations (48 tests total)**
   - Addition: 8 tests
   - Subtraction: 7 tests
   - Multiplication: 9 tests
   - Division: 10 tests
   - Calculate function: 6 tests
   - Edge cases: 4 tests
   - Real-world examples: 4 tests

2. **Examples from calc-basic-operations.png**
   - ✅ 2 + 3 = 5
   - ✅ 10 - 4 = 6
   - ✅ 45 * 2 = 90
   - ✅ 20 / 5 = 4

3. **Edge Cases Covered**
   - Division by zero (throws error)
   - Negative numbers
   - Decimal precision
   - Large numbers
   - Zero handling
   - Empty/single arguments
   - Multiple sequential operations

4. **Real-world Scenarios**
   - Restaurant bill splitting
   - Tax calculations
   - Compound interest
   - Change calculations

## Test Results

All 48 tests pass successfully! ✨
