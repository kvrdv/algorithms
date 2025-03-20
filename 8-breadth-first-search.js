// Breadth-first search (tree data structure) | Поиск в ширину (граф)
// O(V + E)

const graph = {
	A: ['B', 'D'],
	B: ['C', 'E'],
	C: ['F'],
	D: ['E'],
	E: ['F', 'G'],
	F: ['H'],
	G: ['H'],
};

function breadthSearch(graph, start, end) {
	let queue = [start];
	let visited = new Set();

	while (queue.length > 0) {
		const current = queue.shift();

		if (current === end) {
			return true;
		}

		if (!visited.has(current)) {
			visited.add(current);
			queue.push(...(graph[current] || []));
		}
	}

	return false;
}

console.log(breadthSearch(graph, 'A', 'H'));
