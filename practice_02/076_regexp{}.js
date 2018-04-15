const string = '<h1>특별가 - </h1><h2>99,000원</h2>';
const stringDiv = '<div>특별가 - </div><h2>99,000원</h2>';
const replaceH1 = string.replace(/<.{0,1}h1>/g, '');
const replaceTags = stringDiv.replace(/<.{0,4}>/g, '');

console.log(`원래 : ${string}`);
console.log(`바뀐것: ${replaceH1}`);
console.log(`2번줄원래: ${stringDiv}`);
console.log(`2번줄바뀐것: ${replaceTags}`);
console.log(replaceH1);
console.log(replaceTags);
