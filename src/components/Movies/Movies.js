import React from "react";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Preloader from "../Preloader/Preloader";
import filterFilms from "../../utils/FilterFilms";

function Movies(props) {
    const [isPreloaderEnable, setIsPreloaderEnable] = React.useState(false);
    
    // // чекбокс. true - все фильмы, false - короткометражки
    const [isClicked, setIsClicked] = React.useState(() => {
        return localStorage.getItem('isClicked') ? JSON.parse(localStorage.getItem('isClicked')) : true
    });
    const [input, setInput] = React.useState(() => {
        return localStorage.getItem('input') ? localStorage.getItem('input') : ''
    });
    const allMovies = JSON.parse(localStorage.getItem('allMovies'));

    // // найденные фильмы
    const [searchMovies, setSearchMovies] = React.useState(localStorage.getItem('searchMovies') ? JSON.parse(localStorage.getItem('searchMovies')) : []);

    React.useEffect(() => {
        const localSearchMovies = JSON.parse(localStorage.getItem('searchMovies')) ? JSON.parse(localStorage.getItem('searchMovies')) : allMovies;
        const localInput = localStorage.getItem('input') ? localStorage.getItem('input') : '';

        setSearchMovies(localSearchMovies);
        setInput(localInput);
        handleSubmit();
    }, []);

    function enablePreloader() {
        setIsPreloaderEnable(true);
        setTimeout(() => {setIsPreloaderEnable(false)}, 2000);
    }

    async function handleClick() {
        localStorage.setItem('isClicked', JSON.stringify(!isClicked));
        await setIsClicked(isClicked => !isClicked);
    }

    function handleChange(value) {
        localStorage.setItem('input', value);
        setInput(value);
        if (value === '') {
            if (isClicked) {
                enablePreloader();
                localStorage.setItem('searchMovies', JSON.stringify(allMovies));
                setSearchMovies(allMovies);
            } else {
                handleSubmit();
            }
            
        }
    }

    function handleSubmit() {
        enablePreloader();
        let movies = props.movies.filter( (movie) =>  filterFilms(movie, input, isClicked));
        localStorage.setItem('searchMovies', JSON.stringify(movies));
        setSearchMovies(movies);
    }

    React.useEffect(() => {
        handleSubmit();
    }, [isClicked]);

    return(
        <main className="movies">
            <SearchForm isClicked={isClicked} input={input} handleClick={handleClick} handleChange={handleChange} handleSubmit={handleSubmit} />
            <MoviesCardList movies={(searchMovies.length === 0 && isClicked && input === '') ? props.movies : searchMovies} savedMovies={props.savedMovies} handleLike={props.handleLike} handleDislike={props.handleDislike} isPreloaderEnable={isPreloaderEnable} />
            <Preloader isEnable={isPreloaderEnable} />
        </main>
    );
}

export default Movies;