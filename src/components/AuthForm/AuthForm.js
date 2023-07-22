import React from "react";
import { Link } from "react-router-dom";

function AuthForm(props) {
    return(
        <main className={`form ${props.section}`}>
            <form className="form__formset">
                {/* className="form__input_error" */}
                {props.children}

                <button type="submit" className={`form__submit ${props.submitClass}`}>{props.buttonText}</button>
            </form>
            <p className="form__register">
                { props.text }
                <Link to={props.path} className="form__signin">{props.linkText}</Link>
            </p>
        </main>
    );
}

export default AuthForm;