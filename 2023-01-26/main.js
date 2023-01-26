const dataContainer = document.querySelector("#data");
const input = document.querySelector("#input");
const btn = document.querySelector("#btn");

btn.addEventListener("click", () => {
    dataContainer.textContent += dataContainer.textContent ? `, ${input.value}` : input.value;
    const dataToStore = JSON.stringify([{name: "name" }]);
    window.localStorage.setItem("userNames", dataToStore);
})

const userNames = window.localStorage.getItem("userNames");
console.log(JSON.parse(userNames));
if (userNames) {
    dataContainer.textContent = userNames;
}

//sessionStorage ir localStorage skiriasi tuo, kad jie informacija nesidalina. session negali pasiekti duomenų 
// iš localStorage. Session uždarius tab'ą išsitrins, o local liks info net ir uždarius tab'ą

