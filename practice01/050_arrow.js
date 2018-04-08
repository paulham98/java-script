const printHello = () => console.log('hello');
const printHello2 = () => 'hello2';
const printMessage = message => console.log(message);
const plus = (a, b) => a + b
const minus = (a, b) => a - b;

printHello();
console.log(printHello2());
printMessage('message');
console.log('plus : %d', plus(10, 20));
console.log('minus : %d', minus(10, 20));