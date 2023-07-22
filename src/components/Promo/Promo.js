import React from "react";
import promoImage from '../../images/banner.svg'

function Promo() {
    return(
        <div className="main__promo promo">
            <h1 className="promo__header">Учебный проект студента факультета Веб-разработки.</h1>
            <div className="promo__image-container">
                <img src={promoImage} className="promo__promo-image" alt="Фон баннера в виде букв" />
            </div>
            
        </div>
    );
    
}

export default Promo;