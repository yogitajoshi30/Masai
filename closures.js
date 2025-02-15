function outerFunction(){
    let message="Hello";
    return function(){
        console.log(message);
    }
}
let output= outerFunction();
output();