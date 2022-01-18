// Your code goes here
let numberOfPocket;
let amount = 0;
let isSunk = false;
let attemptsLeft = 3;
let prize = 0;


while (isSunk == false) {
    let question = prompt('Do you want to play a game');

    if (question == null) {

        isSunk = true;
        console.log('You did not become a billionaire, but can'); //alert
        break;

    } if (question == '') {
        toRandomNumberOfPocket();

    }
    else {
        console.log('go play');
        break;

    }

}

function toPrint() {
    console.log('Choose a roulette pocker nomber from 0 to 8');
            console.log('Attempts left: ' + (attemptsLeft - i));
            console.log('Total prize: ' + prize);
            console.log('Possible prize on current attempt: ' + (amount + prize));
}

function toRandomNumberOfPocket() {
    numberOfPocket = Math.floor(Math.random() * 9)
    console.log(numberOfPocket);
    console.log('Choose a roulette pocker nomber from 0 to 8' + '\n' + 
    'Attempts left: '+ attemptsLeft + '\n' +
    'Total prize: ' + 100 + '\n' + 
    'Possible prize on current attempt: ' + amount);

    console.log('------------------------------');
    lucky();
}

function toQuestion(question) {
    if (question == null) {
        console.log('You did not become a billionaire, but can'); //alert
    } if (question == '') {
        toRandomNumberOfPocket();
    }
    else {
        console.log('go play');

    }
}
// toQuestion(question);


function lucky() {
    for (let i = 0; i < 3; i++) {
        let enterNumberOfPocket = prompt('enter a number of pocket on which the ball could land');
        if (enterNumberOfPocket == numberOfPocket && i == 0) {
            prize = 100;
            amount += prize;
            console.log('Choose a roulette pocker nomber from 0 to 8');
            console.log('Attempts left: ' + (attemptsLeft - i));
            console.log('Total prize: ' + amount);
            console.log('Possible prize on current attempt: ' + prize);
            console.log('------------------------------');
            break;
        } if (enterNumberOfPocket == numberOfPocket && i == 1) {
            prize = 50;
            amount += prize;
            console.log('Choose a roulette pocker nomber from 0 to 8');
            console.log('Attempts left: ' + (attemptsLeft - i));
            console.log('Total prize: ' + amount);
            console.log('Possible prize on current attempt: ' + prize);
            console.log('------------------------------');
            
            break;
        } if (enterNumberOfPocket == numberOfPocket && i == 2) {
            prize = 25;
            amount += prize;
            console.log('Choose a roulette pocker nomber from 0 to 8');
            console.log('Attempts left: ' + (attemptsLeft - i));
            console.log('Total prize: ' + amount);
            console.log('Possible prize on current attempt: ' + prize);
            console.log('------------------------------');
            break;
        } if (enterNumberOfPocket != numberOfPocket && i == 2) {
            console.log('Thank you for your participation. Your prize is: 0 $');
            // question = prompt('did you wants to play again');


        } else {
            console.log('Choose a roulette pocker nomber from 0 to 8');
            console.log('Attempts left: ' + (attemptsLeft - (i + 1)));
            console.log('Total prize: ' + amount);
            // console.log('Possible prize on current attempt: ' + prize);
            console.log('------------------------------');

        }


    }
}


