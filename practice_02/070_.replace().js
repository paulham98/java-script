const greeting = 'hello';
const dateString = '2017-08-24T11:00:00';
const smallBracket = '()';

const replacedGreeting = greeting.replace('ed', '');
const replacedDateString = dateString.replace('T', '');
const middleBracket = smallBracket.replace('(', '{').replace(')', '}');

console.log('el 없애시 : $s', replacedGreeting);
console.log('T를 공백으로 : $s', replacedDateString);
console.log('() => {} : %s', middleBracket);