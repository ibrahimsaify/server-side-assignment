function customSort(arr) {
	var N = arr.length;

	for (var i = Math.floor(N / 2) - 1; i >= 0; i--)
    	customHeapify(arr, N, i);

	for (var i = N - 1; i > 0; i--) {
    	var temp = arr[0];
    	arr[0] = arr[i];
    	arr[i] = temp;
    	customHeapify(arr, i, 0);
	}
}

function customHeapify(arr, N, i) {
	var largest = i;
	var l = 2 * i + 1;
	var r = 2 * i + 2;

	if (l < N && arr[l] > arr[largest])
    	largest = l;

	if (r < N && arr[r] > arr[largest])
    	largest = r;

	if (largest != i) {
    	var swap = arr[i];
    	arr[i] = arr[largest];
    	arr[largest] = swap;
    	customHeapify(arr, N, largest);
	}
}

function customPrintArray(arr) {
	var N = arr.length;
	for (var i = 0; i < N; ++i)
    	console.log(arr[i]);
}

var originalArr = [12, 11, 13, 5, 6, 7];
customSort(originalArr);
console.log("Sorted array:" + originalArr);
