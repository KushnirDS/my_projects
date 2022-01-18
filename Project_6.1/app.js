function reverseNumber(num) {
    let ten = 10
    let revers = 0;
    while (num !== 0) {
        revers *= ten;
        revers += num % ten;
        num = parseInt(num / ten);
    }
    return revers;

}

function forEach(arr, func) {

    for (let i = 0; i < arr.length; i++) {

        func(arr[i]);

    }

}

function map(arr, func) {

    let newArr = [];

    forEach(arr, function (el) {
        newArr.push(func(el))
    });

    return newArr;
}

function filter(arr, func) {
    let newArr = [];

    forEach(arr, function (el) {
        if (func(el)) {
            newArr.push(el);
        }
    });

    return newArr;
}


function getAdultAppleLovers(data) {
    let old = 18;
    let result = filter(data, function (el) {
        return el.age > old && el.favoriteFruit === 'apple';
    });

    return map(result, function (el) {
        return el.name;
    });


}

function getKeys(obj) {
    let newArr = [];
    for (key in obj) {
        newArr.push(key);
    }
    return newArr;
}

function getValues(obj) {
    let newArr = [];
    for (key in obj) {
        newArr.push(obj[key]);
    }
    return newArr;

}

function showFormattedDate(dateObj) {

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
    let todayDate = dateObj.getDate();
    let todayMonth = Month[dateObj.getMonth()];
    let todayYaer = dateObj.getFullYear();


    return 'It is ' + todayDate + ' of ' + todayMonth + ', ' + todayYaer;

}



