function printMessage(message) {
    console.log(message);
}

const printWelcome = function () {
    console.log('welcome');
};

printMessage('bye');
printWelcome();

console.log('typeof printMessage : %s', typeof printMessage);
console.log('typeof printWelcome : %s', typeof printWelcome);

const pm = printMessage;
pm('good morning');
console.log('typeof pm : %s', typeof pm);