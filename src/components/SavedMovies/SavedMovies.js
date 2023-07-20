import React from "react";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import savedMovies from '../../utils/saved-movies';

function SavedMovies() {
    return(
        <section className="saved">
            <SearchForm />
            <MoviesCardList list={savedMovies.slice(1,3)} />
        </section>
    );
}

export default SavedMovies;