const reverseString = function (stringoo) {
  let lenghtoo = stringoo.length;
  let output ="";


  for (i = 0; i < lenghtoo; i++) {
    output = stringoo.substr(i,1).concat(output);
  }
  return output;
};

// let stringoo = "This is a string";
// let lenghtoo = stringoo.length;
// let output = "";
// for (i = 0; i < lenghtoo; i++) {
//    output = stringoo.substr(i,1).concat(output);
//      console.log(output)
//  }



// Do not edit below this line
module.exports = reverseString;
