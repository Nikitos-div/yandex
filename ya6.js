function count() {
    let counter = 0

    return function () {
        return counter++
    }
}
let c = count()
console.log(c)
console.log(c)