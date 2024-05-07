function sortStringAlphabetically(str) {
	return str.split('').sort().join('');
}

const inputString = "hello world";
const sortedString = sortStringAlphabetically(inputString);
console.log("Original string:", inputString);
console.log("Sorted string:", sortedString);
