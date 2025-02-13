const people = [ { name: "Alice", address: { city: "New York", street: { name: "Broadway", number: 123 } } }, 
    { name: "Bob", address: { city: "Los Angeles", street: { name: "Sunset Boulevard", number: 456 } } } ];
     
function details(arr){
    let array=[];
    for(let i of arr){
        const {name, address:{city, street:{name: streetName}}}=i;
        array.push(`${name} lives in ${city} on ${streetName}`);
    }
    return array;
}
console.log(details(people));
