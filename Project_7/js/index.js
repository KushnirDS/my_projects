
let countVisitedPage1 = 0;
let countVisitedPage2 = 0;
let countVisitedPage3 = 0;

function visitLink(path) {
	//your code goes here
	
	if (localStorage.getItem(path) !== null) {
		localStorage.setItem(path, Number(localStorage.getItem(path)) + 1)
	} else {
		localStorage.setItem(path, 1)
	}

}


function viewResults() {
	//your code goes here
	let content = document.getElementById('content');
	let addUl = document.createElement('ul');
		
	addUl.id = 'listName';
	content.appendChild(addUl);


	let element = document.querySelectorAll('#listName li');
	for (let i = 0; i < element.length; i++) {
		element[i].parentNode.removeChild(element[i]);
	}

	if(localStorage.getItem('Page1') === null) {
		localStorage.setItem('Page1', 0);
	} if (localStorage.getItem('Page2') === null) {
		localStorage.setItem('Page2', 0);
	} if (localStorage.getItem('Page3') === null) {
		localStorage.setItem('Page3', 0)
	}

	let arr = ['You visited Page1 ' + localStorage.getItem('Page1') + 
	' time(s)', 'You visited Page2 ' + localStorage.getItem('Page2') + 
	' time(s)', 'You visited Page3 ' + localStorage.getItem('Page3') + ' time(s)']

	for (let i = 0; i < arr.length; i++) {
		let addLi = document.createElement('li');
		addLi.innerHTML = arr[i];
		addUl.appendChild(addLi);
	}
	localStorage.clear();

}
