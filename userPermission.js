let user = { name: "Alice", role: "admin", active: false };
let access= user.role==="admin" && user.active=== true?
console.log("Admin Access Granted!"): 
user.role=="admin" && user.active=== false?
console.log("Admin Access Revoked!"):
user.role==="user" && user.active=== true ?
console.log("User Access Granted!"):
user.role=="user" && user.active=== false ?
console.log("User Access Revoked!"):
console.log("Access Denied")


//let user = { name: "Alice", role: "admin", active: false };

//let user = { name: "Bob", role: "user", active: true };
