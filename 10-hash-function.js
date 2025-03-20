// Hash function | Хеш-функция

function simpleHash(key, numBuckets) {
	let hash = 0;

	for (let i = 0; i < key.length; i++) {
		hash += key.charCodeAt(i);
	}

	return hash % numBuckets;
}

const numBuckets = 17;
console.log(simpleHash('hello', numBuckets));
console.log(simpleHash('world', numBuckets));
console.log(simpleHash('test', numBuckets));
