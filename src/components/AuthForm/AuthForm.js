import React from "react";
import { Link } from "react-router-dom";

function AuthForm(props) {
    return(
        <section className={`form ${props.section}`}>
            <form className="form__formset">
                {/* className="form__input_error" */}
                {props.children}

                <button className={`form__submit ${props.submitClass}`}>{props.buttonText}</button>
            </form>
            <p className="form__register">
                { props.text }
                <Link to={props.path} className="form__signin">{props.linkText}</Link>
            </p>
        </section>
    );
}

export default AuthForm;