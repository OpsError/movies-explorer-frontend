import React from "react";
import { Link } from "react-router-dom";
import studentPhoto from '../../images/student-photo.png'
import Portfolio from "../Portfolio/Portfolio";

function AboutMe() {
    return(
        <div className="main__about-me">
            <h2 className="section__header">Студент</h2>

            <div className="about-me__container">
                <div className="about-me__summary">
                    <h3 className="about-me__name">Виталий</h3>
                    <p className="about-me__profession">Фронтенд-разработчик, 30 лет</p>
                    <p className="about-me__bio">Я родился и живу в Саратове, 
                    закончил факультет экономики СГУ. У меня есть жена 
                    и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. 
                    Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». 
                    После того, как прошёл курс по веб-разработке, начал заниматься 
                    фриланс-заказами и ушёл с постоянной работы.</p>
                    {/* <Link to="https://github.com/OpsError" target="_blank" className="about-me__github">
                        <p>Github</p>
                    </Link> */}
                    <p className="about-me__link">
                        <Link to="https://github.com/OpsError" target="_blank" className="about-me__github">Github</Link>
                    </p>
                </div>

                <img src={studentPhoto} alt="Фотография студента" className="about-me__photo" />
            </div>
            <Portfolio />
        </div>
    );
}

export default AboutMe;