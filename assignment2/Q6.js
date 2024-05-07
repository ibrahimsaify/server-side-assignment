function insertionSort(arr) {
	const n = arr.length;

	for (let i = 1; i < n; i++) {
    	let key = arr[i];
    	let j = i - 1;

    	while (j >= 0 && arr[j] > key) {
        	arr[j + 1] = arr[j];
        	j--;
    	}

    	arr[j + 1] = key;
	}

	return arr;
}

// Example usage:
const originalArr = [5, 3, 7, 2, 8, 4, 1];
const sortedArr = insertionSort(originalArr);
console.log("Sorted array:", sortedArr);
