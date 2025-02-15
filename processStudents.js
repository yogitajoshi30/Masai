let students= [ { name: "Alice", marks: 58 }, { name: "Bob", marks: 85 }, { name: "Charlie", marks: 92 }, { name: "David", marks: 45 } ];
function processStudents(){
    let filter=students.filter(student=> student.marks>60).sort((a, b) => b.marks - a.marks).map(student=> student.name);
    return filter;
}
console.log(processStudents(students));