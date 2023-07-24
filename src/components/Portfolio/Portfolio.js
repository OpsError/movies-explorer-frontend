import React from "react";
import { Link } from "react-router-dom";

function Portfolio() {
    return(
        <div className="about-me__portfolio portfolio">
            <h3 className="portfolio__header">Портфолио</h3>

            <nav className="portfolio__list">
                <Link to="https://github.com/OpsError/how-to-learn" className="portfolio__site" target="_blank">
                    Статичный сайт
                    <p className="portfolio__arrow-icon">↗</p>
                </Link>

                <Link to="https://github.com/OpsError/russian-travel" className="portfolio__site" target="_blank">
                    Адаптивный сайт
                    <p className="portfolio__arrow-icon">↗</p>
                </Link>

                <Link to="https://github.com/OpsError/react-mesto-api-full-gha" className="portfolio__site" target="_blank">
                    Одностраничное приложение
                    <p className="portfolio__arrow-icon">↗</p>
                </Link>
            </nav>
        </div>
    );
}

export default Portfolio;