const getAge = function (birth, death) {
    if (!death) {
      death = new Date().getFullYear();
    }
    console.log(death-birth);
    return death - birth;
};
const findTheOldest = function (people) {
    return people.reduce((a, b) => {
        const oldestAge = getAge(a.yearOfBirth, a.yearOfDeath);
        console.log(a);
        const currentAge = getAge(b.yearOfBirth, b.yearOfDeath);
        console.log(b);
        return oldestAge < currentAge ? b : a;
    });
};

// Do not edit below this line
module.exports = findTheOldest;


/* 
const people = [
    {
    name: "Carly",
    yearOfBirth: 2018,
    },
    {
    name: "Ray",
    yearOfBirth: 1962,
    yearOfDeath: 2011,
    },
    {
    name: "Jane",
    yearOfBirth: 1912,
    yearOfDeath: 1941,
    },
]
*/
