const studentList = [
    { name: 'kyeongrok', age: 31, math: 85, english: 87 },
    { name: 'jihyun', age: 31, math: 95, english: 97 },
    { name: 'minup', age: 35, math:76, english: 84 },
    { name: 'dasom', age: 35, math: 76, english: 73},
    { name: 'mattheue', age: 29, math: 34, english: 100 },
];

const sorted = studentList.sort((now, next) => now.math - next.math);
console.log('sorted:', sorted);
const reversed = sorted.reverse();
console.log('reversed', reversed);
const sliced = reversed.slice(0, 3);
console.log('sliced:', sliced);