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