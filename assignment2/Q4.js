function heapSort(arr) {
	const n = arr.length;

	// Build max heap
	for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
		heapify(arr, n, i);
	}

	// Extract elements from heap one by one
	for (let i = n - 1; i > 0; i--) {
		// Move current root to end
		[arr[0], arr[i]] = [arr[i], arr[0]];

		// Call heapify on the reduced heap
		heapify(arr, i, 0);
	}

	return arr;
}

function heapify(arr, n, i) {
	let largest = i; // Initialize largest as root
	const left = 2 * i + 1; // Left child index
	const right = 2 * i + 2; // Right child index

	// If left child is larger than root
	if (left < n && arr[left] > arr[largest]) {
		largest = left;
	}

	// If right child is larger than root
	if (right < n && arr[right] > arr[largest]) {
		largest = right;
	}

	// If largest is not root
	if (largest !== i) {
		[arr[i], arr[largest]] = [arr[largest], arr[i]]; // Swap

		// Recursively heapify the affected sub-tree
		heapify(arr, n, largest);
	}
}

// Example usage
const arr = [5, 3, 8, 1, 9, 2];
const sortedArr = heapSort(arr);
console.log(sortedArr); // Output: [1, 2, 3, 5, 8, 9]
