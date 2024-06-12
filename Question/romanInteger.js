const romanInteger = (roman) => {
    let keyPair = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
    let result = 0;

    for (let i = 0; i < roman.length; i++) {
        let currentVal = keyPair[roman[i]];
        result += currentVal;
    }

    return result;
};

console.log(romanInteger("LVIII")); 

// let keyPair = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
// console.log(keyPair['L']);