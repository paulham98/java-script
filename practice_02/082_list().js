const studentList = [
    { name: 'kyeongrok', age: 31, score:85 },
    { name: 'jihyun', age: 31, score: 95 },
    { name: 'minsup', age: 35, score: 76 },
];

console.log(studentList[0]);

const student1 = { name: 'yuna', age: 26, score: 85 };
studentList.push(student1);

console.log(studentList);

studentList.pop();
console.log(studentList);