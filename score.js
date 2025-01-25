let score = [68, 83, 54, 28, 39, 42, 96, 71, 35, 98]
let studentsPassed = 0;
for (let i = 0; i < score.length; i++) {
    if (score[i] < 40) {
        score[i] = score[i] + 20;
    }
    if (score[i] > 90) {
        score[i] = 90;
    }
}

for (let i = 0; i < score.length; i++) {
    if (score[i] >= 50) {
        studentsPassed++;
    }
}
console.log("Students Passed: ", studentsPassed);
console.log(score);