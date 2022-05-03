const capitlize = (text) => {
  let capitale = '';
  text.split('').forEach((c, i) => {
    capitale += i === 0 ? c.toUpperCase() : c;
  });
  return capitale;  
};

module.exports = capitlize;
