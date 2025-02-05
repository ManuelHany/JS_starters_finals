// Coding Challenge #1
// Mark and John are trying to compare their BMI (Body Mass Index), which is
// calculated using the formula:
// BMI = mass / height ** 2 = mass / (height * height) (mass in kg
// and height in meter).
// Your tasks:
// 1. 2. 3. Store Mark's and John's mass and height in variables
// Calculate both their BMIs using the formula (you can even implement both
// versions)
// Create a Boolean variable 'markHigherBMI' containing information about
// whether Mark has a higher BMI than John.
// Test data:
// § Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
// m tall.
// § Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
// m tall.
// GOOD LUCK 😀
let markMass = 50;
let johnMass = 60;
let markHeight = 1.70;  
let johnHeight = 1.90;  
let markBMI, johnBMI, markHigherBMI;

function calculate_bmi(mass, height) {
    return mass / (height * height);
}

markBMI = calculate_bmi(markMass, markHeight);
johnBMI = calculate_bmi(johnMass, johnHeight);

console.log(markBMI, johnBMI);
markHigherBMI = markBMI > johnBMI;

console.log("Mark has a higher BMI:", markHigherBMI);

