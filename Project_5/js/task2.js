// Your code goes here


let numberOfPocket,
    amount = 0,
    attemptsLeft = 3,
    addPrize = 2,
    count = 0,
    isExcitement = false,
    numberForRandom = 8,
    numberForRandomPlus = 4,
    percentFirst = 100,
    percentSecond = 50,
    percentThird = 25,
    prize = 100,
    question,
    winOne = 0,
    winTwo = 1,
winThree = 2;


const hundred = 100;



let prizePrint = prize;
while (!isExcitement) {
    count++;

    if (count === 1) {
        question = confirm('Do you want to play a game');
    } else {
        question = confirm('Do you want to continue')
        if (question === true) {
            prize *= addPrize;
            prizePrint = prize;
            numberForRandom += numberForRandomPlus;
        } else {
            alert('Thank you for your participation. Your prize is: ' + amount + '$');
            break;
        }
    }
    if (question === false) {

        isExcitement = true;
        alert('You did not become a billionaire, but can');
        break;

    } if (question === true) {
        calcToRandomNumberOfPocket();

    } else {
        alert('Invalid input data');
        break;

    }

}

function calcToRandomNumberOfPocket() {
    numberOfPocket = Math.round(Math.random() * numberForRandom)
    console.log('enterNumberOfPocket ' + numberOfPocket);
    getLucky();
}

function showToPrintWin(prize) {
    alert('Congratulation, you won!' + '\n' +
        'Your prize is: ' + prize + '$');
}



function getLucky() {

    for (let i = 0; i < attemptsLeft; i++) {


        let enterNumberOfPocket = prompt('Choose a roulette pocket number from 0 to ' + numberForRandom + '\n' +
            'Attempts left: ' + (attemptsLeft - i) + '\n' +
            'Total prize: ' + amount + '\n' +
            'Possible prize on current attempt: ' + prizePrint + '$' + '\n' + '\n' +
        'Enter a number of pocket on which the ball could land');
        
        console.log(enterNumberOfPocket);

        if (enterNumberOfPocket === null) {
            isExcitement = true;
            break;
        } else {

            if (Number(enterNumberOfPocket) === numberOfPocket && i === winOne) {
                let prizeOne = prize * (percentFirst / hundred);
                amount += prizeOne;
                showToPrintWin(amount);
                break;

            } if (Number(enterNumberOfPocket) === numberOfPocket && i === winTwo) {
                let prizeTwo = prize * (percentSecond / hundred);
                amount += prizeTwo;
                showToPrintWin(amount);
                break;

            } if (Number(enterNumberOfPocket) === numberOfPocket && i === winThree) {
                let prizeThree = prize * (percentThird / hundred);
                amount += prizeThree;
                showToPrintWin(amount);
                break;

            } if (Number(enterNumberOfPocket) !== numberOfPocket && i === winThree) {

                alert('Thank you for your participation.    ' + '\n' +
                    'Your prize is: ' + amount + '$');

                count = 0;
                prize = prizePrint = 100;
                amount = 0;

            } else {

                let temp = attemptsLeft - (i + 1);


                if (temp === winThree) {
                    prizePrint = prize * (percentSecond / hundred);
                    
                    continue;

                } if (temp === 1) {
                    prizePrint = prize * (percentThird / hundred);
                    
                }
            }
        }

    }
}


