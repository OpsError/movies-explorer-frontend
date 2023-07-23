function ValidateInput(value) {
    if(value.length < 4 || value.length > 31) {
        return true;
    } else {
        return false;
    }
}

export default ValidateInput;