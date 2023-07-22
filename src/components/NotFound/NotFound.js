import React from "react";
import { Link, useNavigate } from "react-router-dom";

function NotFound() {
    const navigate = useNavigate();
    return(
        <main className="error">
            <h1 className="error__header">404</h1>
            <p className="error__decription">Страница не найдена</p>
            <Link onClick={navigate(-1)} className="error__link">Назад</Link>
        </main>
    );
}

export default NotFound;