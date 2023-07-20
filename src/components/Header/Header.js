import React from "react";
import { useLocation, Link } from "react-router-dom";
import logo from '../../images/logo.svg'
import Navigation from "../Navigation/Navigation";

function Header(props) {
    const authorized = props.authorized;
    const location = useLocation();

    const containerAuth = ['/signup', '/signin'].includes(location.pathname) ? 'header__container_register' : '';
    const headerAuth = ['/signup', '/signin'].includes(location.pathname) ? 'header_register' : '';

    const containerProfile = location.pathname === '/profile' ? "header__container_profile" : "";
    const headerMain = location.pathname === '/' ? "header__background_color_purple" : "";

    return(
         location.pathname !== '/404' && <header className={ `header ${headerMain} ${headerAuth}` } >
            <div className={ `header__container ${containerAuth} ${containerProfile}` }>
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