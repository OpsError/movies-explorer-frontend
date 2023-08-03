import React from "react";
import MoviesCard from "../MoviesCard/MoviesCard";
import { useLocation } from "react-router-dom";
 
function MoviesCardList(props) {
    const location = useLocation();
    const movieList = props.movies;
    const savedList = props.savedMovies;
    const [arr, setArr] = React.useState([]);
    const [isButtonDisable, setIsButtonDisable] = React.useState(false);

    function handleClickButton() {
        if (location.pathname === '/movies') {
            if (window.innerWidth > 1160) {
                if (movieList.length > (arr.length + 12)) {
                    setIsButtonDisable(false);
                    setArr(movieList.slice(0, arr.length + 12));
                } else {
                    setIsButtonDisable(true);
                    setArr(movieList.slice(0, props.movies.length));
                }
            } else if (window.innerWidth > 425  && window.innerWidth <= 1159) {
                if (props.movies.length > (arr.length + 8)) {
                    setIsButtonDisable(false);
                    setArr(movieList.slice(0, arr.length + 8));
                } else {
                    setIsButtonDisable(true);
                    setArr(movieList.slice(0, props.movies.length));
                }
            } else if (window.innerWidth <= 425) {
                if (props.movies.length > (arr.length + 5)) {
                    setIsButtonDisable(false);
                    setArr(movieList.slice(0, arr.length + 5));
                } else {
                    setIsButtonDisable(true);
                    setArr(movieList.slice(0, props.movies.length));
                }
            }
        }
        
    }

    React.useEffect(() => {
        if (window.innerWidth > 1160) {
             if (movieList.length > 12) {
                setArr(movieList.slice(0, 12));
                setIsButtonDisable(false);
             } else if (movieList.length <= 12) {
                setArr(movieList.slice(0, 12));
                setIsButtonDisable(true);
             }
        } else if (window.innerWidth > 425 && window.innerWidth <= 1159) {
            if (movieList.length > 8) {
                setArr(movieList.slice(0, 8));
                setIsButtonDisable(false);
             } else if (movieList.length <= 8) {
                setArr(movieList.slice(0, 8));
                setIsButtonDisable(true);
             }
        } else if (window.innerWidth <= 425 && props.movies.length > 5) {
            if (movieList.length > 5) {
                setArr(movieList.slice(0, 5));
                setIsButtonDisable(false);
             } else if (movieList.length <= 5) {
                setArr(movieList.slice(0, 5));
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