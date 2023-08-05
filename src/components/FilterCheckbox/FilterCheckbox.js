import React from "react";

function FilterCheckbox(props) {
    return(
        <div className="filter">
            <button type="button" className="filter__checkbox" onClick={props.handleClick}>
                <span className={`filter__circle ${props.isClicked? 'filter__circle_clicked' : ''}`}></span>
            </button>
            <p className="filter__name">Короткометражки</p>
        </div>
    );
}

export default FilterCheckbox;