import React from "react";
import { Link } from "react-router-dom";
import FormEdit from "../FormEdit/FormEdit";
import { validateName } from "../../utils/ValidateInput";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function Profile(props) {
    const currentUser = React.useContext(CurrentUserContext);
    const [edit, setEdit] = React.useState(false);
    const [isInvalidData, setIsInvalidData] = React.useState(false);
    const [formValue, setFormValue] = React.useState({
        name: currentUser.name,
        email: currentUser.email
    });

    function editForm() {
        setEdit(!edit);
    }

    function handleChange(e) {
        const { name, value } = e.target;
        setFormValue({
            ...formValue,
            [name]: value
        })
        setIsInvalidData( name === 'name'? validateName(value) : false );
    }
    return(
        <main className="profile">
                {
                    edit ?
                        <FormEdit textButton="Сохранить" classButton={`profile__edit_color_blue ${isInvalidData && 'profile__edit_disabled'}`}>
                            <div className="profile__element">
                                <label className="profile__label">Имя</label>
                                <input name="name" type="text" className={`profile__input ${isInvalidData && 'profile__input_error'}`} value={formValue.name} placeholder="Имя" onChange={handleChange} />
                            </div>

                            <span className="profile__border" />

                            <div className="profile__element">
                                <label className="profile__label">E-mail</label>
                                <input name="email" type="email" className="profile__input" value={formValue.email} placeholder="Почта" onChange={handleChange} />
                            </div>
                        </FormEdit>
                     :

                    <FormEdit textButton="Редактировать" onClick={editForm}>
                        <div className="profile__element">
                            <label className="profile__label">Имя</label>
                            <input type="text" className="profile__input profile__input_focus_disable" value={formValue.name} disabled placeholder="Имя" />
                        </div>

                        <span className="profile__border" />

                        <div className="profile__element">
                            <label className="profile__label">E-mail</label>
                            <input type="email" className="profile__input profile__input_focus_disable" value={formValue.email} disabled placeholder="Почта" />
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
                        <Link to="/" className="profile__signout" onClick={props.signout}>Выйти из аккаунта</Link>
                    </div>
                }
        </main>
    );
}

export default Profile;