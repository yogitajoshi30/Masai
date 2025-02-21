function  multiplyNumbers(a, b){
    return `${this.tag} of a*b is `+a*b;
}

let student = {
    tag: "Result"
};
console.log(multiplyNumbers.apply(student,[3, 4]));  
