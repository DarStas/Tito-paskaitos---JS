// String

// const str = '';
// const str1 = "";
// const str2 = ``;

// str2 vadinasi stringInterpolation
// Pavyzdys

// const singleQoutes = 'single quotes';
// const doubleQuotes = "double quotes";
// const stringInterpolation = `I can inject variables into myself: ${singleQoutes}, ${doubleQuotes},

// ${addTwoNums(2, 2,)}`;

// galima pridėti ir funkcijas
// jei paduosime funkciją be skliaustelių, t.y. jos neiškviesim - console.log parodys visą funkciją
// su stringInterpolation galima dėti tarpus, kelti į kitas eilutes ir viskas matosi console.log

// Functions

// function addTwoNums(num1, num2) {
//     return num1 + num2;
// }

// console.log(stringInterpolation)

// galima paduoti ir default reikšmę, tada funkcija užsirašys taip;

// function withReturnSomeValue(a = 2, b = 2) {
//    return a + b
// }

// jeigu pvz., į funkciją bus paduotas tik vienas skaičius, tada jis bus prilyginamas a = (funkcijoje paduotas skaičius)
// o b = 2 liks kaip default
// ir tada funkcija suskaičiuos 1 + 2 ir atsakymą išconsologins 3

// jei funkcija nieko negražina, arba yra tik return - išmes undefined
// taip pat, jei funkcija nieko nepriima, tai pvz., addTwoNums() nieko nereikš, jei skliaustukuose bus
// įrašyta kas nors. Nes funkcijoje nėra pvz., num1, num2

// galima funkcijoje paduoti kitą funkciją;

function addEventListener(action, callback) {
  // event gali būti "click", "hover" ir pan.
  const event = "event";
  if (action === "click") {
    callback(event);
  }

  function eventFunction() {
    const one = 0;
    // console.log(one);
  }
  // console.log(one);
  eventFunction();
}

addEventListener("click", callbackFunction);

function callbackFunction(event) {
  // console.log(event);
}

// console.log(`${callbackFunction}`);

// Numbers

// const x = 2;
// const y = 3;
// const t1 = 2_000_000_000
// const i = 2.2

// console.log(t1)
// console.log(i)

// Booleans

// const t = true; // true literal
// const f = false; // false
// const truthy = " " && 1 && -1 && {} //truthy nėra literal, bet javascript supranta kad true
// truthy values veikia ir po vieną atskirai

// const falsy = null // falsy -> null, undefined, NaN, "", 0

// if (Element.textContent) {
//     console.log("worked")
// }

// Objects -> key value pairs

// const paragraph = document.querySelector("p");

// const x = 6;

// const permission = {
//   canBuy: true,
//   canSell: true,
//   canDelete: true,
// };

// const user = {
  // key/property: value
//   firstName: "Vardenis",
//   lastName: "Pavardenis",
//   age: 62,
//   addEventListener: addEventListener,
//   permission: permission,
//   isActive: true,
//   email: undefined,
//   password: null,
//   favoriteColor: "red",
// };
// paragraph.textContent = "abc";
// Element.textContent = "abc"
// console.log(user);

// function displayUser(user) {
//   console.log(user);
// }

// const demoContainer = document.querySelector("#demo-container");
// const input = document.querySelector("#key");
// const btn = document.querySelector("button");

// btn.addEventListener("click", updateObject);

// function updateObject() {
//   const inputValue = input.value; //key
//   user.firstName = inputValue;
//   console.log(user);

  // Dynamic key/property
  // user[inputValue] = "some value";

  // user.firstName

  // simple key/property addition
  // user.ownedCar = "Toyota";

  // user[keyValue] = "";
  // console.log(user);
// }

// function displayUser(user) {
  // console.log("before changes: ", JSON.stringify(user));
  // console.log("before changes: ", user.favoriteColor);
  // user.favoriteColor = "blue";
  // user.eyeColor = "green";
  // console.log("after changes: ", JSON.stringify(user));
  // console.log("after changes: ", user.favoriteColor);
  // const paragraph = document.createElement("p");
  // paragraph.textContent = JSON.stringify(user);
//   paragraph.textContent = `${user.firstName} ${user.lastName}, canDelete: ${user.permission.canDelete}, favorite color: ${user.favoriteColor}`;
//   user.addEventListener("click", callbackFunction);

//   demoContainer.append(paragraph);
// }

// displayUser(user);


// Deletion of properties

console.log("-------DELETION-------");
const dog = {
  name: "doggy",
  car: "Audi",
}

dog.name = "";

const dynamicKey = "name";

delete dog.car;
delete dog[dynamicKey];

console.log(dog);

// Equality

console.log("---------EQUALITY-------");

const object1 = { name: "name",};
const object2 = { name: "name",};

console.log(object1 === object2);
console.log(object1 == object2);

const object3 = {};
const object4 = object3;

object4.name = "name";
object3.name = "other name";

console.log({
  object3: object3,
  //Shorthand for line 193
  object4,
});

console.log(object3 === object4);


// Rekursyvi funkcija kviecia save iki tol kol ji pati sustoja
let step = 0;
function recursive() {


  if (step === 10) {
    return;
  }
  step++
  console.log(step);
  recursive()
}

recursive()