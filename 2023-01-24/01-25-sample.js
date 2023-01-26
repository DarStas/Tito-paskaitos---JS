const favoriteColors = ["black"];

favoriteColors.push("green");
favoriteColors.push("brown");
favoriteColors.unshift("white");
favoriteColors.pop();
favoriteColors.shift();
favoriteColors[0] = "red";

console.log(favoriteColors);

// let maxIteration = 5;
// for(let index = 0; index < maxIteration; index++) {
//     console.log(Math.random());
// }

// while (currentIteration < 5) {
//     console.log(Math.random()); // ciklas be galo, nes visada true, o while veikia iki tol, kol boolean pasiekia false
//     currentIteration++
// }

// do {
//     console.log(Math.random());
//     currentIteration++
// } while (currentIteration < 0);

// let maxIteration = 5;

// for (let color of favoriteColors) {
//     console.log(color);
// }

let userFavoriteColors = "";
favoriteColors.forEach((color, index) => {
  userFavoriteColors += `${index === 0 ? "" : ", "}${color}`;
});

console.log(`Favorite colors of user are: ${userFavoriteColors}.`);

const favoriteColorsWithoutRed = favoriteColors.filter((color) => {
    return color === "red";
}) 

console.log(favoriteColorsWithoutRed);

// const someValue = "firstName1";
// const obj = {firstName: "Verdenis"};
// obj.firstName = "Vardenis";
// obj[someValue] = "test";

// const testArr = [];
// testArr[0] = "black";

// console.log(testArr.length);

// console.log(favoriteColors);
