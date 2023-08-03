import validator from "validator";

const regex = /^[a-zа-яё\s/-]+$/i;

function validateName(name) {
    return regex.test(name) && validator.isByteLength(name, {min: 3, max: 59});
}

function validateEmail(email) {
    return validator.isEmail(email);
}

function validatePassword(password) {
    return validator.isByteLength(password, { min: 8, max: 30 });
}

export {
    validateName,
    validateEmail,
    validatePassword
}