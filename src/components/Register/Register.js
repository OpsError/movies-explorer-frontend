import React from "react";
import AuthForm from "../AuthForm/AuthForm";

function Register() {
    return(
            <AuthForm section="register" buttonText="Зарегистрироваться" text="Уже зарегистрированы?" linkText="Войти" path="/signin">
                <div className="form__element">
                    <label className="form__headline">Имя</label>
                    <input className="form__input" required type="text" defaultValue="Виталий" />
                    <span className="form__error"></span>
                </div>

                <div className="form__element">
                    <label className="form__headline">E-mail</label>
                    <input className="form__input" required type="email" defaultValue="pochta@yandex.ru" />
                    <span className="form__error"></span>
                </div>

                <div className="form__element">
                    <label className="form__headline">Пароль</label>
                    <input className="form__input form__input_error" required type="password" defaultValue="123456789" />
                    <span className="form__error">Что-то пошло не так...</span>
                </div>
            </AuthForm>
    );
}

export default Register;