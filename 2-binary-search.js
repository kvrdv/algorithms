// Binary search | Бинарный поиск
// Worst-case performance	O(log n)
// Best-case performance	O(1)
// Average performance	  O(log n)

const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];
let count = 0;

function binarySearch(arr, value) {
	let start = 0;
	let end = arr.length;
	let mid;
	let isFound = false;
	let index = -1;

	while (!isFound && start <= end) {
		count += 1;
		mid = Math.floor((start + end) / 2);

		if (value === arr[mid]) {
			isFound = true;
			index = mid;
			return index;
		}

		if (value < arr[mid]) {
			end = mid - 1;
		} else {
			start = mid + 1;
		}
	}
	return index;
}

console.log('Position:', binarySearch(arr, 17));
console.log('Iterations:', count);
