// Your code goes here

let inputsMoney = prompt('inputs initial amount of money');
let inputsYears = prompt('inputs number of years');
let inputsPercentage = prompt('inputs percentage of a year');

const hundred = 100;
const floatDot = 2;

const MinInputsMoney = 1000;
const MinInputsYears = 1;
const MaxInputsPercentage = 100;

inputsMoney = Number(inputsMoney);
inputsYears = Number(inputsYears);
inputsPercentage = Number(inputsPercentage);




let sum = 0;


if (inputsMoney >= MinInputsMoney &&
    inputsYears >= MinInputsYears &&
    inputsPercentage >= 0 &&
    inputsPercentage <= MaxInputsPercentage &&
    Number.isInteger(inputsYears) &&
    !Object.is(inputsYears, NaN)) {
    sum += inputsMoney * inputsPercentage / hundred;
    console.log(sum);
    for (let i = 2; i <= inputsYears; i++) {

        sum += (inputsMoney + sum) * inputsPercentage / hundred;
        console.log(sum);
    }
    window.alert('Initial amount: ' + inputsMoney + '\n' + 'Number of years: ' + 
    inputsYears + '\n' + 'Percentage of year: ' + inputsPercentage + '\n' + '\n' +
    'Total profit: ' + sum.toFixed(floatDot) + '\n' + 'Total amount: ' + (inputsMoney + sum).toFixed(floatDot));
} else {

    window.alert('Invalid input data'); 

}

