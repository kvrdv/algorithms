// Quick sort, Hoare algorithm | Быстрая сортировка, Алгоритм Хоара
// Worst-case performance	O(n^2)
// Best-case performance	O(n*log n) - simple partition | O(n) - (three-way partition and equal keys)
// Average performance	  O(n*log n)
// Worst-case space complexity O(n) - auxiliary (naive) | O(log n) - auxiliary (Hoare 1962)

const arr = [
	7, -2, 14, 0, 5, 9, 3, -8, 22, 6, 1, 4, 11, -3, 18, 2, -6, 13, 8, 10, -1, 19,
	25, -7, 30, 17, 3,
];
let count = 0;

function quickSort(arr) {
	if (arr.length <= 1) return arr;
	let forkIndex = Math.floor(arr.length / 2);
	let forkElement = arr[forkIndex];
	let lower = [];
	let higher = [];

	for (let i = 0; i < arr.length; i++) {
		count += 1;
		if (i === forkIndex) continue;

		if (arr[i] < forkElement) {
			lower.push(arr[i]);
		} else {
			higher.push(arr[i]);
		}
	}
	return [...quickSort(lower), forkElement, ...quickSort(higher)];
}

console.log('Sorted array:', quickSort(arr));
console.log('Iterations:', count);
