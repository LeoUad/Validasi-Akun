let firstNameInput = document.getElementById("first-name-input");
let firstNameError = document.getElementById("first-name-error");
let emptyFirstNameError = document.getElementById("empty-first-name");

let emailInput = document.getElementById("email");
let emailError = document.getElementById("email-error");
let emptyEmailError = document.getElementById("empty-email");

let phoneInput = document.getElementById("phone");
let phoneError = document.getElementById("phone-error");
let emptyPhoneError = document.getElementById("empty-phone");

let passwordInput = document.getElementById("password");
let passwordError = document.getElementById("password-error");
let emptyPasswordError = document.getElementById("empty-password");

let verifyPasswordInput = document.getElementById("verify-password");
let verifyPasswordError = document.getElementById("verify-password-error");
let emptyVerifyPasswordError = document.getElementById("empty-verify-password");

let submitButton = document.getElementById("submit-button");

let validClasses = "valid";
let invalidClasses = "error";

const validateInput = (input, emptyErrorElement, errorElement, validationFunction) => {
    let value = input.value.trim();

    
    emptyErrorElement.style.display = "none";
    errorElement.style.display = "none";
    input.classList.remove(invalidClasses);
    input.classList.remove(validClasses);

    if (value === "") {
        emptyErrorElement.style.display = "block";
        input.classList.add(invalidClasses);
        return false;
    }

    if (!validationFunction(value)) {
        errorElement.style.display = "block";
        input.classList.add(invalidClasses);
        return false;
    }

    input.classList.add(validClasses);
    return true;
}

const isNotEmpty = (value) => value !== "";
const isEmailValid = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
const isPhoneNumberValid = (value) => /^[0-9]{12}$/.test(value);
const isPasswordValid = (value) => value.length >= 8;
const arePasswordsMatching = (password, verifyPassword) => password === verifyPassword;

submitButton.addEventListener("click", (event) => {
    event.preventDefault();

    let isFirstNameValid = validateInput(firstNameInput, emptyFirstNameError, firstNameError, isNotEmpty);
    let isEmailValidFlag = validateInput(emailInput, emptyEmailError, emailError, isEmailValid);
    let isPhoneValid = validateInput(phoneInput, emptyPhoneError, phoneError, isPhoneNumberValid);
    let isPasswordValidFlag = validateInput(passwordInput, emptyPasswordError, passwordError, isPasswordValid);
    let arePasswordsMatchingFlag = validateInput(verifyPasswordInput, emptyVerifyPasswordError, verifyPasswordError, (value) => arePasswordsMatching(passwordInput.value, value));

    if (isFirstNameValid && isEmailValidFlag && isPhoneValid && isPasswordValidFlag && arePasswordsMatchingFlag) {
        
        console.log("Form submitted successfully!");
    } else {
        console.log("Form contains errors.");
    }
});
