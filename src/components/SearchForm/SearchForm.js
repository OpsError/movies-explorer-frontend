import React from "react";
import searchIcon from "../../images/find-icon.svg"
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

function SearchForm() {
    return(
        <section className="search">
            <form className="search__form">
                <div className="search__container">
                    <input className="search__input" required placeholder="Фильм" type="text" />
                    <button type="submit" className="search__icon-conteiner">
                        <img src={searchIcon} alt="Иконка поиска" />
                    </button>
                </div>
                <FilterCheckbox />
            </form>
        </section>
    );
}

export default SearchForm;