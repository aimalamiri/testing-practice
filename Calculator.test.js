const Calculator = require("./Calculator");

let calculator = new Calculator();

describe.each([
  [2, 3, 5],
  [10, 20, 30],
  [25, 25, 50]
])('Check the addtion', (a, b, expected) => {
  test(`returns ${expected}`, () => {
    expect(calculator.add(a, b)).toEqual(expected);
  })
});

describe.each([
  [25, 5, 20],
  [100, 50, 50],
  [300, 30, 270]
])('Check the addtion', (a, b, expected) => {
  test(`returns ${expected}`, () => {
    expect(calculator.subtract(a, b)).toEqual(expected);
  })
});

describe.each([
  [10, 10, 100],
  [4, 15, 60],
  [8, 2, 16]
])('Check the addtion', (a, b, expected) => {
  test(`returns ${expected}`, () => {
    expect(calculator.multiply(a, b)).toEqual(expected);
  })
});

describe('Calculator tests', () => {
   test('For 100 / 5  return 20', () => {
     expect(calculator.divide(100, 5)).toEqual(20);
   });
   
   test('For 0 / 5  throw an Error', () => {
     expect(() => calculator.divide(0, 5)).toThrow();
   });
   
   test('For 100 / 0  throw an Error', () => {
     expect(() => calculator.divide(100, 0)).toThrow();
   });
});
