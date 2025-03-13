// Bubble sort | Сортировка пузырьком
// Worst-case performance	O(n^2)
// Best-case performance	O(n)
// Average performance	  O(n^2)
// Worst-case space complexity O(1)

const arr = [
	7, -2, 14, 0, 5, 9, 3, -8, 22, 6, 1, 4, 11, -3, 18, 2, -6, 13, 8, 10, -1, 19,
	25, -7, 30, 17, 3,
];
let count = 0;

function bubbleSort(arr) {
	for (let i = 0; i < arr.length; i++) {
		for (let j = 0; j < arr.length; j++) {
			if (arr[j + 1] < arr[j]) {
				let tmp = arr[j + 1];
				arr[j + 1] = arr[j];
				arr[j] = tmp;
			}
			count += 1;
		}
	}
	return arr;
}

console.log('Sorted array:', bubbleSort(arr));
console.log('Iterations:', count);
