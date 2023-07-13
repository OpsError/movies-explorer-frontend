import React from "react";
import { Link } from "react-router-dom";

function Footer() {
    const actualYear = new Date();

    return(
        <footer className="footer">
            <p className="footer__header">Учебный проект Яндекс.Практикум х BeatFilm.</p>

            <div className="footer__ending">
                <p className="footer__year">© {actualYear.getFullYear()}</p>

                <ul className="footer__links">
                    <Link to="https://practicum.yandex.ru/" className="footer__link" target="_blank">Яндекс.Практикум</Link>
                    <Link to="https://github.com/OpsError" className="footer__link" target="_blank">Github</Link>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;