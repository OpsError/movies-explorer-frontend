import React from "react";

function AboutProject() {
    return(
        <div className="main__about about">
            <h2 className="about__header header-section">О проекте</h2>
            <div className="about__description">
                <div className="about__list">
                    <h3 className="about__headline">Дипломный проект включал 5 этапов</h3>
                    <p className="about__explanation">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
                </div>

                <div className="about__list">
                    <h3 className="about__headline">На выполнение диплома ушло 5 недель</h3>
                    <p className="about__explanation">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
                </div>
            </div>

            <div className="about__deadlines">
                <p className="about__time about__time_backgroung_black">1 неделя</p>
                <p className="about__time about__time_background_gray">4 недели</p>
                <p className="about__time">Back-end</p>
                <p className="about__time">Front-end</p>
            </div>
        </div>
    );
}

export default AboutProject;