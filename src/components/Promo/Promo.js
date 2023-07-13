import React from "react";
import promoImage from '../../images/banner.svg'

function Promo() {
    return(
        <div className="main__promo">
            <h1 className="main__header">Учебный проект студента факультета Веб-разработки.</h1>
            <img src={promoImage} className="main__promo-image" alt="Фон баннера в виде букв" />
        </div>
    );
    
}

export default Promo;