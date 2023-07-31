const leapYears = function (year) {
  // divide by 100
  // if there is a remainder, check if year is divisible by 4
  // if there is no remainder. check if year is divisible by 400

  if (year % 100 != 0) {
    if (year % 4 === 0) {
      return true;
    } else {
      return false;
    }
  } else if (year % 100 === 0) {
    if (year % 400 === 0) {
      return true;
    } else {
      return false;
    }
  }
  else {return false}
};

// Do not edit below this line
module.exports = leapYears;
