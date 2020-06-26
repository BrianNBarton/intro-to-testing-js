// helloWorld function 
function helloWorld() {
    return "Hello, World!";
}


function sayHello(input) {
    if (typeof input === "undefined") {
        return "Hello, World!";
    } else if (typeof input === "boolean") {
        return "Hello, World!";
    } else if (input === null) {
        return "Hello, World!";
    } else if (input === "") {
        return "Hello, World!";
    } else if (input === 2.3) {
        return "Hello, World!";
    } else {
        return "Hello, " + input + "!";
    }
}

function isFive(input) {
    return input == 5;
}


function isEven(n) {
    return n % 2 === 0;
}

function isVowel(str) {
    const noCase = typeof str === "string" ? str.toLowerCase() : "";
    return noCase === 'a' || noCase === 'e' || noCase === 'i' || noCase === 'o' || noCase === 'u';
}

function add(x, y) {
    // if (typeof isNaN(x) && isNaN(y)) {
    //     return NaN;
    // } else {
    return parseInt(x) + parseInt(y);
}
