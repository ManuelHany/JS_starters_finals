/*
let js = 'amazing';
  console.log(40 + 8 + 23 - 10);

console.log("Jonas");
console.log(23);

let firstName = "Matilda"
console.log(firstName)
console.log(firstName)
console.log(firstName)


let javascriptIsFun = true;
console.log(javascriptIsFun);

// console.log(typeof true);
console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof 'Jonas');

javascriptIsFun = 'YES';
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(null)
console.log(typeof null);


let age = 30;
age = 31;

const birthYear = 1991;
// birthYear = 1990;

// const job;

var job = 'programmer';
job = 'teatcher'

lastName = 'Schmedtmann';
console.log(lastName);
let x, y;
x = y = 25 - 10 - 5;
console.log(x, y)

console.log(`ana wenta 3adadna ${2} laken da mesh ma3nah eno lama 7ad yezeed haneb2a ${3}`)
console.log('String with \n\
multiple \n\
lines')
console.log(`string
with
multiple 
lines`);


const age = 15;
if (age >= 18) {
    console.log('Sarah can start driving license 🚗')
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`)
}

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jonas'));
console.log(Boolean({}));
console.log(Boolean(''))

// const money = 100;
const money = 0;
if (money) {
    console.log("Don't spend it all ;)");
} else {
    console.log('You should get a job!');
}

let height;
// let hiegh = 0;
if (height) {
    console.log('YAY! Height is efined');
} else {
    console.log('Height is UNDEFINED')
}
console.log(height)


const age = '18';
if (age === 18) console.log('You just became an adult :D (strict)');

if (age == 18) console.log('You just became an aduld :D (loose)');

const favourite = Number(prompt("What's your favourite number?"));
console.log(favourite);
console.log(typeof favourite);

// if (favourite == 23) {
//     console.log('Cool! 23 is an amazing number!')
// }
if (favourite === 23) {
    console.log('Cool! 23 is an amazing number!')
}

const day = 'saturday';

switch (day) {
    case 'monday': // day === 'monday'
      console.log('Plan course structure');
      console.log('Go to coding meetup');
      break;
    case 'tuesday':
      console.log('Prepare theory videos');
      break;
    case 'wednesday':
    case 'thursday':
      console.log('Write code examples');
      break;
    case 'friday':
      console.log('Record videos');
      break;
    case 'saturday' || 'sunday':
      console.log('Enjoy the weekend :D');
      break;
    default:
      console.log('Not a valid day!');
  }

  

age = 12
const drink = age >= 18 ? 'Wine 🍷' : 'water 💧'
console.log(drink)
console.log(`I like to drink ${age >= 18 ? 'Wine 🍷' : 'water 💧'}`)
*/
const bill = 40;
const tip = bill * (bill >= 50 && bill <= 300 ? 0.15 : 0.2);

console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`)