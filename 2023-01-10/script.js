const baseObj = {
    x: 1,
}

const extendedObj = {
    ...baseObj,
    y: 2,
}

console.log(extendedObj);

class BaseObj {
    x = 1;
    y = 2;

    constructor(x, y) {
        this.x = x;
        this.y = y
    }
}

const baseObjViaClass = new BaseObj(5, 3);
console.log(baseObjViaClass);

const testFunc = (arg1, arg2) => {}; // arrow function taip užsirašo

testFunc()

// --------- BONUS Factorial -------- 
// while ciklo panaudojimas
// do...while ciklo panaudojimas
// for ciklo panaudojimas

const getNewFactorial = (number) => {
    let result = 1;
    while (number > 1) {
        result *= number;
        number--;
    }
    return result
}

console.log(getNewFactorial(1));

const getOtherFactorial = (number) => {
    let result = 1;
    do {
        result *= number;
        number--;
    } while (number > 1);
    return result;
}

console.log(getOtherFactorial(6));


const getNaujausiasFactorial = (number) => {
    let result = 1;
    for (let i = 1; i <= number; i++) {
        result *= i;
    }
    return result
}

console.log(getNaujausiasFactorial(3));