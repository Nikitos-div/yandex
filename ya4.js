//vectors f([1,1,1,1,1]) = 5
// vectors f([1,1,0,1,0]) = 3
const TEST = [1, 1, 1, 1, 1, 0, 0, 0, 0, 0]
const f = (arr) => {
	let numbers = []
	let count = 0
	for (let i = 0; i < arr.length; ++i) {
		if (arr[i] == 1) {
			count += 1
		}
		else {
			numbers.push(count)
			count = 1
		}
	}
	numbers.sort((a, b) => {
		return a - b
	})
	return numbers[numbers.length - 1]
}
console.log(f([1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1]))
console.log(f(TEST))
