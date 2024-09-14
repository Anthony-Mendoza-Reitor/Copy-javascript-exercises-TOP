const palindromes = function (word) {

    // This is a variable containing all the alphanumerical char
    const alphanumerical = 'abcdefghijklmnopqrstuvwxyz0123456789';

    const splitCharacters = word 
    .toLowerCase()
    .split('')
    .filter((character)=>alphanumerical.includes(character))
    .join('');
    const reversedword = splitCharacters.split('').reverse().join('');
    return reversedword === splitCharacters;
};

// Do not edit below this line
module.exports = palindromes;
