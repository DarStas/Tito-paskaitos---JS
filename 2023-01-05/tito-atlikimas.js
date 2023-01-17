const createLineSeperator = (taskNum) => {
    console.log(`---------- TASK ${taskNum} ----------`)
}

createLineSeperator(1)

const getTypeOfValue = (value) => {
    return typeof value;
}

console.log(getTypeOfValue(() => {}))


createLineSeperator(2)

const checkIsPrime = (number) => {
    const testNumber = (x) => {
        if (number === 1) {
            return false;
        }
    
        if (x === 2) {
            return true;
        }
    
        if (number % (x - 1) === 0) {
            return false;
        }

        return testNumber(x - 1);
    }

    return testNumber(number);
}

console.log(checkIsPrime(5))


createLineSeperator(3)

const currencySymbolMap = {
    $: "dollars",
    "€": "euros",
}

const convertCurrency = (valueToConvert, convertTo) => {
    const currencySymbol = valueToConvert.at(0);
    const convertedSymbolToCurrency = currencySymbolMap[currencySymbol];
    const currencyValue = valueToConvert.substring(1);

    if (convertedSymbolToCurrency === convertTo) {
        return valueToConvert;
    }

    // ternary operator
    return convertTo === "dollars" ? `$${currencyValue * 1.05}` : `€${currencyValue * 0.95}`;

    // tas pats kas viršuje parašyta ternary operator
    // if (convertTo === "dollars") {
    //     return `$${currencyValue * 1.05}`;
    // }

    // if (convertTo === "euros") {
    //     return `€${currencyValue * 0.95}`;
    // }
}

console.log(convertCurrency("€10", "dollars"));

createLineSeperator(4)

const startEngine = (onSuccess, onFail) => {
    const engineStarted = false;

    engineStarted ? onSuccess() : onFail();

    // if (engineStarted) {
    //     onSuccess();
    // } else {
    //     onFail();
    // }
}

const onSuccess = () => {
    console.log("Engine strated.");
}

const onFail = () => {
    console.log("Engine failed to start.");
}

startEngine(onSuccess, onFail);

createLineSeperator(5)

const convertFahrenheitToCelcius = (fahrenheit) => {
    return Math.floor(fahrenheit - 32) * 0.5556
}

console.log(convertFahrenheitToCelcius(50));

createLineSeperator(6)

const getAreaOfRectangle = (x, y,) => {
    return x * y;
}

console.log(getAreaOfRectangle(2, 2));

createLineSeperator(7)

const getCircleAreaAndPerimeter = (radius) => {
    const perimeter = Math.floor((2 * Math.PI * radius) * 100) / 100;
    const area = Math.floor((Math.PI * Math.pow(radius, 2)) * 100) / 100;

    return `Circle of radius ${radius} has perimeter of ${perimeter} and area of ${area};`
}

console.log(getCircleAreaAndPerimeter(10));

createLineSeperator(8)

// const getRandomNumber = (min, max) => {
//     return Math.random();
// }

const getFactorial = (number) => {
    if (number <= 1) {
        return 1;
    }

    return number * getFactorial(number - 1);
}

console.log(getFactorial(5));