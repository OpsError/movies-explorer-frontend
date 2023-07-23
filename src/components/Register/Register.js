import React from "react";
import AuthForm from "../AuthForm/AuthForm";
import validateInput from '../../utils/ValidateInput';

function Register() {
    const [formValue, setFormValue] = React.useState({
        name: 'Виталий',
        password: '123456789'
    });
    const [isInvalidName, setIsInvalidName] = React.useState(false);
    const [isInvalidPassword, setIsInvalidPassword] = React.useState(false);

    function handleChange(e) {
        const {name, value} = e.target;
        setFormValue({
            ...formValue,
            [name]: value
        });
        if (name === 'name') {
            setIsInvalidName(validateInput(value));
        }

        if (name === 'password') {
            setIsInvalidPassword(validateInput(value));
        }
        
    }
    return(
            <AuthForm section="register" buttonText="Зарегистрироваться" text="Уже зарегистрированы?" linkText="Войти" path="/signin">
                <div className="form__element">
                    <label className="form__headline">Имя</label>
                    <input className={`form__input ${isInvalidName && 'form__input_error'}`} required name="name" type="text" value={formValue.name} placeholder="Имя" onChange={handleChange} />
                    <span className="form__error">{isInvalidName && 'Что-то пошло не так...'}</span>
                </div>

                <div className="form__element">
                    <label className="form__headline">E-mail</label>
                    <input className="form__input" required name="email" type="email" defaultValue="pochta@yandex.ru" placeholder="Почта" />
                    <span className="form__error"></span>
                </div>

                <div className="form__element">
                    <label className="form__headline">Пароль</label>
                    <input className={`form__input ${isInvalidPassword && 'form__input_error'}`} required name="password" type="password" value={formValue.password} placeholder="Пароль" onChange={handleChange} />
                    <span className="form__error">{isInvalidPassword && 'Что-то пошло не так...'}</span>
                </div>
            </AuthForm>
    );
}

export default Register;