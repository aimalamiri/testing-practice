const capitlize = (text) => {
  if (typeof text === 'string') {
    console.log("Its string......................")
    let capitale = '';
    text.split('').forEach((c, i) => {
      capitale += i === 0 ? c.toUpperCase() : c;
    });
    return capitale;
  }
  return text;
};

module.exports = capitlize;
