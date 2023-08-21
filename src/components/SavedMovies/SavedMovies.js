import React from "react";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import filterFilms from "../../utils/FilterFilms";
import Preloader from "../Preloader/Preloader";

function SavedMovies(props) {
    const [isPreloaderEnable, setIsPreloaderEnable] = React.useState(false);

    const [isClicked, setIsClicked] = React.useState(true);
    const [input, setInput] = React.useState('');

    // найденные фильмы
    const [searchMovies, setSearchMovies] = React.useState([]);

    async function handleClick() {
        await setIsClicked(isClicked => !isClicked);
    }

    function handleChange(value) {
        setInput(value);
        if (value === '') {
            if (isClicked) {
                enablePreloader();
                localStorage.setItem('searchMovies', JSON.stringify(props.movies));
                setSearchMovies(props.movies);
            } else {
                enablePreloader();
                handleSubmit();
            }
            
        }
    }

    function enablePreloader() {
        setIsPreloaderEnable(true);
        setTimeout(() => {setIsPreloaderEnable(false)}, 2000);
    }

    async function handleSubmit() {
        const movies = await props.movies.filter((movie) => filterFilms(movie, input, isClicked));
        setSearchMovies(movies);
    }

    React.useEffect(() => {
        enablePreloader();
        handleSubmit();
    }, [isClicked]);

    React.useEffect(() => {
        setSearchMovies(props.movies);
        handleSubmit();
    }, [props.movies]);
    return(
        <main className="saved">
            <SearchForm handleSubmit={handleSubmit} handleChange={handleChange} handleClick={handleClick} isClicked={isClicked} formValue={input} />
            <MoviesCardList movies={searchMovies} buttonDisable={true} handleDelete={props.handleDelete} isPreloaderEnable={isPreloaderEnable} />
            <Preloader isEnable={isPreloaderEnable} />
        </main>
    );
}

export default SavedMovies;