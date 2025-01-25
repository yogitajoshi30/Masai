//Step-1
let tasks = ["Workout", "Coding", "Assignment", "Lectures", "Shopping"]

//Step-2
function removeFirstTask(taskArr) {
    for (let i = 0; i < taskArr.length - 1; i++) {
        taskArr[i] = taskArr[i + 1];
    }
    taskArr.length -= 1;
    return taskArr;
}
//Step-3
function addTwoTasks(taskArr, newTask1, newTask2) {
    taskArr.length = taskArr.length + 2
    for (let i = 5; i >= 2; i--) {
        taskArr[i] = taskArr[i - 2];
    }
    taskArr[0] = newTask1
    taskArr[1] = newTask2
    return taskArr;
}
//Step-4
function replaceLastTask(taskArr) {
    taskArr[taskArr.length - 1] = "Workout"
    return taskArr;
}
//Step-5
function displayTasks(taskArr) {
    console.log("Updated Tasks: ")
    for (let i = 0; i < taskArr.length; i++) {
        console.log(i+1, taskArr[i]);
    }
}
console.log("Initial Tasks: ", tasks)
console.log("After removing first task: ", removeFirstTask(tasks))
console.log("After adding two new tasks: ",addTwoTasks(tasks, "Eat", "Bath"))
console.log("After replacing last task with a new task: ",replaceLastTask(tasks))
displayTasks(tasks)