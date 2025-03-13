// Recursive binary search | Рекурсивный бинарный поиск 
// Worst-case performance	O(log n)
// Best-case performance	O(1)
// Average performance	  O(log n)

function recursiveBinarySearch(arr, value, start, end) {
	if (start > end) return -1;

	let mid = Math.floor((start + end) / 2);
	count += 1;

	if (arr[mid] === value) return mid;

	if (value > arr[mid]) {
		return recursiveBinarySearch(arr, value, mid + 1, end);
	} else {
		return recursiveBinarySearch(arr, value, start, mid - 1);
	}
}

console.log('Position:', recursiveBinarySearch(arr, 17, 0, arr.length - 1));
console.log('Iterations:', count);
