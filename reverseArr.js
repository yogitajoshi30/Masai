let arr = [15, 30, 45, 60, 75, 90];
function extractAndReverse(arr) {
    let newArr = arr.slice(2, 4);
    return newArr.reverse();
}
console.log(extractAndReverse(arr))