function manageStudents(stud) {
    stud.splice(3, 0, "David");
    console.log(stud);

    let exists= stud.includes("Eve"); 
    console.log(exists);

    let str= stud.join(","); 
    
    console.log(str);
}
//let students = ["Alice", "Bob", "Charlie"];
let students = ["Alice"];
manageStudents(students);

