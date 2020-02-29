const TEST = 'aaaaaaabbbbbbbcccccc'
const f = (str, ideal) => {
	let cache = ideal[0]
	let arrStr = [ideal[0]]
	for (let i = 1; i < ideal.length; ++i) {
		if (ideal[i] != cache) {
			cache = ideal[i]
			//		console.log(cache)
			arrStr.push(cache)
		}
		else {
			continue;
		}
	}
	console.log(arrStr.join(''))
	return arrStr.join('') === str ? true : false
}


console.log(f('abc', TEST))