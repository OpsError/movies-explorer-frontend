import React from "react";
import { Link } from "react-router-dom";

function AuthForm(props) {
    return(
        <main className={`form ${props.section}`}>
            <section className="form__container">
                <form className="form__formset" onSubmit={props.handleSubmit}>
                    {props.children}
                </form>
                <p className="form__register">
                    { props.text }
                    <Link to={props.path} className="form__signin">{props.linkText}</Link>
                </p>
            </section>
            
        </main>
    );
}

export default AuthForm;