import React from "react";
import { Link, useNavigate } from "react-router-dom";

function NotFound() {
    const navigate = useNavigate();
    return(
        <section className="error">
            <h2 className="error__header">404</h2>
            <p className="error__decription">Страница не найдена</p>
            <Link onClick={navigate(-1)} className="error__link">Назад</Link>
        </section>
    );
}

export default NotFound;