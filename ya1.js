const TEST = 'AAAAAABBBBCCCDFFFFQQQQ'

function str(str) {
	str = str
	let arr = []
	for (let i = 0, count = 1; i < str.length; i++) {
		if (str[i] === str[i + 1]) {
			count = count + 1;
		} else {
			arr.push(str[i])
			arr.push(count)
			count = 1
		}
	}
	return arr.join('')
}
console.log(str(TEST))