function findAllIndexes(str, word) {
	let indexes = [];
	let index = -1;
    
	while ((index = str.indexOf(word, index + 1)) !== -1) {
    	indexes.push(index);
	}
    
	return indexes;
}

let string = "hello world hello";
let word = "world";
let positions = findAllIndexes(string, word);
console.log("The word '" + word + "' appears at positions: " + positions.join(", "));