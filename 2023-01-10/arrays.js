const favoriteNumber1 = 1;
const favoriteNumber2 = 4;
const favoriteNumber3 = 76;
const favoriteNumber4 = 18;

// const favoriteNumbers = `${favoriteNumber1} ${favoriteNumber2} ${favoriteNumber3}`;

const favoriteNumbers = [favoriteNumber1, favoriteNumber2, favoriteNumber3, 5];

favoriteNumbers.push(3); // įdeda narį į galą
favoriteNumbers.unshift(0); // įdeda narį į pačią pradžią

console.log(favoriteNumbers);

favoriteNumbers.pop(); // paima paskutinį narį ir jį išpopina (išsprogdina)
favoriteNumbers.shift(); // išima pirmutinį narį

favoriteNumbers.reverse(); // apverčia ir išlogina iš kito galo seką

console.log(favoriteNumbers[2]);
console.log(favoriteNumbers[favoriteNumbers.length - 1]);
console.log(favoriteNumbers.at(-1));


const arraySample = ['some text', 1, {text: 'abs'}, () => {}, true, undefined, null];