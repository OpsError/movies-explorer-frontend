import React from "react";
import AuthForm from "../AuthForm/AuthForm";
import { validateEmail } from "../../utils/ValidateInput";

function Login(props) {
    const [formValue, setFormValue] = React.useState({
        email: '',
        password: ''
    });

    const [isValidEmail, setIsValidEmail] = React.useState(true);

    function handleChange(e) {
        const { name, value } = e.target;
        setFormValue({
            ...formValue,
            [name]: value
        });
        if (name === 'email') {
            setIsValidEmail(validateEmail(value));
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        props.onSubmit(formValue);
    }

    React.useEffect(() => {
        if (props.isLoggedIn) {
            setFormValue({
                email: '',
                password: ''
            });
        }
    }, [props.isLoggedIn]);
    return(
        <AuthForm section="login" buttonText="" text="Ещё не зарегистрированы?" linkText="Регистрация" path="/signup" submitClass="form__submit_margin_top" handleSubmit={handleSubmit}>
            <div className="form__element">
                <label className="form__headline">E-mail</label>
                <input className="form__input" required name="email" type="email" value={formValue.email} onChange={handleChange} placeholder="Почта" />
                <span className="form__error">{!isValidEmail && 'Что-то пошло не так...'}</span>
            </div>

            <div  className="form__element">
                <label className="form__headline">Пароль</label>
                <input className="form__input" required name="password" type="password" value={formValue.password} onChange={handleChange} placeholder="Пароль" />
            </div>

            <div className="form__submit-container form__submit-container_margin_top">
                    <span className="form__error-response">{props.errorText}</span>
                    <button type="submit" disabled={!isValidEmail} className='form__submit'>Войти</button>
                </div>
        </AuthForm>
    );
}

export default Login;