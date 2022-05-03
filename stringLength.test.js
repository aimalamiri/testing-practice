const stringLength = require('./stringLength');

test('Length is one', () => {
  expect(stringLength('a')).toBe(1);
});
test('Throw an error if the length is more then 10', () => {
  expect(() => stringLength('onetwothreefour')).toThrow();
});

test('Throw an error if the length is less then 1', () => {
  expect(() => stringLength('')).toThrow();
});

