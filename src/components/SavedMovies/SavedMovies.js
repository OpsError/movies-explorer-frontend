import React from "react";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import savedMovies from '../../utils/saved-movies';

function SavedMovies() {
    return(
        <main className="saved">
            <SearchForm />
            <MoviesCardList list={savedMovies.slice(0,3)} />
        </main>
    );
}

export default SavedMovies;