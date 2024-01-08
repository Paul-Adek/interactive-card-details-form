const container = document.getElementById("container");
const cardNum = document.getElementById("card-num");
const inputNum = document.getElementById("num");

const cardName = document.getElementById("card-name");
const inputName = document.getElementById("name");

const cardExDate = document.getElementById("card-ex-date");

const cardCvc = document.getElementById("card-cvc");
const inputCvc = document.getElementById("cvc");

const inputMonth = document.getElementById("month");
const inputYear = document.getElementById("year");

const submitBtn = document.getElementById("submit-btn");

const errorName = document.getElementById("error-name");
const errorNum = document.getElementById("error-num");
const errorDate = document.getElementById("error-date");
const errorCvc = document.getElementById("error-cvc");

const eyeIcon = document.getElementById("eyeIcon");
const completedCon = document.getElementById("completed");
const formCon = document.getElementById("form-con");
const continueBtn = document.getElementById("continue");


function cardDetails() {
    inputName.addEventListener("keyup", () => {
        cardName.innerText = inputName.value;

        if (inputName.value.length <= 0) {
            errorName.style.display = 'block';
            errorName.innerText = "Can't be blank";
        } else if (!inputName.value.match(/^[a-z A-Z]+$/)) {
            errorName.style.display = 'block';
            errorName.innerText = "Wrong format, letters only";
        } else {
            errorName.style.display = 'none';
        }
    })
    inputNum.addEventListener("keyup", () => {
        cardNum.innerText = inputNum.value;

        if (inputNum.value.length <= 0) {
            errorNum.style.display = 'block';
            errorNum.innerText = "Can't be blank";
        } else if (!inputNum.value.match(/^[ 0-9]+$/)) {
            errorNum.style.display = 'block';
            errorNum.innerText = "Wrong format, numbers only";
        } else if (inputNum.value.length == 4
            || inputNum.value.length == 9
            || inputNum.value.length == 14) {
            inputNum.value = inputNum.value + " ";
        }
        else {
            errorNum.style.display = 'none';
            inputNum.value = inputNum.value;
        }

    })
    inputCvc.addEventListener("keyup", () => {
        cardCvc.innerText = inputCvc.value;
        if (inputCvc.value.length <= 0) {
            errorCvc.style.display = 'block';
            errorCvc.innerText = "Can't be blank";
        } else if (!inputCvc.value.match(/^[0-9]+$/)) {
            errorCvc.style.display = 'block';
            errorCvc.innerText = "Wrong format, numbers only";
        } else {
            errorCvc.style.display = 'none';
        }
    })
    inputYear.addEventListener("keyup", () => {
        cardExDate.innerText = inputMonth.value + '/' + inputYear.value;
        if (inputYear.value.length <= 0) {
            errorDate.style.display = 'block';
            errorDate.innerText = "Can't be blank";
        } else if (!inputYear.value.match(/^[0-9]+$/)) {
            errorDate.style.display = 'block';
            errorDate.innerText = "Wrong format, numbers only";
        } else {
            errorDate.style.display = 'none';
        }
    })
    inputMonth.addEventListener("keyup", () => {
        cardExDate.innerText = inputMonth.value + '/' + inputYear.value;
        if (inputMonth.value.length <= 0) {
            errorDate.style.display = 'block';
            errorDate.innerText = "Can't be blank";
        } else if (!inputMonth.value.match(/^[0-9]+$/)) {
            errorDate.style.display = 'block';
            errorDate.innerText = "Wrong format, numbers only";
        } else {
            errorDate.style.display = 'none';
        }
    })

}
cardDetails();

function showCompleted() {
    if (inputName.value.length >= 2 &&
        inputNum.value.length >= 2 &&
        inputCvc.value.length >= 2 &&
        inputYear.value.length >= 2 &&
        inputMonth.value.length >= 2) {

        formCon.style.display = "none";
        completedCon.style.display = "flex";
    } else {
        completedCon.style.display = "none";
        formCon.style.display = "flex";
    }
}

function showError() {
    submitBtn.addEventListener("click", () => {

        if (inputName.value.length <= 0) {
            errorName.style.display = 'block';
            errorName.innerText = "Can't be blank";

        } else if (!inputName.value.match(/^[a-z A-Z]+$/)) {
            errorName.style.display = 'block';
            errorName.innerText = "Wrong format, letters only";
        } else {
            errorName.style.display = 'none';
        }

        if (inputNum.value.length <= 0) {
            errorNum.style.display = 'block';
            errorNum.innerText = "Can't be blank";
        } else if (!inputNum.value.match(/^[ 0-9]+$/)) {
            errorNum.style.display = 'block';
            errorNum.innerText = "Wrong format, numbers only";
        } else {
            errorNum.style.display = 'none';
        }

        if (inputCvc.value.length <= 0) {
            errorCvc.style.display = 'block';
            errorCvc.innerText = "Can't be blank";
        } else if (!inputCvc.value.match(/^[0-9]+$/)) {
            errorCvc.style.display = 'block';
            errorCvc.innerText = "Wrong format, numbers only";
        } else {
            errorCvc.style.display = 'none';
        }

        if (inputYear.value.length <= 0) {
            errorDate.style.display = 'block';
            errorDate.innerText = "Can't be blank";
        } else if (!inputYear.value.match(/^[0-9]+$/)) {
            errorDate.style.display = 'block';
            errorDate.innerText = "Wrong format, numbers only";
        } else {
            errorDate.style.display = 'none';
        }

        if (inputMonth.value.length <= 0) {
            errorDate.style.display = 'block';
            errorDate.innerText = "Can't be blank";
        } else if (!inputMonth.value.match(/^[0-9]+$/)) {
            errorDate.style.display = 'block';
            errorDate.innerText = "Wrong format, numbers only";
        } else {
            errorDate.style.display = 'none';
        }
        showCompleted();
    })

}
showError();

eyeIcon.addEventListener("click", () => {


    if (inputCvc.type === "password") {
        inputCvc.type = "text";
        eyeIcon.style.setProperty("--change", "0px");
        eyeIcon.title = "Hide Password";
    } else {
        inputCvc.type = "password";
        eyeIcon.style.setProperty("--change", "25px");
        eyeIcon.title = "Show Password";
    }

});
