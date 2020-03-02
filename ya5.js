function sum(a) {
    const summator = function (b) { return sum((a || 0) + (b || 0)) }

    summator.valueOf = () => a
    summator.toString = () => a

    return summator
}
console.log(sum(1)(2)(3)(5)(6))