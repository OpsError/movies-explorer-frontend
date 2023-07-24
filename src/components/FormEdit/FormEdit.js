import React from "react";

function FormEdit(props) {
    return(
         <section className="profile__container">
            <h1 className="profile__headline">Привет, Виталий!</h1>
            <form className="profile__form">
                { props.children }
            </form>
        </section>
    );
}

export default FormEdit;