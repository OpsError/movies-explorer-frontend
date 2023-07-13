import React from "react";
import arrowIcon from '../../images/arrow-icon.svg'
import { Link } from "react-router-dom";

function Portfolio() {
    return(
        <div className="about-me__portfolio">
            <h3 className="portfolio__header">Портфолио</h3>

            <ul className="portfolio__list">
                <Link to="https://github.com/OpsError/how-to-learn" className="portfolio__site" target="_blank">
                    Статичный сайт
                    <img src={arrowIcon} alt="Стрелочка для перехода на сайт" />
                </Link>

                <Link to="https://github.com/OpsError/russian-travel" className="portfolio__site" target="_blank">
                    Адаптивный сайт
                    <img src={arrowIcon} alt="Стрелочка для перехода на сайт" />
                </Link>

                <Link to="https://github.com/OpsError/react-mesto-api-full-gha" className="portfolio__site" target="_blank">
                    Одностраничное приложение
                    <img src={arrowIcon} alt="Стрелочка для перехода на сайт" />
                </Link>
            </ul>
        </div>
    );
}

export default Portfolio;