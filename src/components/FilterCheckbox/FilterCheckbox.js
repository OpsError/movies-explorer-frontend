import React from "react";

function FilterCheckbox() {
    const [clickedButton, setClickedButton] = React.useState(false);

    function clickButton() {
        setClickedButton(!clickedButton);
    }
    return(
        <div className="filter">
            <button className="filter__checkbox" onClick={clickButton}>
                <span className={`filter__circle ${clickedButton? 'filter__circle_clicked' : ''}`}></span>
            </button>
            <p className="filter__name" onClick={clickButton}>Короткометражки</p>
        </div>
    );
}

export default FilterCheckbox;