import React from "react";
import { useLocation, Link } from "react-router-dom";
import logo from '../../images/logo.svg'
import Navigation from "../Navigation/Navigation";

function Header(props) {
    const authorized = props.authorized;
    const location = useLocation();

    const headerRegister = location.pathname === '/signup' ? "header_register" : "";
    const containerRegister = location.pathname === '/signup' ? "header__container_register" : "";

    const headerLogin = location.pathname === '/signin' ? "header_register" : "";
    const containerLogin = location.pathname === '/signin' ? "header__container_register" : "";

    const containerProfile = location.pathname === '/profile' ? "header__container_profile" : "";

    const headerMain = location.pathname === '/' ? "header__background_color_purple" : "";

    return(
        <header className={ `header ${headerMain} ${headerRegister} ${headerLogin}` } >
            <div className={ `header__container ${containerRegister} ${containerLogin} ${containerProfile}` }>
                <Link to="/">
                    <img src={logo} alt="Логотип" className="header__logo" />
                </Link>
                {
                    location.pathname === '/signup' ?
                    <h2 className="header__text">Добро пожаловать!</h2>
                    : null
                }
                {
                    location.pathname === '/signin' ?
                    <h2 className="header__text">Рады видеть!</h2>
                    : null
                }
                <Navigation authorized={authorized} />

            </div>

            

        </header>
    );
}

export default Header;