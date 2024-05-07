function isArraySorted(arr) {
	for (let i = 0; i < arr.length - 1; i++) {
    	if (arr[i] > arr[i + 1]) {
        	return false;
    	}
	}
	return true;
}

// Example usage:
const sortedArray = [1, 2, 3, 4, 5];
const unsortedArray = [5, 3, 7, 2, 8];
console.log("Is sortedArray sorted?", isArraySorted(sortedArray));
console.log("Is unsortedArray sorted?", isArraySorted(unsortedArray));
