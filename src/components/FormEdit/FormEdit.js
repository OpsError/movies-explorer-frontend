import React from "react";

function FormEdit(props) {
    return(
         <div className="profile__container">
            <h2 className="profile__headline">Привет, Виталий!</h2>
            <form className="profile__form">
                { props.children }
            </form>
        </div>
    );
}

export default FormEdit;