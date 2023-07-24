import React from "react";
import AuthForm from "../AuthForm/AuthForm";

function Login() {
    return(
        <AuthForm section="login" buttonText="Войти" text="Ещё не зарегистрированы?" linkText="Регистрация" path="/signup" submitClass="form__submit_margin_top">
            <div className="form__element">
                <label className="form__headline">E-mail</label>
                <input className="form__input" required type="email" defaultValue="pochta@yandex.ru" placeholder="Почта" />
                <span className="form__error"></span>
            </div>

            <div  className="form__element">
                <label className="form__headline">Пароль</label>
                <input className="form__input" required type="password" placeholder="Пароль" />
                <span className="form__error"></span>
            </div>
        </AuthForm>
    );
}

export default Login;