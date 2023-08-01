const palindromes = function () {
  let countChars = arguments[0].length;
  let origString = arguments[0].toLowerCase();
  let leftToRight = "";
  let rightToLeft = "";

  for (i = 0; i < countChars; i++) {
    if (
      (origString.charCodeAt(i) > 96 && origString.charCodeAt(i) < 123) ||
      (origString.charCodeAt(i) > 47 && origString.charCodeAt(i) < 58)
    ) {
      leftToRight = leftToRight + origString[i];
      rightToLeft = origString[i] + rightToLeft;
    }
  }
  let output = leftToRight === rightToLeft;
  return output;
};

// Do not edit below this line
module.exports = palindromes;
