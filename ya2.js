const TEST = 'aaaaaaabbbbdddcccccc'
const f = (str, ideal) => {
	let cache = ideal[0]
	let arrStr = [ideal[0]]
	for (let i = 1; i < ideal.length; ++i) {
		if (ideal[i] != cache) {
			cache = ideal[i]
			arrStr.push(cache)
		}
		else {
			continue;
		}
	}
	return arrStr.join('') === str ? true : false
}


console.log(f('abc', TEST))