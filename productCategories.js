let productCategories= ["electronics", "clothing", "electronics", "toys", "clothing", "toys", "toys"];
let categories= productCategories.reduce((acc, product)=> {
    if(acc[product]){
        acc[product]++;
    }else{
        acc[product]=1;
    }
    return acc;
},{})
let arr= Object.entries(categories);
arr.sort((a, b) => b[1] - a[1]);
console.log(arr);