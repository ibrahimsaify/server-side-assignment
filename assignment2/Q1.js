function findAllIndices(str, word) {
	const indices = [];
	let index = str.indexOf(word);
	while (index !== -1) {
		indices.push(index);
		index = str.indexOf(word, index + 1);
	}
	return indices;
}
