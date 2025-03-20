// Dijkstra's algorithm: Find the shortest path between a and b | Алгоритм Дейкстры: Поиск кратчайшего пути в графе

const graph = {};
graph.a = { b: 5, c: 3 };
graph.b = { f: 4 };
graph.c = { d: 8, e: 6 };
graph.d = { f: 1 };
graph.e = { f: 7 };
graph.f = { g: 2 };
graph.g = {};

function shortPath(graph, start, end) {
	const costs = {};
	const processed = [];
	let neighbors = {};

	Object.keys(graph).forEach((node) => {
		if (node != start) {
			let value = graph[start][node];
			costs[node] = value || 999999999;
		}
	});

	let node = findNodeLowestCost(costs, processed);

	while (node) {
		const cost = costs[node];
		neighbors = graph[node];

		Object.keys(neighbors).forEach((neighbor) => {
			let newCost = cost + neighbors[neighbor];
			if (newCost < costs[neighbor]) {
				costs[neighbor] = newCost;
			}
		});

		processed.push(node);
		node = findNodeLowestCost(costs, processed);
	}
	return costs;
}

function findNodeLowestCost(costs, processed) {
	let lowestCost = 999999999;
	let lowestNode;

	Object.keys(costs).forEach((node) => {
		let cost = costs[node];
		if (cost < lowestCost && !processed.includes(node)) {
			lowestCost = cost;
			lowestNode = node;
		}
	});
	return lowestNode;
}

console.log(shortPath(graph, 'a', 'g'));
