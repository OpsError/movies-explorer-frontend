import React from "react";
import searchIcon from "../../images/find-icon.svg"
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

function SearchForm() {
    return(
        <div className="search">
            <div className="search__container">
                <input className="search__input" placeholder="Фильм" />
                <button className="search__icon-conteiner">
                    <img src={searchIcon} alt="Иконка поиска" />
                </button>
            </div>
            <FilterCheckbox />
        </div>
    );
}

export default SearchForm;