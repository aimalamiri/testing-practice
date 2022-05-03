const capitlize = require('./capitlize');

test('Return "Hello" for "hello"', () => {
  expect(capitlize('hello')).toBe('Hello');
});

test('Return "Well" for "Well"', () => {
  expect(capitlize('Well')).toBe('Well');
});

test('Return "2" for "2"', () => {
  expect(capitlize(2)).toBe(2);
});
