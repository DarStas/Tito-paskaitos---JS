// step 0 content
const step0Content = document.querySelector(".step-0");
const firstNameInput = document.querySelector("#firstName");
const lastNameInput = document.querySelector("#lastName");
const emailInput = document.querySelector("#email");

//action buttons
const continueBtn = document.querySelector("#confirm-btn");
const backBtn = document.querySelector("#back-btn");

// step 1 content
const step1Content = document.querySelector(".step-1");
const primaryAddressInput = document.querySelector("#primaryAddres");
const secondaryAddressInput = document.querySelector("#secondaryAddres");
const shirtSizeInput = document.querySelector("#shirtSize");


const step2Content = document.querySelector(".step-2");

const step3Content = document.querySelector(".step-3");

// result object
const result = {
    step: 0,
    user: {},
};

const hiddenClass = "hidden";

continueBtn.addEventListener("click", onContinue);

function onContinue(event) {
    event.preventDefault();
    if (result.step === 0)
    if (!firstNameInput.value || !lastNameInput.value || !emailInput.value || emailInput.validity.typeMismatch) {
        if (!firstNameInput.value) {
            applyErrorToInput(firstNameInput);
        }

        if (!lastNameInput.value) {
            applyErrorToInput(lastNameInput);
        }

        if (!email.value || emailInput.validity.typeMismatch) {
            applyErrorToInput(email);
        }
    } else {
        result.user.firstName = firstNameInput.value;
        result.user.lastName = lastNameInput.value;
        result.user.email = emailInput.value;
        result.step +=1;
        displayWizardStep(1);
    }
    if (result.step === 1) {
        if (!primaryAddressInput.value || shirtSizeInput.value) {
            if (!primaryAddressInput.value) {
                applyErrorToInput(primaryAddressInput);
            }

            if (!shirtSizeInput.value) {
                applyErrorToInput(shirtSizeInput);
            }
        } else {
            result.user.primaryAddress = primaryAddressInput.value;
            result.user.shirtSize = shirtSizeInput.value;
        }
    }
}

function applyErrorToInput(input) {
    input.classList.add("error");
}

function displayWizardStep(step) {
    if (step === 0) {
        step0Content.classList.remove(hiddenClass);
        step1Content.classList.add(hiddenClass);
        step2Content.classList.add(hiddenClass);
        step3Content.classList.add(hiddenClass);
        backBtn.classList.add(hiddenClass);
    }

    if (step === 1) {
        step0Content.classList.add(hiddenClass);
        step1Content.classList.remove(hiddenClass);
        step2Content.classList.add(hiddenClass);
        step3Content.classList.add(hiddenClass);
        backBtn.classList.remove(hiddenClass);
    }

    if (step === 2) {
        step0Content.classList.add(hiddenClass);
        step1Content.classList.add(hiddenClass);
        step2Content.classList.remove(hiddenClass);
        step3Content.classList.add(hiddenClass);
        backBtn.classList.remove(hiddenClass);
    }

    if (step === 3) {
        step0Content.classList.add(hiddenClass);
        step1Content.classList.add(hiddenClass);
        step2Content.classList.add(hiddenClass);
        step3Content.classList.remove(hiddenClass);
        backBtn.classList.remove(hiddenClass);
    }
}

function clearErrors() {
    
}

function onBack(event) {
    event.preventDefault();
    displayWizardStep(result.step - 1);
    result.step -= 1
}