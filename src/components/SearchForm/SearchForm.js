import React from "react";
import searchIcon from "../../images/find-icon.svg"
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

function SearchForm(props) {
    function handleChange(e) {
        const value = e.target.value;
        props.handleChange(value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        props.handleSubmit();
    }
    return(
        <section className="search">
            <form className="search__form" onSubmit={handleSubmit}>
                <div className="search__container">
                    <input className="search__input" required placeholder="Фильм" value={props.input} type="text" onChange={handleChange} />
                    <button type="submit" className="search__icon-conteiner">
                        <img src={searchIcon} alt="Иконка поиска" />
                    </button>
                </div>
                <FilterCheckbox handleClick={props.handleClick} isClicked={props.isClicked} />
            </form>
        </section>
    );
}

export default SearchForm;