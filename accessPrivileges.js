function personPrivilege(person){
let privilege= person.role=="admin" && person.active==true && person.experience>5 && person.department=="IT"? "Full IT Admin Access":
person.role=="admin" && person.active==true && person.experience>5 && person.department!="IT"? "Full General Admin Access":
person.role=="admin" && person.active==true && person.experience<=5 ? "Limited Admin Access": person.active==false? `${person.role} Access Revoked`:
person.role=="manager" && person.active==true && person.experience>3 && person.department=="Sales"? "Full Sales Manager Access":
person.role=="manager" && person.active==true && person.experience>3 && person.department!="Sales"? "Full Manager Access":
person.role=="manager" && person.active==true && person.experience<=3 ? "Limited Manager Access": person.active=false? `${person.role} Access Revoked`:
person.role=="user" && person.active==true && person.department=="Support"? "Priority Support Access":
person.role=="user" && person.active==true && person.department!=="Support"? "User Access": person.active==false? `${person.role} Access Revoked`: "Invalid Role";

return privilege;
}

let person = { role: "admin", experience: 7, active: true, department: "IT" };
console.log(personPrivilege(person));

//let person = { role: "manager", experience: 4, active: true, department: "Marketing" };

//let person = { role: "user", experience: 2, active: true, department: "Support" };

//let person = { role: "admin", experience: 3, active: false, department: "Finance" };
