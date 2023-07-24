import React from "react";
import { Link } from "react-router-dom";
import FormEdit from "../FormEdit/FormEdit";
import validateInput from "../../utils/ValidateInput"

function Profile() {
    const [edit, setEdit] = React.useState(false);
    const [formName, setFormName] = React.useState('Виталий');
    const [isInvalidData, setIsInvalidData] = React.useState(false);
    const [formEmail, setFormEmail] = React.useState('pochta@yandex.ru');

    function editForm() {
        setEdit(!edit);
    }

    function handleChangeEmail(e) {
        const value = e.target;
        setFormEmail(value.value);
    }

    function handleChange(e) {
        const value = e.target;
        setFormName(value.value);
        setIsInvalidData(validateInput(value.value));
    }
    return(
        <main className="profile">
                {
                    edit ?
                        <FormEdit textButton="Сохранить" classButton={`profile__edit_color_blue ${isInvalidData && 'profile__edit_disabled'}`}>
                            <div className="profile__element">
                                <label className="profile__label">Имя</label>
                                <input name="name" type="text" className={`profile__input ${isInvalidData && 'profile__input_error'}`} value={formName} placeholder="Имя" onChange={handleChange} />
                            </div>

                            <span className="profile__border" />

                            <div className="profile__element">
                                <label className="profile__label">E-mail</label>
                                <input name="email" type="email" className="profile__input" value={formEmail} placeholder="Почта" onChange={handleChangeEmail} />
                            </div>
                        </FormEdit>
                     :

                    <FormEdit textButton="Редактировать" onClick={editForm}>
                        <div className="profile__element">
                            <label className="profile__label">Имя</label>
                            <input type="text" className="profile__input profile__input_focus_disable" value={formName} disabled placeholder="Имя" />
                        </div>

                        <span className="profile__border" />

                        <div className="profile__element">
                            <label className="profile__label">E-mail</label>
                            <input type="email" className="profile__input profile__input_focus_disable" value={formEmail} disabled placeholder="Почта" />
                        </div>
                    </FormEdit>
                }
                {
                    edit?
                    <div className="profile__links">
                        <span className="profile__error">При обновлении профиля произошла ошибка.</span>
                        {/* profile__edit_disabled -- класс для недействующей кнопки */}
                        <button type="submit" disabled={isInvalidData} className={`profile__edit profile__edit_color_blue ${isInvalidData && 'profile__edit_disabled'}`} onClick={editForm}>Сохранить</button>
                    </div> 
                     : 
                    <div className="profile__links">
                        <button type="button" className="profile__edit" onClick={editForm}>Редактировать</button>
                        <Link to="/" className="profile__signout">Выйти из аккаунта</Link>
                    </div>
                }
        </main>
    );
}

export default Profile;