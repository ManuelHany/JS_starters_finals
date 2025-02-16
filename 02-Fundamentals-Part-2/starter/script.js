'use strict';
/*

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriverLicense = true;
if (hasDriversLicense) console.log('I can Drive :D!')


// Function Declarations vs. Expressions

// Function declaration
function calcAge1(birthYear) {
    return 2037 - birthYear;
  }
  const age1 = calcAge1(1991);
  
  // Function expression
  const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
  }
  const age2 = calcAge2(1991);
  
  console.log(age1, age2);


// Arrow functions
const calcAge3 = birthYeah => 2037 - birthYeah;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYeah, firstName) => {
  const age = 2037 - birthYeah;
  const retirement = 65 - age;
  // return retirement;
  return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1991, 'Jonas')); console.log(yearsUntilRetirement(1980, 'Bob'));

const calcAverage = (s1, s2, s3) => (s1 + s2 + s3) / 3;
// const scoreDolphins = calcAverage(44,23, 71);
const scoreDolphins = calcAverage(85, 54, 41);
// const scoreKoalas = calcAverage(65, 54, 49);
const scoreKoalas = calcAverage(23, 34, 27);
checkWinner(scoreDolphins, scoreKoalas);

function checkWinner(scoreDolphins, scoreKoalas) {
    if (scoreDolphins >= (2 * scoreKoalas)) {
        console.log(`Dolphins win (${scoreDolphins} vs. ${scoreKoalas})`);
    } else if (scoreKoalas >= (2 * scoreDolphins)) {
        console.log(`Koalas win (${scoreKoalas} vs. ${scoreDolphins})`);
    } else {
        console.log("No team wins...")
    }
}


const jonas = {
  firstName: 'Jonas',
  lastName: 'Schmedtmann',
  age: 2037 - 1991,
  job: 'teacher',
  friends: ['Michael', 'Peter', 'Steven']
};
*/

const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    birthYeah: 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriversLicense: true,

    calcAge: function () {
        this.age = 2037 - this.birthYeah;
        return this.age;
  },

    calcSummery: function () {
        return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license`
    }
}

console.log(jonas.calcSummery())