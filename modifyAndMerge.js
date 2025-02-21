let arr1 = ["car", "bike", "train"]
let arr2 = ["plane", "ship"]

function modifyAndMerge(arr1, arr2) {
    let newArr=arr1.slice();    
    newArr.splice(1, 1, "bus", "scooter")
    return newArr.concat(arr2);;
}
console.log(modifyAndMerge(arr1, arr2));
console.log(arr1);
console.log(arr2);

