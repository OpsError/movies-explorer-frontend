import React from "react";
import MoviesCard from "../MoviesCard/MoviesCard";
import { useLocation } from "react-router-dom";
 
function MoviesCardList(props) {
    const location = useLocation();
    
    return(
        <div className="list">
            <ul className="list__container">
                { props.list.map( (movie) => (
                    <MoviesCard image={movie.image} name={movie.name} time={movie.time} like={movie.like} key={movie._id} />
                    ))
                }
            </ul>
            <button type="button" className={`list__button ${location.pathname === '/saved-movies' ? 'list__button_disable' : ''}`}>
                    Ещё
            </button>
        </div>
    );
}

export default MoviesCardList;