function factorial(num){
    if(num<0 || isNaN(num) || typeof num !== "number" || !Number.isInteger(num)){
        return "Invalid Input";
        
    }
    if(num===0){
        return 1;
    }
    return num*factorial(num-1);
}

// Testing with multiple inputs
console.log(factorial(5));   // 120
console.log(factorial(0));   // 1
console.log(factorial(-3));  // Invalid input
console.log(factorial("a")); // Invalid input
console.log(factorial(3.5)); // Invalid input
