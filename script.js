const time = document.querySelector("[data-testid='test-user-time']");
const form = document.querySelector(".form");
const fullName = document.querySelector("#full-name");
const subject = document.querySelector("#subject");
const email = document.querySelector("#email");
const message = document.querySelector("#message");
const success = document.querySelector("#success");

// current utc time in ms
function updateTime() {
    const currentTime = new Date().getTime();
    time.innerHTML = `${currentTime}ms`;
}

setInterval(updateTime, 1000);

form.addEventListener("submit", (e) => {
    e.preventDefault();

    checkInputs();
});

function checkInputs() {
    const fNameValue = fullName.value.trim();
    const subjectValue = subject.value.trim();
    const emailValue = email.value.trim();
    const messageValue = message.value.trim();

    if (fNameValue === "") {
        setErrorFor(fullName, "Name cannot be empty");
    } else {
        removeError(fullName)
    }

    if (emailValue === "") {
        setErrorFor(email, "Email cannot be empty");
    } else if (!isEmail(emailValue)) {
        setErrorFor(email, "Enter a valid email.");
    } else {
        removeError(email)
    }

    if (subjectValue === "") {
        setErrorFor(subject, "Subject cannot be empty");
    } else {
        removeError(subject)
    }

    if (messageValue === "") {
        setErrorFor(message, "Message cannot be empty");
    } else if (messageValue.length < 10) {
        setErrorFor(message, "Message is too small");
    } else {
        removeError(message)
    }

    if (fNameValue !== "" && emailValue !== "" && isEmail(emailValue) && subjectValue !== "" && messageValue.length >= 10) {
        setSuccess()
    }

    function setErrorFor(input, message) {
        // if (input.value == "") {
        const formControl = input.parentElement;
        const small = formControl.querySelector("small");

        small.innerText = message;
        formControl.classList = 'form-control error';
        // } else {
        //     const formControl = input.parentElement;
        //     formControl.classList = 'form-control';
        // }

    }
    function removeError(input) {
        const formControl = input.parentElement;
        formControl.classList = 'form-control';

    }

    function setSuccess() {
        form.classList = "form success";
        success.classList.add('show')
        setTimeout(() => {
            success.classList.remove('show')
            form.classList = "form";
        }, 3000);
        form.reset()
    }

    function isEmail(email) {
        return /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/.test(email);
    };
};
