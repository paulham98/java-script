const sign1 = Math.sign(3);
const sign2 = Math.sign(-3);
const sign3 = Math.sign('-3');
const sign4 = Math.sign(0);
const sign5 = Math.sign(NaN);
const sign6 = Math.sign('foo');
const sign7 = Math.sign();

console.log('sign1:', sign1);
console.log('sign2:', sign2);
console.log('sign3:', sign3);
console.log('sign4:', sign4);
console.log('sign5:', sign5);
console.log('sign6:', sign6);
console.log('sign7:', sign7);
