const Calculator = require("./Calculator");

describe('Calculator tests', () => {
  let calculator;

  beforeEach(() => {
    calculator = new Calculator();
  })

  test('For 2 + 3 return 5', () => {
     expect(calculator.add(2, 3)).toEqual(5);
     expect(calculator.add(10, 20)).toEqual(30);
  });

  test('For 10 + 20 return 30', () => {
     expect(calculator.add(10, 20)).toEqual(30);
  });
  
  test('For 25 + 25 return 50', () => {
     expect(calculator.add(25, 25)).toEqual(50);
  });

  test('For 25 - 5 return 20', () => {
     expect(calculator.subtract(25, 5)).toEqual(20);
  });
  
  test('For 100 - 50 return 50', () => {
     expect(calculator.subtract(100, 50)).toEqual(50);
  });
  
  test('For 300 - 30 return 270', () => {
     expect(calculator.subtract(300, 30)).toEqual(270);
  });

   test('For 5 * 6  return 30', () => {
     expect(calculator.multiply(5, 6)).toEqual(30);
   });
   
   test('For 10 * 10  return 100', () => {
     expect(calculator.multiply(10, 10)).toEqual(100);
   });
   
   test('For 4 * 15  return 60', () => {
     expect(calculator.multiply(4, 15)).toEqual(60);
   });
  
});
