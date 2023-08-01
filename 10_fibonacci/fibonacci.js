const fibonacci = function () {
  let input = arguments[0];

  if (input < 0) {
    return "OOPS";
  } else if (typeof arguments[0] === "string") {
    input = parseInt(arguments[0]);
  }

  if (input === 0) {
    return 0;
  } else if (input === 1) {
    return 1;
  } else if (input === 2) {
    return 1;
  } else {
    let output = 0;
    let first = 1;
    let second = 1;
    for (i = 3; i < input + 1; i++) {
      output = first + second;
      second = first;
      first = output;
    }
    return output;
  }
};

// Do not edit below this line
module.exports = fibonacci;
