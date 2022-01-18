// Your code goes here

function getAge(birthday) {
    let todayDate = new Date();
    let age, birthdayYaer, todayDateYaer;
    
    birthdayYaer = birthday.getFullYear();
    todayDateYaer = todayDate.getFullYear();
    
    age = todayDateYaer-birthdayYaer;
        
    birthday.setFullYear(0);
    todayDate.setFullYear(0);

    if (todayDate > birthday) {
        return age;
    } else {
        return age-1;
    }

}

function getWeekDay(date) {

    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    let myDate = new Date(date);
        
    return days[myDate.getDay()];
}

function getAmountDaysToNewYear(date) {
    
    date.setFullYear(date.getFullYear());
    date.setHours(0, 0, 0, 0);

    let NewYear = new Date(date.getFullYear(), 0, 1);
    NewYear.setFullYear(date.getFullYear()+1);
   
    let differentDate = NewYear - date;
    let day = 86400000;
    
    return Math.floor(differentDate/day);

}

function getProgrammersDay(year) {
    
    let programmersDay;
    let Month = [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec'
    ];

    programmersDay = new Date(year, 0, 256);


    return programmersDay.getDate() + ' ' + Month[programmersDay.getMonth()] + ', ' + 
    programmersDay.getFullYear() + ' (' + getWeekDay(programmersDay) + ')';

} 

function howFarIs(specifiedWeekday) {

    specifiedWeekday = specifiedWeekday.toLowerCase();
    specifiedWeekday = specifiedWeekday.charAt(0).toUpperCase() + specifiedWeekday.slice(1);
    console.log(specifiedWeekday);

    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    let toDay = new Date().getDay();

    let numberDay = days.indexOf(specifiedWeekday);
    let number;

    if (numberDay === toDay) {
        return `Hey, today is ${specifiedWeekday} =)`
    }
    if (toDay > numberDay) {
        number = days.length - toDay;
        return `It's ${number} day(s) left till ${specifiedWeekday}`
    }
    number = numberDay - toDay;
    return `It's ${number} day(s) left till ${specifiedWeekday}`



}

function isValidIdentifier(string) {
    
    let regEx = /^[A-Za-z$_]+[$_0-9]/gi;
    
    return regEx.test(string);
}

function capitalize(testStr) {
    let regEx = /(^|\s)\S/g;
    return testStr.replace(regEx, (a) => a.toUpperCase())
    
}

function isValidAudioFile(string) {
    let regEx = /^([A-Za-z]{1,})\.(mp3|flac|alac|aac)$/gi;
    return regEx.test(string);
}

function getHexadecimalColors(hex) {
    let regEx = /#([0-9a-f]{3}\b|[0-9a-f]{6}\b)/gi;
     
    return hex.match(regEx) || [];
}

function isValidPassword(string) {
    let regEx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/g;
    
    if (regEx.test(string)) {
        return regEx.test(string);
     
    } 
    
}


function addThousandsSeparators(input) {
    let regEx = /(?=(\d{3})+([^\d]|$))/g;
    
    input = input.toString().replace(regEx,',');
    
    return input;
}

function getAllUrlsFromText(text) {
    
    let regEx = /(?:(?:https?|ftp|file):\/\/|www\.|ftp\.)([a-zA-Z0-9]([a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+[a-zA-Z]{2,}/g;

    return text.match(regEx) || [];

}
