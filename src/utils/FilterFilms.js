function filterFilms(film, formValue, isLongFilm) {
    if (!formValue) {
        if (isLongFilm) {
            return film;
        } else if (!isLongFilm && film.duration <= 40) {
            return film;
        }
    } else if (film.nameRU.toUpperCase().includes(formValue.toUpperCase()) || film.nameEN.toUpperCase().includes(formValue.toUpperCase())) {
        if (isLongFilm) {
            return film;
        } else if (!isLongFilm && film.duration <= 40) {
            return film;
        }
    }
}

export default filterFilms;