import React from "react";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

function Movies(props) {
    return(
        <main className="movies">
            <SearchForm />
            <MoviesCardList movies={props.movies} buttonDisable={false} />
        </main>
    );
}

export default Movies;