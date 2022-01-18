function isFunction(functionToCheck) {
	return functionToCheck && {}.toString.call(functionToCheck) === '[object Function]';
}

function alertError(message) {
	alert(message);
}

const pipe = (value, ...funcs) => {
	// PIPE implementation

	
	let forNextFuncs, count;
	try {
		for (let i = 0; i < funcs.length; i++) {
			if (!isFunction(funcs[i])) {
				count = i;
				throw new Error('argument is not a function');

			}
			
			if (i === 0) {
				forNextFuncs = funcs[i](value);

			} else {

				forNextFuncs = funcs[i](forNextFuncs);
			}
			
		}

	} catch (error) {
		
		forNextFuncs = 'Provided argument at position ' + count + ' is not a function!';
		

	}


	return forNextFuncs;
};

const replaceUnderscoreWithSpace = (value) => value.replace(/_/g, ' ');
const capitalize = (value) =>
	value
		.split(' ')
		.map((val) => val.charAt(0).toUpperCase() + val.slice(1))
		.join(' ');
const appendGreeting = (value) => `Hello, ${value}!`;

const error = pipe('john_doe', replaceUnderscoreWithSpace, capitalize, '');

alert(error); // Provided argument at position 2 is not a function!

const result = pipe('john_doe', replaceUnderscoreWithSpace, capitalize, appendGreeting);

alert(result); // Hello, John Doe!




