// functions to validate auth inputs


export const validateLogin = (email, password) => {
    return email.length !== 0 && password.length >= 8;
};

export const validateRegister = (email, password, confirmPassword) => {
    if (email.length == 0) {
        return {error: 'email is invalid.'};
    }
    if (password.length < 8) {
        return {error: 'password must be at least 8 characters.'};
    }
    if (password !== confirmPassword) {
        return {error: 'passwords do not match.'}
    }

    return;
}
