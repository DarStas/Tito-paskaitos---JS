console.log("--------- TASK 1 ---------");

let triangle = "#";
while (triangle.length < 8) {
  console.log(triangle);
  triangle += "#";
}

console.log("--------- TASK 2 ---------");

for (num = 1; num < 101; num++) {
  result = "";
  if (num % 3 === 0) {
    result = "Fizz";
  }
  if (num % 5 === 0) {
    result = result + "Buzz";
  }
  if (result === "") {
    result = num;
  }
  console.log(result);
}

console.log("--------- TASK 3 ---------");

const startNumber = 1;
const lastNumber = 2;

const numbers = [startNumber, lastNumber];

numbers.unshift(0);
numbers.push(3);

console.log(numbers);

console.log("--------- TASK 4 ---------");

function reverseArray( array ) {
    let reversedArray = [];
  
    while( i = array.pop() )
        reversedArray.push( i );
    
    return reversedArray;
  }
  
  function reverseArrayInPlace( array ) {
    for( var i = 0; i < Math.floor( array.length/2 ); i++ ) {
      let temp = array[i];
      array[i] = array[array.length - 1 - i];
      array[array.length - 1 - i] = temp;
    }
  }
  
  console.log(reverseArray([1, 2, 3]));
  let arrayValue = [1, 2, 3, 4, 5];
  reverseArrayInPlace(arrayValue);
  console.log(arrayValue);


  console.log("--------- TITO ATLIKIMAS ---------");

  console.log("--------- TASK TITO 1 ---------");

  const logTriangle = () => {
    const triangleChar = "#";
    for (let char = "#"; char.length <= 7; char += "#") {
      
      console.log(char);
    }
  }

  logTriangle();

  console.log("--------- TASK TITO 3 ---------");

  const range = (start, end) => {
    const result = [];
    for (let i = start; i <= end; i++) {
      result.push(i)
    }

    return result
  }

  console.log(range(1, 3));

  console.log("--------- TASK TITO 4 ---------");


  const arr = [1, 2, 3,];
  arr.reverse(); // [3, 2, 1]

  const reverseArray = (array) => {
    const result = [];

    for (let i = 0; i < array.length; i++) {
      result.unshift(array[i])
    }

    return result
  }

  const reverseArrayInPlace = (array) => {
    const result= [];

    for (let i = 0; i < array.length; i++) {
      result.push(array.pop());
    }

    return result;
  }

  const arrayToBeModify = [1, 2, 3,];

  console.log(reverseArrayInPlace(arrayToBeModify))