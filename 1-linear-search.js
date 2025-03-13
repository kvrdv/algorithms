// Linear search | Линейный поиск
// Worst-case performance	O(n)
// Best-case performance	O(1)
// Average performance	  O(n)

const arr = [
	17, 3, 9, 12, 6, 22, 14, 8, 31, 5, 19, 27, 4, 15, 33, 10, 24, 1, 18, 29, 7,
	16,
];
let count = 0;

function linearSearch(arr, value) {
	for (let i = 0; i < arr.length; i++) {
		count += 1;
		if (arr[i] === value) return i;
	}
	return -1;
}

function reversedLinearSearch(arr, value) {
	for (let i = arr.length - 1; i >= 0; i--) {
		count += 1;
		if (arr[i] === value) return i;
	}
	return -1;
}

console.log('Position:', reversedLinearSearch(arr, 33));
console.log('Position:', linearSearch(arr, 33));
console.log('Iterations:', count);
