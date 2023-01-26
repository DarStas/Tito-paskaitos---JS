console.log("---------- TASK 1 ----------");

function vowelCount(word) {
  let vowels = "aeiouAEIOU";
  let vowelCount = 0;

  for (let x = 0; x < word.length; x++) {
    if (vowels.indexOf(word[x]) !== -1) {
      vowelCount += 1;
    }
  }
  return vowelCount;
}
console.log(vowelCount("Stasiukaitis"));

console.log("---------- TASK 2 ----------");

function palindrome(str) {
  let replaceLetter = /[^A-Za-z0-9]/g;
  str = str.toLowerCase().replace(replaceLetter, "");

  let len = str.length;
  for (let i = 0; i < len / 2; i++) {
    if (str[i] !== str[len - 1 - i]) {
      return false;
    }
  }
  return true;
}

console.log(palindrome("abu gaišo po šia guba"));

console.log("---------- TASK 3 ----------");

function countLetters(string, letter) {
  let letterCount = 0;
  for (let i = 0; i < string.length; i++) {
    if (string.charAt(i) == letter) {
      letterCount += 1;
    }
  }
  return letterCount;
}

console.log(countLetters("turboreanimacija", "a"));

console.log("---------- TASK 4 ----------");

function computeUnion(array1, array2) {
  
    if ((array1 == null) || (array2==null)) 
      return void 0;
    
    let obj = {};
   
    for (let i = array1.length-1; i >= 0; -- i)
       obj[array1[i]] = array1[i];
   
    for (let i = array2.length-1; i >= 0; -- i)
       obj[array2[i]] = array2[i];
   
       let res = [];
   
    for (let n in obj)
    {
    
      if (obj.hasOwnProperty(n)) 
        res.push(obj[n]);
    }
   
    return res;
  }
  console.log(computeUnion([1, 2, 3], [100, 2, 1, 10]));

  console.log("---------- TASK 5 ----------");

  function findNumberPairs(numbers, targetNumber) {
    let map = [];
    let indexes = [];
    
    for (let x = 0; x < numbers.length; x++)
    {
    if (map[numbers[x]] != null)
    {
    let index = map[numbers[x]];
    indexes[0] = indexes;
    indexes[1] = x;
    break;
    }
    else
    {
    map[targetNumber - numbers[x]] = x;
    }
    }
    return indexes;
    }
  console.log(findNumberPairs([10,20,10,40,50,60,70],50));