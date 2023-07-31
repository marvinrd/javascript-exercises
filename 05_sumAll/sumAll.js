const sumAll = function(inputOne, inputTwo) {
    sum = 0;

    if (typeof inputOne != 'number' || typeof inputTwo != 'number' || inputOne < 0 || inputTwo < 0)
    {return 'ERROR'}

    if (inputOne > inputTwo) {
        let temp = inputOne;
        inputOne = inputTwo;
        inputTwo = temp;
    }

    for ( inputOne ; inputOne  < inputTwo +1 ; inputOne++)
    {
        sum = sum + inputOne;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
