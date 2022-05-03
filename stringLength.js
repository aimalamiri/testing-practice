const stringLength = (string) => {
  if (string.length > 0 && string.length < 10) return string.length;
  throw new Error("String length is less then 1 or greater then 10");
};

module.exports = stringLength;
