import { Link } from "react-router-dom";
import {  useLocation } from "react-router";
import account from '../../images/logo_account.svg';
import closeIcon from '../../images/close-icon.svg';
import menuIcon from '../../images/mune-icon.svg'
import { useState } from "react";

function Navigation(props) {
    const location = useLocation();

    const navigationDisable = ['/signup', '/signin'].includes(location.pathname) ? 'navigation_disabled' : '';

    const [openMenu, setOpenMenu] = useState(false);

    function toggleMenu() {
        setOpenMenu(!openMenu);
    }

    const navbarEnable = openMenu? 'navigation__navbar_enable' : '';
    const overlayEnable = openMenu? 'navigation__overlay_animation' : '';
    const menuVisible = openMenu? 'navigation__navbar-menu_visible' : '';

    const mainBorder = location.pathname === '/' ? 'navigation__menu-link_border' : '';
    const moviesBorder = location.pathname === '/movies' ? 'navigation__menu-link_border' : '';
    const savedMoviesBorder = location.pathname === '/saved-movies' ? 'navigation__menu-link_border' : '';

    const moviesBold = location.pathname === '/movies' ? 'navigation__movies_weight_bold' : '';
    const savedMoviesBold = location.pathname === '/saved-movies' ? 'navigation__movies_weight_bold' : '';

    return(
        <section className={`header__navigation navigation ${navigationDisable}`}>
            {!openMenu && props.authorized &&
                <button type="button" className="navigation__button-navbar" onClick={toggleMenu}>
                    <img src={menuIcon} alt="Иконка меню" className="navigation__button-icon" />
                </button>}
            {props.authorized &&
                <section className="navigation__menu">
                    <nav className="navigation__movies-link">
                        <Link to="/movies" className={`navigation__movies ${moviesBold}`}>Фильмы</Link>
                        <Link to="/saved-movies" className={`navigation__movies ${savedMoviesBold}`}>Сохранённые фильмы</Link>
                    </nav>
                    <Link to="/profile">
                        <button type="button" className="navigation__account-button">
                        <img src={account} alt="Иконка аккаунта" className="navigation__account-icon" />
                            Аккаунт
                        </button>
                    </Link>
                </section> 
            } 
            { location.pathname === '/' &&
                <nav className="navigation__auth">
                    <Link to="signup" className="navigation__link">Регистрация</Link>
                    <Link to="signin">
                        <button className="navigation__button">Войти</button>
                    </Link>
                </nav>
            }

            {
                props.authorized &&
                <section className={`navigation__navbar ${navbarEnable}`}>
                    <span className={`navigation__overlay ${overlayEnable}`} onClick={toggleMenu} />
                    <div className={`navigation__navbar-menu ${menuVisible}`}>
                        <button type="button" className="navigation__container-icon">
                            <img src={closeIcon} onClick={toggleMenu} className="navigation__close-icon" alt="Закрыть меню" />
                        </button>
                        
                        <nav className="navigation__little-nav">
                            <Link to='/' onClick={toggleMenu} className={`navigation__menu-link ${mainBorder}`}>Главная</Link>
                            <Link to='/movies' onClick={toggleMenu} className={`navigation__menu-link ${moviesBorder}`}>Фильмы</Link>
                            <Link to='/saved-movies' onClick={toggleMenu} className={`navigation__menu-link ${savedMoviesBorder}`}>Сохранённые фильмы</Link>
                        </nav>
                        <Link to="/profile" onClick={toggleMenu} className="navigation__menu-account">
                            <button type="button" className="navigation__account-button">
                                <img src={account} alt="Иконка аккаунта" className="navigation__account-icon" />
                                Аккаунт
                            </button>
                        </Link>
                    </div>
                </section>
            }
        </section>
    );
}

export default Navigation;