// Your code goes here

function isEquals(a, b) {
    return a === b;
}

function isBigger(a, b) {
    return a > b;
}

function storeNames(...theArgs) {
    return theArgs;

}

function getDifference(a, b) {
    if (a > b) {
        return a - b;
    } else {
        return b - a;
    }
}

function negativeCount(arr) {

    let newArr = [];

    newArr = arr.filter(function (el) {
        return el < 0;
    })

    return newArr.length;
}

function letterCount(str, part) {
       
    let newArr = [];
    str = str.toLowerCase();
    part = part.toLowerCase();
    
    let countPart = str.indexOf(part);
    
    while (countPart !== -1) {
        newArr.push(countPart);
        countPart = str.indexOf(part, countPart + part.length);
    }

    return newArr.length;
}

function countPoints(arr) {

    let count = 0;
    let maxWin = 3;
    let draw = 1;
    let lostWin = 0

    for (let i = 0; i < arr.length; i++) {
       
        let elementArr = arr[i].split(':');
        let ourTeam = +elementArr[0];
        let theirTeam = +elementArr[1]
        
        if (ourTeam > theirTeam) {
            count += maxWin;
        }
        if (ourTeam < theirTeam) {
            count += lostWin;
        }
        if (ourTeam === theirTeam) {
            count += draw;
        }

    }
    return count;
}
