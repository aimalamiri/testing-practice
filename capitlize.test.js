const capitlize = require('./capitlize');

test('Return "Hello" for "hello"', () => {
  expect(capitlize('hello')).toBe('Hello');
});

test('Return "Well" for "Well"', () => {
  expect(capitlize('Well')).toBe('Well');
});
