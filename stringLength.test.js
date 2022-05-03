const stringLength = require('./stringLength');

test('Length is one', () => {
  expect(stringLength('a')).toBe(1);
});
