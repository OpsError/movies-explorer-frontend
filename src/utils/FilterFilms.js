function filterFilms(film, formValue, isShortDuration, isSavedLocalStorage) {
    if (film.nameRU.toUpperCase().includes(formValue.toUpperCase()) || film.nameEN.toUpperCase().includes(formValue.toUpperCase())) {
        if (isShortDuration === true) {
            if (isSavedLocalStorage) {
                localStorage.setItem('filmName',formValue);
                localStorage.setItem('filmDuration', isShortDuration);
            }
            return film;
        } else if (isShortDuration === false && film.duration <= 40) {
            if (isSavedLocalStorage) {
                localStorage.setItem('filmName',formValue);
                localStorage.setItem('filmDuration', isShortDuration);
            }
            return film;
        }
    }
}

export default filterFilms;