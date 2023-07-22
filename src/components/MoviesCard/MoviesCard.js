import React from "react";
import { useLocation } from "react-router-dom";

function MoviesCard(props) {
    const [like, setLike] = React.useState(props.like);

    const location = useLocation();

    function saveMovie() {
        setLike(!like);
    }
    return(
        <li className="card">
            <div className="card__image-container">
                <img src={props.image} className="card__image" alt={props.name} />
            </div>
            <div className={`card__container ${location.pathname === '/saved-movies' ? 'card__container_cursor_pointer' : ''}`}>
                <div className="card__info-container">
                    <h2 className="card__name">{props.name}</h2>
                    {
                        location.pathname === '/movies' ?
                        <button type="button" className={`card__like ${like? "card__like_active" : ""}`} onClick={saveMovie} />
                        :
                        <button type="button" className="card__delete" />
                    }
                    
                </div>
                <p className="card__time">{`${Math.floor(props.time/60)}ч ${props.time-(60*Math.floor(props.time/60))}м`}</p>
            </div>
        </li>
    );
}

export default MoviesCard;