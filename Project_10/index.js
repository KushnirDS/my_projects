/* START TASK 1: Your code goes here */
let tds = document.querySelectorAll('td');
let trs = document.querySelectorAll('tr');
let table = document.getElementById('table');

tds.forEach(function (item) {
  item.onclick = function () {
    if (item.id !== 'one' && item.id !== 'four' && item.id !== 'seven' && item.innerHTML !== 'Special cell') {
      this.classList.toggle('backgroundCellTdOnClick');
      this.classList.remove('backgroundCellTrOnClick');

    }

  };
});

table.addEventListener('click', function (e) {
  let td = e.target;

  if (td.innerHTML === 'Special cell') {
    for (let i = 0; i < tds.length; i++) {
      if (tds[i].className === '') {
        tds[i].classList.toggle('specialCell');
      }
    }
  }

  if (td.id === 'one') {
    colorRows(0, 3);
  }

  if (td.id === 'four') {
    colorRows(3, 6);
  }

  if (td.id === 'seven') {
    colorRows(6, 9);
  }

})

function colorRows(start, end) {
  for (let i = start; i < end; i++) {
    if (tds[i].classList.contains('backgroundCellTrOnClick')) {
      tds[i].classList.remove('backgroundCellTrOnClick');
      continue;
    }

    if (tds[i].className !== '') {
      tds[i].classList.remove('backgroundCellTrOnClick');
      tds[i].classList.remove('backgroundCellTdOnClick');
      tds[i].classList.add('backgroundCellTrOnClick');
    } else {

      tds[i].classList.add('backgroundCellTrOnClick');
    }

  }
}

/* END TASK 1 */

/* START TASK 2: Your code goes here */

let inputNumberPhoneId = document.getElementById('inputNumberPhone');
let div = document.getElementById('error');
let sendButtonId = document.getElementById('sendButton');

sendButtonId.disabled = true;

inputNumberPhoneId.addEventListener('keyup', check);

function check () {
  
  let regEx = /^\+380\d{3}\d{2}\d{2}\d{2}$/;
  let numberPhone = inputNumberPhoneId.value;

  if (validate(regEx, numberPhone)) {
    sendButtonId.disabled = false;

    div.innerHTML = ''
    div.classList.remove('error');
    inputNumberPhoneId.classList.remove('input_invalid');
    div.classList.add('input_valid');

    sendButtonId.onclick = function (e) {
      e.preventDefault();
      
      valid(inputNumberPhoneId, div, 'Data was successfully sent');
    } 
  } else {
    
    inValid(inputNumberPhoneId, div, 'Type number does not follow format +380*********')
    
  }
}


function validate(reg, input) {
  return reg.test(input);
}

function inValid(inp, el, mess) {
  el.classList.add('error');
  inp.classList.add('input_invalid');
  el.innerHTML = mess; 
}

function valid(inp, el, mess) {
  inp.classList.remove('input_invalid');
  el.classList.add('valid');
  el.innerHTML = mess;
}

/* END TASK 2 */

/* START TASK 3: Your code goes here */

let court = document.getElementById('court');
let ball = document.getElementById('ball');
let winA = document.getElementById('winA');
let winB = document.getElementById('winB');
let countA = 0;
let countB = 0;
let score = document.getElementById('score');
const setTime = 3000;

court.onclick = moveBall;

function moveBall(event) {
  
  let left = document.getElementById('court').getBoundingClientRect().left; // координаты первой точки горизонт
  let top = document.getElementById('court').getBoundingClientRect().top; // координаты первой точки горизонт
  const offsetZoneTopMin = 140;
  const offsetZoneTopMax = 155;
  let x = event.clientX,
  y = event.clientY;

  if (x > left + 35 && x < left + 50 && y > top + offsetZoneTopMin && y < top + offsetZoneTopMax) {
    let team = 'Team B';

    countB++;
    winB.innerHTML = countB;
    scoremess(score, 'Team B score');
    score.classList.add('winTeamB');
    restartGame();
    scored(team, countB);
  }
  
  if (x > left + 550 && x < left + 565 && y > top + offsetZoneTopMin && y < top + offsetZoneTopMax) {
    let team = 'Team A';
    
    countA++;
    winA.innerHTML = countA;
    scoremess(score, 'Team A score');
    score.classList.add('winTeamA');
    restartGame();
    scored(team, countA);
  }

  let coordcourtdX_left = ball.offsetWidth / 2,
  coordcourtdY_left = ball.offsetHeight / 2;
  
  if (x < coordcourtdX_left) {
    x = coordcourtdX_left;
  }
  if (y < coordcourtdY_left) {
    y = coordcourtdY_left;
  }
  
  x -= ball.offsetWidth / 2;
  y -= ball.offsetHeight / 2;

  
  ball.style.left = x + 'px';
  ball.style.top = y + 'px';
}

function startBall() {
  const centerCourtLeft = 280;
  const centerCourtTop = 130;
  let left = document.getElementById('court').getBoundingClientRect().left + centerCourtLeft;
  let top = document.getElementById('court').getBoundingClientRect().top + centerCourtTop;
  
  ball.style.left = left + 'px';
  ball.style.top = top + 'px';
}
startBall();


function scoremess(el, mess) {
  el.innerHTML = mess;
  
}

function cleaner() {
  score.innerHTML = '';
  score.classList.remove('winTeamA');
  score.classList.remove('winTeamB');
}

function restartGame() {
  setTimeout(cleaner, setTime);
  setTimeout(startBall, setTime);
  
}

function scoredGoals (team, goals) {
  window.alert(team + ' scored goals: ' + goals);
}

function scored(team, goals) {
  
  let myCustomEvent = new Event(team, {bubbles: true});
  document.addEventListener(team, scoredGoals(team, goals));
  court.dispatchEvent(myCustomEvent);
  
}



/* END TASK 3 */
