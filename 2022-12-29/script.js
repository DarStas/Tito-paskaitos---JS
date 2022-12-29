const value = "some value";
const value2 = "some value2";

const obj1 = {
    key: value,
    key2: {
        key1: value,
        key2: {
            key1: value,
            key2: {
                key1: value,
            }
        }
    },
    key3: 1,
    key4: false,
    key5: {
        key1: value,
    },

    //Metodas
    key6: function () {
        console.log("I am key6 value");
    },
    "key 7": undefined, // should avoid such keys with spaces
    key8: null,
    // key10: 10
};

obj1.key3 // 1
obj1.key9 // undefined

if (obj1.key9) {
    // do something with obj1.key9 value
}

// will create a key since it was not able to find one with key as "key10"
obj1.key10 = 10;

// will assign "key3" value to a variable
const prewiousValueOfKey3 = obj1.key3;
// will update a key value since it was able to find such key as "key3"
obj1.key3 = 2;

// Function
function func() {
    
}

func();
obj1.key6();

console.log(obj1.key2.key2.key2);

obj1["key 7"]; // su tais laužtiniais skliaustais galima įtraukti bet ką sqare bracket
console.log(obj1["key 7"]); 
// iškonsologina undefined

// laužtinių skliaustų tipiškas naudojimas yra

//represents some key
const inputValue = "color"; // nes mes nežinom, ką user įrašys

obj1.inputValue = "red";

obj1[inputValue] = "red";

obj1.key2.key2.key1 = "update value";

console.log(obj1);

// How to compare objects?

// funkcijos

const arg1 = 1;
const arg2 = 2;

function func1(arg1, arg2) {
    console.log(arg1, arg2);

    return arg1 + arg2
}

const result = func1(2, 5)
console.log(result);

