const fibonacci = function(num) {
    let number
    //This verifies that user input is int and it's in range
    if (typeof num !== 'number'){
        number = parseInt(num)
    }
    else {
        number = num
    }
    if (number < 0) return "Negatve Input"
    if (number == 0) return 0;

    let firstPrev = 1; 
    let secondPrev = 0;
    for (let i = 2; i <= number; i++){
        let actualnum = firstPrev + secondPrev; // Adds 1st and 2nd
        secondPrev = firstPrev; // rotates 1st value to 2nd
        firstPrev = actualnum;  // rotates the sum of the 2 values to 1st
    }
    return firstPrev
};

// Do not edit below this line
module.exports = fibonacci;
