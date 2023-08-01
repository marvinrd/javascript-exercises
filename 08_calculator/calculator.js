const add = function () {
  let count = arguments.length;
  let output = 0;
  for (i = 0; i < count; i++) {
    output = output + arguments[i];
  }
  return output;
};

const subtract = function () {
  let output = arguments[0] - arguments[1];

  return output;
};

const sum = function () {
  let count = arguments[0].length;
  let output = 0;
  for (i = 0; i < count; i++) {
    output = output + arguments[0][i];
  }
  return output;
};

const multiply = function () {
  let count = arguments[0].length;
  let output = 1;
  for (i = 0; i < count; i++) {
    output = output * arguments[0][i];
  }
  return output;
};

const power = function () {
  let output = Math.pow(arguments[0], arguments[1]);
  return output;
};

const factorial = function () {
  let output = 1;
  if (arguments[0] === 0 || arguments[0] === 1) {
    return output;
  } else {
    for (i = 1; i < arguments[0] + 1; i++) {
      output = output * i;
    }
    return output;
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
