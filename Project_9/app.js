const appRoot = document.getElementById('app-root');


let addTitle = document.createElement('h1');
appRoot.appendChild(addTitle);
addTitle.className = 'addTitle';
addTitle.innerText = 'Countries Search';

let addspan = document.createElement('span');
appRoot.appendChild(addspan);
addspan.innerText = 'Please choose type of search:';

let addUl = document.createElement('ul');
appRoot.appendChild(addUl);

let addliOne = document.createElement('li');
addUl.appendChild(addliOne);
let addLiTwo = document.createElement('li');
addUl.appendChild(addLiTwo);

let addInputRegion = document.createElement('input');
let addInputLanguage = document.createElement('input');

addliOne.appendChild(addInputRegion);
addLiTwo.appendChild(addInputLanguage);

addInputRegion.setAttribute('type', 'radio');
addInputLanguage.setAttribute('type', 'radio');

addInputRegion.setAttribute('name', 'radioButtons');
addInputLanguage.setAttribute('name', 'radioButtons');

addInputRegion.setAttribute('value', '0');
addInputLanguage.setAttribute('value', '1');

addInputRegion.setAttribute('onclick', 'checkType()');
addInputLanguage.setAttribute('onclick', 'checkType()');

let labelRegion = document.createElement('label');
addliOne.appendChild(labelRegion);

labelRegion.innerText = 'By Region'

let labelLanguage = document.createElement('label');
addLiTwo.appendChild(labelLanguage);

labelLanguage.innerText = 'By Language';

let addDivForSelect = document.createElement('div');
appRoot.appendChild(addDivForSelect);

let addSpanForSelect = document.createElement('span');
addDivForSelect.appendChild(addSpanForSelect);
addSpanForSelect.id = 'addSpanForSelect';
addSpanForSelect.innerText = 'Please choose search query:';


let addSelect = document.createElement('select');
addDivForSelect.appendChild(addSelect);
addSelect.id = 'select';
let addSelectId = document.getElementById('select');
addSelect.setAttribute('onChange', 'getSelectValue()');

let arr = ['Select value'];

let radio = document.getElementsByName('radioButtons');

let addSelectOptoin = document.createElement('option');
addSelectOptoin.textContent = 'Select value';
addSelectId.appendChild(addSelectOptoin);
addSelectId.disabled = true;


let addDivForTable = document.createElement('div');
appRoot.appendChild(addDivForTable);
addDivForTable.id = 'addDivForTable';
let addDivForTableId = document.getElementById('addDivForTable');

let noItems = document.createElement('p');
addDivForTable.appendChild(noItems);
noItems.innerText = 'No items, please choose search query';

function checkType() {
    addSelectId.disabled = false;
    
    addSelectOptoin.textContent = 'Select value';

    addDivForTableId.innerHTML = '';
    
    noItems = document.createElement('p');
    addDivForTable.appendChild(noItems);
    noItems.innerText = 'No items, please choose search query';

    let element = document.querySelectorAll('option');
    for (let i = 0; i < element.length; i++) {
        element[i].parentNode.removeChild(element[i]);
    }
    addSelectOptoin.textContent = 'Select value';
    getCheckedRadioValue('radioButtons');
}

function getCheckedRadioValue(name) {
    let elements = document.getElementsByName(name);
    for (let i = 0, len = elements.length; i < len; ++i) {

        if (elements[i].checked) {
            
            getInputSelect(elements[i].value);
        }
    }

}

let forGetSelectValue;
function getInputSelect(radioValue) {
    if (radioValue === '0') {
        forGetSelectValue = 0;
        arr = externalService.getRegionsList();
        arr = ['Select value'];
        for (let i = 0; i < externalService.getRegionsList().length; i++) {
            arr.push(externalService.getRegionsList()[i]);
        }
    }
    if (radioValue === '1') {
        forGetSelectValue = 1;
        arr = ['Select value'];
        for (let i = 0; i < externalService.getLanguagesList().length; i++) {
            arr.push(externalService.getLanguagesList()[i]);
        }
    }

    for (let i = 0; i < arr.length; i++) {
        let content = arr[i];
        let addSelectOptoin = document.createElement('option');
        addSelectOptoin.textContent = content;
        addSelectId.appendChild(addSelectOptoin);
    }
}

let arrTh = ['Country name','Capital','World region','Languages','Area','Flag']

function getSelectValue() {
    
    selectValue = addSelectId.options[addSelectId.selectedIndex].value;

    addDivForTableId.innerHTML = '';
    
    if (selectValue !== 'Select value') {
        
        if (forGetSelectValue === 0) {
            return jobObject(externalService.getCountryListByRegion(selectValue));
        }
        if (forGetSelectValue === 1) {
            return jobObject(externalService.getCountryListByLanguage(selectValue));
        }
    } else {
        let noItems = document.createElement('p');
        addDivForTable.appendChild(noItems);
        
        noItems.innerText = 'No items, please choose search query';
    }
    
}

function jobObject(element) {
    
    let table = document.createElement('table');
    let tableBody = document.createElement('tbody');
    table.appendChild(tableBody);

    addDivForTableId.innerHTML = ''
    
    let tr = document.createElement('tr');
    tableBody.appendChild(tr);
    
    for (let j = 0; j < arrTh.length; j++) {
        let th = document.createElement('th');
        
        th.appendChild(document.createTextNode(arrTh[j]));
        tr.appendChild(th);
    }
    
    for (let i = 0; i <element.length; i++) {   
        tr = document.createElement('tr');
        tableBody.appendChild(tr);
        tableBody.appendChild(tr);

        let td_1 = document.createElement('td');
        td_1.appendChild(document.createTextNode(element[i].name));
        tr.appendChild(td_1);
        let td_2 = document.createElement('td');
        td_2.appendChild(document.createTextNode(element[i].capital));
        tr.appendChild(td_2);
        let td_3 = document.createElement('td');
        td_3.appendChild(document.createTextNode(element[i].region));
        tr.appendChild(td_3);

        let newArr = [];
        for (key in element[i].languages) {
            newArr.push(element[i].languages[key]);
        }
        
        let td_4 = document.createElement('td');
        td_4.appendChild(document.createTextNode(newArr));
        tr.appendChild(td_4);
        let td_5 = document.createElement('td');
        td_5.appendChild(document.createTextNode(element[i].area));
        tr.appendChild(td_5);
        let td_6 = document.createElement('td');
        let img = document.createElement('img')
        img.setAttribute('src', element[i].flagURL);
        
        tr.appendChild(td_6);
        td_6.appendChild(img);
    }
    addDivForTable.appendChild(table);
    
    const getCellValue = (tr, idx) => tr.children[idx].innerText || tr.children[idx].textContent;

    const comparer = (idx, asc) => (a, b) => ((v1, v2) =>
        v1 !== '' && v2 !== '' && !isNaN(v1) && !isNaN(v2) ? v1 - v2 : v1.toString().localeCompare(v2)
    )(getCellValue(asc ? a : b, idx), getCellValue(asc ? b : a, idx));

    document.querySelectorAll('th').forEach(th => th.addEventListener('click', () => {
        const table = th.closest('table');
        Array.from(table.querySelectorAll('tr:nth-child(n+2)'))
            .sort(comparer(Array.from(th.parentNode.children).indexOf(th), this.asc = !this.asc))
            .forEach(tr => table.appendChild(tr));
    }));
}


/*
write your code here


list of all regions
externalService.getRegionsList();
list of all languages
externalService.getLanguagesList();
get countries list by language
externalService.getCountryListByLanguage()
get countries list by region
externalService.getCountryListByRegion()
*/
