// Selection sort | Сортировка выбором
// Worst-case performance	O(n^2)
// Best-case performance	O(n^2)
// Average performance	  O(n^2)
// Worst-case space complexity O(1)

const arr = [
	7, -2, 14, 0, 5, 9, 3, -8, 22, 6, 1, 4, 11, -3, 18, 2, -6, 13, 8, 10, -1, 19,
	25, -7, 30, 17, 3,
];
let count = 0;

function selectionSort(arr) {
	for (let i = 0; i < arr.length; i++) {
		let indexMin = i;

		for (let j = i + 1; j < arr.length; j++) {
			if (arr[j] < arr[indexMin]) {
				indexMin = j;
			}
			count += 1;
		}

		let tmp = arr[i];
		arr[i] = arr[indexMin];
		arr[indexMin] = tmp;
	}
	return arr;
}

console.log('Sorted array:', selectionSort(arr));
console.log('Iterations:', count);
