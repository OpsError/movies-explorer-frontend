import React from "react";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import filterFilms from "../../utils/FilterFilms";
import Preloader from "../Preloader/Preloader";

function SavedMovies(props) {
    const [formValue, setFormValue] = React.useState('');
    const [isShortDuration, setIsShortDuration] = React.useState(true);
    const [searchFilms, setSearchFilms] = React.useState([]);
    const [isPreloaderEnable, setIsPreloaderEnable] = React.useState(false);
    const [isSavedMovieList, setIsSavedMovieList] = React.useState(true);

    function handleChange(value) {
        setFormValue(value);
    }

    async function handleClick() {
        await setIsShortDuration(!isShortDuration);
        handleSubmit();
    }

    function handleSubmit() {
        setSearchFilms([]);
        setIsPreloaderEnable(true);
        setTimeout(() => {
            setIsPreloaderEnable(false);
        }, 2000);
        const film = props.savedMovies.filter((film) => filterFilms(film, formValue, isShortDuration, false));
        console.log(isShortDuration)
        setSearchFilms(film);
        setIsSavedMovieList(false);
    }

    React.useEffect(() => {
        if (!formValue) {
            setIsSavedMovieList(true);
        }
    }, [formValue])

    React.useEffect(() => {
        handleSubmit();
        setIsPreloaderEnable(false);
    }, []);

    return(
        <main className="saved">
            <SearchForm handleSubmit={handleSubmit} handleChange={handleChange} handleClick={handleClick} isSearchDuration={isShortDuration} formValue={formValue} />
            <MoviesCardList movies={isSavedMovieList ? props.savedMovies : searchFilms} buttonDisable={true} handleDelete={props.handleDelete} isEmpty={props.isEmpty} isPreloaderEnable={isPreloaderEnable} />
            <Preloader isEnable={isPreloaderEnable} />
        </main>
    );
}

export default SavedMovies;