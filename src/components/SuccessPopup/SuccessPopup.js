import React from "react";
import buttonClose from '../../images/close-icon.svg';

function SuccessPopup(props) {
    return(
        <section className='successPopup'>
            <div className={`popup ${props.isOpen ? 'popup_opened' : ''}`} onMouseDown={props.onClose}>
                <div className="popup__container">
                    <button type="button" className="popup__close">
                        <img src={buttonClose} alt="Закрыть окно" className="popup__close-icon" />
                    </button>

                    <div className="popup__img">
                        <p className="popup__text">Данные успешно обновлены</p>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default SuccessPopup;