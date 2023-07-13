import React from "react";
import { Link } from "react-router-dom";
import logo from '../../images/logo.svg'
import Navigation from "../Navigation/Navigation";

const authorized = false;

function Header() {
    return(
        <header className={authorized? "header header__background_color_transparent" : "header"}>
            <div className="header__container">
                { authorized? 
                <div className="header__menu">
                    <img src={logo} alt="Логотип" className="header__logo" />
                        <Link to="/" className="header__movies">Фильмы</Link>
                        <Link to="/movies" className="header__movies header__movies_weight_regular">Сохранённые фильмы</Link>
                </div> : 
                <img src={logo} alt="Логотип" className="header__logo" /> }

                <Navigation authorized={authorized} /> 

            </div>

            

        </header>
    );
}

export default Header;