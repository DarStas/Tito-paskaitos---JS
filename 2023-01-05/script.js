const createLineSeperator = (taskNum) => {
  console.log(`---------- TASK ${taskNum} ----------`)
}

createLineSeperator(1)

function func(arg) {
  console.log(typeof arg);
}

func({}); // object
func(false); // boolean
func(function () {}); // function
func(123); // number
func("Helo"); // string
func(); // undefined

createLineSeperator(2)

function isPrimeNumber(n) {
  if (n == 2) {
    console.log("Is Prime Number");
  }

  n >= 2 && n % 2 != 0 && n % n === 0
    ? console.log("Is Prime Number")
    : console.log("Not a Prime Number");
}

isPrimeNumber(2);

createLineSeperator(3)

createLineSeperator(4)

function sayHello(hello,) {
  console.log(`${hello}, Darius, how are you?`);
}

sayHello("Hello");

createLineSeperator(5)

let celsius;
let fahrenheit;

const celsiusToFahr = (c) => {
  celsius = c;
  fahrenheit = c * 1.8 + 32;
  console.log(`${celsius} C is ${fahrenheit} F`);
};

const fahrenheitToCelsius = (f) => {
  fahrenheit = f;
  celsius = (f - 32) / 1.8;
  console.log(`${fahrenheit} F is ${celsius} C`);
};

celsiusToFahr(10);
fahrenheitToCelsius(50);

createLineSeperator(6)

let lenght = parseFloat("10");
let width = parseFloat("30");

let area = lenght * width;

console.log(`Area : ${area}`);

createLineSeperator(7)

function CircleAreaPerimeter(radius) {
  return {
    radius,
    area() {
      return (Math.PI * radius * radius).toFixed(10);
    },
    perimeter() {
      return (2 * Math.PI * radius).toFixed(10);
    },
  };
}

const testCase = CircleAreaPerimeter(5);
console.log("The area of this circle is " + testCase.area() + " square units."); // Užduotyje atvirkščiai gaunasi - čia turėtų būti area
console.log("The perimter of this circle is " + testCase.perimeter() + " units."); // o čia perimetras, bent pagal skaičiavimą man taip išlogina
