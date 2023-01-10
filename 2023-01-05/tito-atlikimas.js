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
    
        if (number % x - 1 === 0) {
            return false;
        }

        return testNumber(x - 1);
    }

    return testNumber(number);
}

console.log(checkIsPrime(2))


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
