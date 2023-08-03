import React from "react";
import { useLocation } from "react-router-dom";

function MoviesCard(props) {
    const [isLiked, setIsLiked] = React.useState(props.isLiked);
    const location = useLocation();

    function saveMovie() {
        setIsLiked(true);
        props.onClick({
            country: props.country,
            director: props.director,
            duration: props.duration,
            year: props.year,
            description: props.description,
            image: `https://api.nomoreparties.co/${props.image}`,
            trailerLink: props.trailerLink,
            thumbnail: `https://api.nomoreparties.co/${props.thumbnail}`,
            movieId: props.movieId,
            nameRU: props.nameRU,
            nameEN: props.nameEN
        });
    }

    function deleteMovie() {
        props.onDelete(props._id);
    }
    return(
        <li className="card">
            <div className="card__image-container" >
                <a href={props.trailerLink} target="_blank" rel="noreferrer">
                    <img src={location.pathname === '/movies' ? `https://api.nomoreparties.co/${props.image}` : props.image} className="card__image" alt={props.name} />
                </a>
            </div>
            <div className="card__container">
                <div className="card__info-container">
                    <h2 className="card__name">{props.nameRU}</h2>
                    {
                        location.pathname === '/movies' ?
                        <button type="button" disabled={isLiked} className={`card__like ${isLiked? "card__like_active" : ""}`} onClick={saveMovie} />
                        :
                        <button type="button" className="card__delete" onClick={deleteMovie} />
                    }
                    
                </div>
                <p className="card__time">{`${Math.floor(props.duration/60)}ч ${props.duration-(60*Math.floor(props.duration/60))}м`}</p>
            </div>
        </li>
    );
}

export default MoviesCard;