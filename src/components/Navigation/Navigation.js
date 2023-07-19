import React from "react";
import { Link, Route, Routes, useLocation } from "react-router-dom";
import account from '../../images/logo_account.svg';
import closeIcon from '../../images/close-icon.svg';

function Navigation(props) {
    const location = useLocation();

    const navigationRegister = location.pathname === '/signup'? 'navigation__list_disabled' : "";
    const navigationLogin = location.pathname === '/signin'? 'navigation__list_disabled' : "";

    const [openMenu, setOpenMenu] = React.useState(false);

    function toggleMenu() {
        setOpenMenu(!openMenu);
    }

    const navbarEnable = openMenu? 'navigation__navbar_enable' : '';
    const overlayEnable = openMenu? 'navigation__overlay_animation' : '';
    const menuVisible = openMenu? 'navigation__navbar_menu_visible' : '';

    const mainLink = location.pathname === '/' ? 'navigation__menu-link_border' : '';
    const movieLink = location.pathname === '/movies' ? 'navigation__menu-link_border' : '';
    const savedMoviesLink = location.pathname === '/saved-movies' ? 'navigation__menu-link_border' : '';
    return(
        <div className={`navigation__list ${navigationRegister} ${navigationLogin}`}>
            {!openMenu && <button className="navigation__navbar-button" onClick={toggleMenu} />}
            {props.authorized?
                <div className="navigation__menu">
                    <div>
                        <Link to="/" className="header__movies">Фильмы</Link>
                        <Link to="/movies" className="header__movies header__movies_weight_regular">Сохранённые фильмы</Link>
                    </div>
                    <Link to="/profile">
                        <button className="navigation__account-button">
                        <img src={account} alt="Иконка аккаунта" className="navigation__account-icon" />
                            Аккаунт
                        </button>
                    </Link>
                </div> :
                <Routes>
                    <Route path="/" element={
                        <div className="navigation__auth">
                            <Link to="/signup" className="navigation__link">Регистрация</Link>
                            <Link to="/signin">
                                <button className="navigation__button">Войти</button>
                            </Link>
                        </div>
                    } />
                </Routes>
            }

            {
                props.authorized &&
                <div className={`navigation__navbar ${navbarEnable}`}>
                    <span className={`navigation__overlay ${overlayEnable}`} onClick={toggleMenu} />
                    <div className={`navigation__navbar_menu ${menuVisible}`}>
                        <div className="navigation__container-icon">
                            <img src={closeIcon} onClick={toggleMenu} className="navigation__close-icon" alt="Закрыть меню" />
                        </div>
                        
                        <div className="navigation__little-nav">
                            <Link to='/movies' onClick={toggleMenu} className={`navigation__menu-link ${mainLink}`}>Главная</Link>
                            <Link to='/movies' onClick={toggleMenu} className={`navigation__menu-link ${movieLink}`}>Фильмы</Link>
                            <Link to='/movies' onClick={toggleMenu} className={`navigation__menu-link ${savedMoviesLink}`}>Сохранённые фильмы</Link>
                        </div>
                        <Link to="/profile" onClick={toggleMenu} className="navigation__menu-account">
                            <button className="navigation__account-button">
                            <img src={account} alt="Иконка аккаунта" className="navigation__account-icon" />
                                Аккаунт
                            </button>
                        </Link>
                    </div>
                </div>
            }
        </div>
    );
}

export default Navigation;