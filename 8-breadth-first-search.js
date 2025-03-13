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
	let queue = [];
	queue.push(start);

	while (queue.length > 0) {
		const current = queue.shift();
		if (!graph[current]) {
			graph[current] = [];
		}
		if (graph[current].includes(end)) {
			return true;
		} else {
			queue = [...queue, ...graph[current]];
		}
	}
	return false;
}

console.log(breadthSearch(graph, 'A', 'H'));
