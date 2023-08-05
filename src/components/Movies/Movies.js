import React from "react";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Preloader from "../Preloader/Preloader";
import filterFilms from "../../utils/FilterFilms";

function Movies(props) {
    // const [formValue, setFormValue] = React.useState(localStorage.getItem('filmName') ? localStorage.getItem('filmName') : '');
    // const [isLongFilm, setIsLongFilm] = React.useState(localStorage.getItem('filmDuration') ? localStorage.getItem('filmDuration') : false);

    // const [searchFilms, setSearchFilms] = React.useState(JSON.parse(localStorage.getItem('films')) ? JSON.parse(localStorage.getItem('films')) : []);
    const [isPreloaderEnable, setIsPreloaderEnable] = React.useState(false);
    // const [isSavedMovieList, setIsSavedMovieList] = React.useState(JSON.parse(localStorage.getItem('films')) ? true : false);

    // function handleChange(value) {
    //     if (!value) {
    //         setIsSavedMovieList(false);
    //         localStorage.removeItem('filmName');
    //     }
    //     setFormValue(value);
    // }

    // async function handleClick() {
    //     localStorage.setItem('filmDuration', !isLongFilm);
    //     await setIsLongFilm(!isLongFilm);
    //     handleSubmit();
    // }

    // function handleSubmit() {
    //     setIsSavedMovieList(true);
    //     const film = props.movies.filter((film) => filterFilms(film, formValue, isLongFilm, true));
    //     localStorage.setItem('films', JSON.stringify(film));
    //     setSearchFilms(film);
    //     setIsPreloaderEnable(true);
    //     setTimeout(() => {
    //         setIsPreloaderEnable(false);
    //     }, 2000);
    // }

    // React.useEffect(() => {
    //     if (formValue === '' && !localStorage.getItem('filmDuration')) {
    //         setIsSavedMovieList(false);
    //     }
    // }, [isLongFilm]);
    
    // чекбокс. true - длинные фильмы, false - короткометражки
    const [isClicked, setIsClicked] = React.useState(localStorage.getItem('isClicked') ? localStorage.getItem('isClicked') : '');
    const [input, setInput] = React.useState(localStorage.getItem('movieName') ? localStorage.getItem('movieName') : '');

    // найденные фильмы
    const [searchMovies, setSearchMovies] = React.useState(JSON.parse(localStorage.getItem('movies')) ? JSON.parse(localStorage.getItem('movies')) : []);

    async function handleClick() {
        await setIsClicked(!isClicked);
    }

    function handleChange(value) {
        setInput(value);
    }

    async function handleSubmit() {
        setIsPreloaderEnable(true);
        setTimeout(() => {setIsPreloaderEnable(false)}, 2000);
        const movies = await props.movies.filter((movie) => filterFilms(movie, input, isClicked));
        setSearchMovies(movies);
    }

    React.useEffect(() => {
        localStorage.setItem('isClicked', isClicked);
        handleSubmit();
    }, [isClicked]);

    React.useEffect(() => {
        localStorage.setItem('movies', JSON.stringify(searchMovies));
    }, [searchMovies]);

    React.useEffect(() => {
        localStorage.setItem('movieName', input);
        if (input === '') {
            setSearchMovies(props.movies);
        }
    }, [input]);

    return(
        <main className="movies">
            <SearchForm isClicked={isClicked} input={input} handleClick={handleClick} handleChange={handleChange} handleSubmit={handleSubmit} />
            <MoviesCardList movies={searchMovies} savedMovies={props.savedMovies} handleLike={props.handleLike} isPreloaderEnable={isPreloaderEnable} />
            <Preloader isEnable={isPreloaderEnable} />
        </main>
    );
}

export default Movies;