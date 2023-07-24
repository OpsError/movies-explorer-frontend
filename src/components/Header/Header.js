import React from "react";
import { useLocation, Link } from "react-router-dom";
import logo from '../../images/logo.svg'
import Navigation from "../Navigation/Navigation";

function Header(props) {
    const location = useLocation();

    const containerAuth = ['/signup', '/signin'].includes(location.pathname) ? 'header__container_register' : '';
    const headerAuth = ['/signup', '/signin'].includes(location.pathname) ? 'header_register' : '';

    const containerProfile = location.pathname === '/profile' ? "header__container_profile" : "";
    const headerMain = location.pathname === '/' ? "header_background_purple" : "";

    return(
         location.pathname !== '/404' && <header className={ `header ${headerMain} ${headerAuth}` } >
            <div className={ `header__container ${containerAuth} ${containerProfile}` }>
                <Link to="/">
                    <img src={logo} alt="Логотип" className="header__logo" />
                </Link>
                {
                    location.pathname === '/signup' &&
                    <h1 className="header__text">Добро пожаловать!</h1>
                }
                {
                    location.pathname === '/signin' &&
                    <h1 className="header__text">Рады видеть!</h1>
                }
                <Navigation authorized={props.authorized} />

            </div>
        </header>
    );
}

export default Header;