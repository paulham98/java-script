const string = '(<h1>:::특별가 - 99,000원:::</h1>)';

const replaceBracket = string.replace(/[()]/g, '');
const replaceBracketOrSlashHyphenComma = string.replace(/[()/\-,]/g, '');

console.log('바꾸기전 ---->', string);
console.log('()없애기 ---->', replaceBracket);
console.log('/-없애기 ---->', replaceBracketOrSlashHyphenComma);