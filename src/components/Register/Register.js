import React from "react";
import AuthForm from "../AuthForm/AuthForm";
import { validateName, validateEmail, validatePassword } from "../../utils/ValidateInput";

function Register(props) {
    const [formValue, setFormValue] = React.useState({
        name: '',
        email: '',
        password: ''
    });

    const [isEmptyInputs, setIsEmptyInputs] = React.useState(false);

    const [isValidInput, setIsValidInput] = React.useState({
        name: true,
        email: true,
        password: true
    });

    function setButtonDisable(value) {
        value === '' ? setIsEmptyInputs(true) : setIsEmptyInputs(false);
    }

    function handleChange(e) {
        const {name, value} = e.target;
        setFormValue({
            ...formValue,
            [name]: value
        });
        if (name === 'name') {
            setIsValidInput({
                ...isValidInput,
                name: validateName(value)
            });
        } else if (name === 'email') {
            setIsValidInput({
                ...isValidInput,
                email: validateEmail(value)
            });
        } else if (name === 'password') {
            setIsValidInput({
                ...isValidInput,
                password: validatePassword(value)
            });
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        props.onSubmit(formValue);
    }

    React.useEffect(() => {
        setButtonDisable(formValue.name);
        setButtonDisable(formValue.email);
        setButtonDisable(formValue.password);
    }, [formValue]);

    React.useEffect(() => {
        if (props.isLoggedIn) {
            setFormValue({
                name: '',
                email: '',
                password: ''
            });
        }
        
    }, [props.isLoggedIn]);

    const isInvalidInputs = !isValidInput.name || !isValidInput.email || !isValidInput.password;
    
    return(
            <AuthForm section="register"text="Уже зарегистрированы?" linkText="Войти" path="/signin" handleSubmit={handleSubmit}>
                <div className="form__element">
                    <label className="form__headline">Имя</label>
                    <input className={`form__input ${!isValidInput.name && 'form__input_error'}`} required name="name" type="text" value={formValue.name} placeholder="Имя" onChange={handleChange} />
                    <span className="form__error">{!isValidInput.name && 'Что-то пошло не так...'}</span>
                </div>

                <div className="form__element">
                    <label className="form__headline">E-mail</label>
                    <input className={`form__input ${!isValidInput.email && 'form__input_error'}`} required name="email" type="email" placeholder="Почта" value={formValue.email} onChange={handleChange} />
                    <span className="form__error">{!isValidInput.email && 'Что-то пошло не так...'}</span>
                </div>

                <div className="form__element">
                    <label className="form__headline">Пароль</label>
                    <input className={`form__input ${!isValidInput.password && 'form__input_error'}`} required name="password" type="password" value={formValue.password} placeholder="Пароль" onChange={handleChange} minLength={8} maxLength={30} />
                    <span className="form__error">{!isValidInput.password && 'Что-то пошло не так...'}</span>
                </div>
                
                <div className="form__submit-container">
                    <span className="form__error-response">{props.errorText}</span>
                    <button type="submit" disabled={isInvalidInputs || isEmptyInputs} className={`form__submit ${isEmptyInputs ? 'form__submit_disabled' : ''}`}>Зарегистрироваться</button>
                </div>
                
            </AuthForm>
    );
}

export default Register;