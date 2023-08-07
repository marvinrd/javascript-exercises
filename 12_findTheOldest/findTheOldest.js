const findTheOldest = function (array) {
  let oldestPerson = {};

  array.reduce((maxAge, person) => {
    let ageCurrent = 0;

    if (!person.yearOfDeath) {
      ageCurrent = (new Date().getFullYear()) - person.yearOfBirth;
    } else {
      ageCurrent = person.yearOfDeath - person.yearOfBirth;
    }

    if (maxAge < ageCurrent) {
      oldestPerson = person;
      return ageCurrent;
    } else {
      return maxAge;
    }
  }, 0);

  return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
