import React from "react";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Preloader from "../Preloader/Preloader";
import filterFilms from "../../utils/FilterFilms";

function Movies(props) {
    const filmName = localStorage.getItem('filmName');
    const filmDuration = localStorage.getItem('filmDuration');
    const films = JSON.parse(localStorage.getItem('films'));
    const [formValue, setFormValue] = React.useState(filmName? filmName : '');
    const [isShortDuration, setIsShortDuration] = React.useState(filmDuration ? filmDuration : false);
    const [searchFilms, setSearchFilms] = React.useState(films? films : [] );
    const [isPreloaderEnable, setIsPreloaderEnable] = React.useState(false);
    const [isSavedMovieList, setIsSavedMovieList] = React.useState(true);

    function handleChange(value) {
        setFormValue(value);
    }

    function handleClick() {
        setIsShortDuration(!isShortDuration);
    }

    async function handleSubmit() {
        localStorage.setItem('filmDuration', isShortDuration);
        setSearchFilms([]);
        setIsPreloaderEnable(true);
        setTimeout(() => {
            setIsPreloaderEnable(false);
        }, 2000);
        const film = props.movies.filter((film) => filterFilms(film, formValue, isShortDuration, true));
        setSearchFilms(film);
        localStorage.setItem('films', JSON.stringify(film));
    }

    React.useEffect(() => {
        if (!formValue) {
            setIsSavedMovieList(true)
        } else if (formValue) {
            setIsSavedMovieList(false);
            setIsPreloaderEnable(false);
        }
    }, [formValue]);

    React.useEffect(() => {
        setIsShortDuration(localStorage.getItem('filmDuration'));
    }, []);
    
    return(
        <main className="movies">
            <SearchForm handleSubmit={handleSubmit} handleChange={handleChange} handleClick={handleClick} isSearchDuration={isShortDuration} formValue={formValue} />
            <MoviesCardList movies={isSavedMovieList ? props.movies : searchFilms} savedMovies={props.savedMovies} isPreloaderEnable={isPreloaderEnable} handleLike={props.handleLike} />
            <Preloader isEnable={isPreloaderEnable} />
        </main>
    );
}

export default Movies;