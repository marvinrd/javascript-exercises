const repeatString = function (strangoo, numeroo) {
  let outputoo = "";
  if (numeroo < 0) {return "ERROR"}
  for (i = 0; i < numeroo; i++) {
    outputoo += strangoo;
  }
  return outputoo;
};

// Do not edit below this line
module.exports = repeatString;
