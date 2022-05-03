class Calculator {
  add(a, b) {
    return a + b;
  }

  subtract(a, b) {
    return a - b;
  }

  multiply(a, b) {
    return a * b;
  }

  divide(a, b) {
    if (a === 0) throw new Error('Can\'t divde 0 on a number!');
    if (b === 0) throw new Error('Can\'t divide a number on 0!');
    return a / b;
  }
}

module.exports = Calculator;
