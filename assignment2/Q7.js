function bubbleSort(arr) {
	const n = arr.length;

	for (let i = 0; i < n - 1; i++) {
    	for (let j = 0; j < n - i - 1; j++) {
        	if (arr[j] > arr[j + 1]) {
            	// Swap arr[j] and arr[j+1]
            	let temp = arr[j];
            	arr[j] = arr[j + 1];
            	arr[j + 1] = temp;
        	}
    	}
	}

	return arr;
}

// Example usage:
const arr = [5, 3, 7, 2, 8, 4, 1];
const sortedArr = bubbleSort(arr);
console.log("Sorted array:", sortedArr);
