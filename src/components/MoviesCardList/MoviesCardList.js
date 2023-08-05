import React from "react";
import MoviesCard from "../MoviesCard/MoviesCard";
import { useLocation } from "react-router-dom";
import { LAPTOP_WIDTH, TABLET_WIDTH, MOBILE_WIDTH } from "../../utils/WidthScreen";
import { LAPTOP_COUNT, TABLET_COUNT, MOBILE_COUNT } from "../../utils/CountArray";
 
function MoviesCardList(props) {
    const location = useLocation();
    const movieList = props.movies;
    const savedList = props.savedMovies;
    const [arr, setArr] = React.useState([]);
    const [isButtonDisable, setIsButtonDisable] = React.useState(false);

    function handleClickButton() {
        if (location.pathname === '/movies') {
            if (window.innerWidth > LAPTOP_WIDTH) {
                if (movieList.length > (arr.length + LAPTOP_COUNT)) {
                    setIsButtonDisable(false);
                    setArr(movieList.slice(0, arr.length + LAPTOP_COUNT));
                } else {
                    setIsButtonDisable(true);
                    setArr(movieList.slice(0, props.movies.length));
                }
            } else if (window.innerWidth > MOBILE_WIDTH  && window.innerWidth <= TABLET_WIDTH) {
                if (props.movies.length > (arr.length + TABLET_COUNT)) {
                    setIsButtonDisable(false);
                    setArr(movieList.slice(0, arr.length + TABLET_COUNT));
                } else {
                    setIsButtonDisable(true);
                    setArr(movieList.slice(0, props.movies.length));
                }
            } else if (window.innerWidth <= MOBILE_WIDTH) {
                if (props.movies.length > (arr.length + MOBILE_COUNT)) {
                    setIsButtonDisable(false);
                    setArr(movieList.slice(0, arr.length + MOBILE_COUNT));
                } else {
                    setIsButtonDisable(true);
                    setArr(movieList.slice(0, props.movies.length));
                }
            }
        }
        
    }

    React.useEffect(() => {
        if (window.innerWidth > LAPTOP_WIDTH) {
             if (movieList.length > LAPTOP_COUNT) {
                setArr(movieList.slice(0, LAPTOP_COUNT));
                setIsButtonDisable(false);
             } else if (movieList.length <= LAPTOP_COUNT) {
                setArr(movieList.slice(0, LAPTOP_COUNT));
                setIsButtonDisable(true);
             }
        } else if (window.innerWidth > MOBILE_WIDTH && window.innerWidth <= TABLET_WIDTH) {
            if (movieList.length > TABLET_COUNT) {
                setArr(movieList.slice(0, TABLET_COUNT));
                setIsButtonDisable(false);
             } else if (movieList.length <= TABLET_COUNT) {
                setArr(movieList.slice(0, TABLET_COUNT));
                setIsButtonDisable(true);
             }
        } else if (window.innerWidth <= MOBILE_WIDTH && props.movies.length > 5) {
            if (movieList.length > MOBILE_COUNT) {
                setArr(movieList.slice(0, MOBILE_COUNT));
                setIsButtonDisable(false);
             } else if (movieList.length <= MOBILE_COUNT) {
                setArr(movieList.slice(0, MOBILE_COUNT));
                setIsButtonDisable(true);
             }
        }
    }, [movieList]);
    
    return(
        !props.isPreloaderEnable && <section className="list">
            <ul className={`list__container ${!movieList ? "list__container_disable" : ""}`} >
                {   location.pathname === '/movies' ?
                    arr.map( (movie) => (
                        <MoviesCard 
                        country={movie.country}
                        director={movie.director}
                        duration={movie.duration}
                        year={movie.year}
                        description={movie.description}
                        image={movie.image.url}
                        trailerLink={movie.trailerLink}
                        thumbnail={movie.image.formats.thumbnail.url}
                        movieId={movie.id}
                        nameRU={movie.nameRU}
                        nameEN={movie.nameEN}
                        key={movie.id}
                        isLiked={savedList.some(film => film.movieId === movie.id)}
                        onClick={props.handleLike}
                        /> 
                    ))
                    : null }
                { location.pathname === '/saved-movies' && !props.isEmpty ?
                    arr.map( (movie) => (
                        <MoviesCard 
                        country={movie.country}
                        director={movie.director}
                        duration={movie.duration}
                        year={movie.year}
                        description={movie.description}
                        image={movie.image}
                        trailerLink={movie.trailerLink}
                        thumbnail={movie.thumbnail}
                        movieId={movie.movieId}
                        _id={movie._id}
                        key={movie._id}
                        nameRU={movie.nameRU}
                        nameEN={movie.nameEN}
                        onDelete={props.handleDelete}
                        />
                    ))
                    : 
                    null
                }
            </ul>
            {arr.length === 0 ? 
            <p className="list__result">Ничего не найдено</p> 
            : null}
            <button type="button" onClick={handleClickButton} disabled={isButtonDisable} className={`list__button ${isButtonDisable ? 'list__button_disable' : ''}`}>
                    Ещё
            </button>
        </section>
    );
}

export default MoviesCardList;