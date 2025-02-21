function filterEvenNumbers(arr) {
    let evenArr = arr.filter(ele => ele % 2 == 0);
    return evenArr;
}
function sumOfArray(arr) {
    let sum = arr.reduce((acc, curr) => acc + curr, 0);
    return sum;
}
function sortAndConcat(arr1, arr2) {
    let sortArr1 = arr1.sort((a, b) => a - b)
    let sortArr2 = arr2.sort((a, b) => a - b)
    let concatenated = sortArr1.concat(sortArr2)
    return [sortArr1, sortArr2, concatenated];
}
let arr1 = [24, 9, 11, 12, 6, 21];
let arr2 = [4, 2, 6, 8, 54, 12]
console.log(filterEvenNumbers(arr1));
console.log(sumOfArray(arr2));
console.log(sortAndConcat(arr1, arr2));