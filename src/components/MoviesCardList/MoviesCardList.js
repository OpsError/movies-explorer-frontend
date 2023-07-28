import React from "react";
import MoviesCard from "../MoviesCard/MoviesCard";
// import { useLocation } from "react-router-dom";
 
function MoviesCardList(props) {
    // const location = useLocation();
    const movieList = props.movies;
    const [arr, setArr] = React.useState([]);
    const [isButtonDisable, setIsButtonDisable] = React.useState(props.buttonDisable);

    React.useEffect(() => {
        if (window.innerWidth > 1160) {
            setArr(movieList.slice(0, 12));
        } else if (window.innerWidth > 425) {
            setArr(movieList.slice(0, 8));
        } else if (window.innerWidth <= 425) {
            setArr(movieList.slice(0, 5));
        }
    }, [movieList]);

    function handleClickButton() {
        if (window.innerWidth > 1160) {
            if (props.movies.length >= (arr.length + 12)) {
                setArr(movieList.slice(0, arr.length + 12));
            } else {
                setIsButtonDisable(true);
                setArr(movieList.slice(0, props.movies.length));
            }
        } else if (window.innerWidth > 425) {
            if (props.movies.length >= (arr.length + 8)) {
                setArr(movieList.slice(0, arr.length + 8));
            } else {
                setIsButtonDisable(true);
                setArr(movieList.slice(0, props.movies.length));
            }
        } else if (window.innerWidth <= 425) {
            if (props.movies.length >= (arr.length + 5)) {
                setArr(movieList.slice(0, arr.length + 5));
            } else {
                setIsButtonDisable(true);
                setArr(movieList.slice(0, props.movies.length));
            }
        }
    }
    
    return(
        <section className="list">
            <ul className="list__container">
                { arr.map( (movie) => (
                    <MoviesCard image={movie.image.url} name={movie.nameRU} time={movie.duration} like={movie.like} key={movie.id} />
                    ))
                }
            </ul>
            <button type="button" onClick={handleClickButton} className={`list__button ${isButtonDisable ? 'list__button_disable' : ''}`}>
                    Ещё
            </button>
        </section>
    );
}

export default MoviesCardList;