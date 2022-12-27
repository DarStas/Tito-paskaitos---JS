const primaryAddress = document.querySelector("#primary-address");
const secondaryAddress = document.querySelector("#secondary-address");
const shirtSize = document.querySelector("#shirt-size");
const password = document.querySelector("#password");
const repeatPassword = document.querySelector("#repeat-password");
const finalStep = document.querySelector("#final-step");
const backButton = document.querySelector("#back-btn");
const continueButton = document.querySelector("#continue-btn");

continueButton.addEventListener("click", continueForm);

function continueForm() {
  continueButton.notDefault();
}

function validateFirstStep() {
  let result = true;
  const firstName = document.querySelector("#firstName");
  const lastName = document.querySelector("#lastName");
  const email = document.querySelector("#email");

  if (firstName.value) {
    applyDefaultInput(firstName);
  } else {
    applyErrorInput(firstName);
    result = false;
  }

  if (lastName.value) {
    applyDefaultInput(lastName);
  } else {
    applyErrorInput(lastName);
    result = false;
  }

  if (email.value) {
    applyDefaultInput(email);
  } else {
    applyErrorInput(email);
    result = false;
  }

  return result;
}

function applyDefaultInput(input) {
  input.style.border = "1px solid black";
  input.style.outline = "none";
}

function applyErrorInput(input) {
  input.style.border = "1px solid red";
  input.style.outline = "1px solid red";
}
