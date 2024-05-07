function linearSearch(arr, element) {
	// Iterate over the array
	for (let i = 0; i < arr.length; i++) {
		// If the current element matches the target element
		if (arr[i] === element) {
			// Return the index
			return i;
		}
	} // If the element is not found, return -1
	return -1;
}
