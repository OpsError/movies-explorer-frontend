import React from "react";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import movieList from '../../utils/movie-list'

function Movies() {
    const [arr, setArr] = React.useState([]);

    React.useEffect(() => {
        if (window.innerWidth > 1160) {
            setArr(movieList.slice(0, 12));
        } else if (window.innerWidth > 425) {
            setArr(movieList.slice(0, 8));
        } else if (window.innerWidth <= 425) {
            setArr(movieList.slice(0, 5));
        }
    }, [arr.length])
    return(
        <main className="movies">
            <SearchForm />
            <MoviesCardList list={arr} />
        </main>
    );
}

export default Movies;