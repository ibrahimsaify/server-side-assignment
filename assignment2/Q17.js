function splitStringIntoWords(str) {
	// Use the split method to split the string into an array of words
	return str.split(/\s+/);
}

// Example usage:
var sentence = "This is a sample sentence.";
var wordsArray = splitStringIntoWords(sentence);
console.log(wordsArray);
