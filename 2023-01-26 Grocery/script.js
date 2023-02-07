import { getDataFromLocalStorage } from "./storageManager/getDataFromLocalStorage.js";
import { createGroceryItem } from "./utils/createGroceryItem.js";
import { getDataFromLocalStorage } from "./storageManager/getDataFromLocalStorage.js"
 

const addGroceryBtn = document.querySelector("#add");
const groceryInput = document.querySelector("#grocery-input");

addGroceryBtn.addEventListener("click", () => {
    createGroceryItem(groceryInput.value);
});

const groceriesFromLocalStorage = getDataFromLocalStorage("groceries");
groceriesFromLocalStorage.forEach((grocery) => {

    createGroceryItem(grocery);
})

console.log(getDataFromLocalStorage("groceries"));