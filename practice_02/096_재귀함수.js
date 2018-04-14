const sumNumber = (start, end, accmulator) => {
    if (start > end) return accmulator;
    return sumNumber(start + 1, end, accmulator + start);
};

console.log('result:', sumNumber(1, 10, 0));