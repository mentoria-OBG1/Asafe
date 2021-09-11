
const array = [30,5,5,18,43,166,21,16,24,4,38,3,18,19,18,42,6,35,38,43]

array.sort(function compare(a, b) {
    if (a % 2) return -1;
    return 0;
})

/*
array.sort(function compare(a, b) {
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
})*/

console.log(array)
