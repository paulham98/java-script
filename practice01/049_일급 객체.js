function plus(a, b) {
    return a + b;
}

function minus(a, b) {
    return a - b;
}

let p = plus;
console.log("typeof plus : %s", typeof plus);
console.log("typeof p : %s", typeof p);
console.log("10 + 20 = %d", p(10, 20));

function calculate(a, b, func) {
    return func(a, b);
}

console.log( calculate(10, 20, minus));
console.log(calculate(10, 20, plus));