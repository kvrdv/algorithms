// Tree traversal | Алгоритмы обхода дерева

const tree = [
	{
		v: 8,
		c: [
			{
				v: 14,
				c: [
					{
						v: 22,
					},
				],
			},
			{
				v: 9,
				c: [
					{
						v: 12,
						c: [
							{
								v: 3,
							},
						],
					},
				],
			},
		],
	},
	{
		v: 6,
		c: [
			{
				v: 17,
			},
			{
				v: 25,
			},
		],
	},
];

const recursive = (tree) => {
	let sum = 0;

	tree.forEach((node) => {
		sum += node.v;

		if (!node.c) {
			return node.v;
		}

		sum += recursive(node.c);
	});

	return sum;
};

const iteration = (tree) => {
	if (!tree.length) {
		return 0;
	}

	let sum = 0;
	let stack = [];

	tree.forEach((node) => stack.push(node));

	while (stack.length) {
		const node = stack.pop();
		sum += node.v;

		if (node.c) {
			node.c.forEach((child) => stack.push(child));
		}
	}

	return sum;
};

console.log(recursive(tree));
console.log(iteration(tree));
