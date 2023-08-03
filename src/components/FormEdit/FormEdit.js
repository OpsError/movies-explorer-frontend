import React from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function FormEdit(props) {
    const currentUser = React.useContext(CurrentUserContext);
    return(
         <section className="profile__container">
            <h1 className="profile__headline">{`Привет, ${currentUser.name}!`}</h1>
            <form className="profile__form" onSubmit={props.onSubmit}>
                { props.children }
            </form>
        </section>
    );
}

export default FormEdit;