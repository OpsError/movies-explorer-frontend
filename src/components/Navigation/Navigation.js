import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import account from '../../images/logo_account.svg';

function Navigation(props) {
    return(
        <Routes>
            {props.authorized?
                <Route path="/" element={
                    <div className="navigation__account">
                        <Link to="/me">
                        <button className="navigation__account-button">
                            <img src={account} alt="Иконка аккаунта" className="navigation__account-icon" />
                            Аккаунт
                        </button>
                        </Link>
                    </div>
                } /> :
                <Route path="/" element={
                    <div className="navigation__auth">
                        <Link to="/signup" className="navigation__link">Регистрация</Link>
                        <Link to="/signin">
                            <button className="navigation__button">Войти</button>
                        </Link>
                    </div>
                } />
                    
            }
                    
        </Routes>
    );
}

export default Navigation;