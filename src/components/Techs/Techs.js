import React from "react";

function Techs() {
    return(
        <div className="main__techs">
            <h2 className="section__header">Технологии</h2>

            <div className="techs__content">
                <h2 className="techs__header">7 технологий</h2>
                <p className="techs__description">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>

                <ul className="techs__list">
                    <li className="techs__element">HTML</li>
                    <li className="techs__element">CSS</li>
                    <li className="techs__element">JS</li>
                    <li className="techs__element">React</li>
                    <li className="techs__element">Git</li>
                    <li className="techs__element">Express.js</li>
                    <li className="techs__element">mongoDB</li>
                </ul>
            </div>
        </div>
    );
}

export default Techs;