import React from "react";
import { Link } from "react-router-dom";
import FormEdit from "../FormEdit/FormEdit";

function Profile() {
    const [edit, setEdit] = React.useState(false);

    function editForm() {
        setEdit(!edit);
    }
    return(
        <main className="profile">
                {
                    edit ?
                        <FormEdit textButton="Сохранить" classButton="profile__edit_color_blue">
                            <div className="profile__element">
                                <label className="profile__label">Имя</label>
                                <input type="text" className="profile__input" defaultValue="Виталий" placeholder="Имя" />
                            </div>

                            <div className="profile__element">
                                <label className="profile__label">E-mail</label>
                                <input type="email" className="profile__input" defaultValue="pochta@yandex.ru" placeholder="Почта" />
                            </div>
                        </FormEdit>
                     :

                    <FormEdit textButton="Редактировать" onClick={editForm}>
                        <div className="profile__element">
                            <label className="profile__label">Имя</label>
                            <input type="text" className="profile__input profile__input_focus_disable" defaultValue="Виталий" readOnly placeholder="Имя" />
                        </div>

                        <div className="profile__element">
                            <label className="profile__label">E-mail</label>
                            <input type="email" className="profile__input profile__input_focus_disable" defaultValue="pochta@yandex.ru" readOnly placeholder="Почта" />
                        </div>
                    </FormEdit>
                }
                {
                    edit?
                    <div className="profile__links">
                        <span className="profile__error">При обновлении профиля произошла ошибка.</span>
                        {/* profile__edit_disabled -- класс для недействующей кнопки */}
                        <button type="submit" disabled={false} className="profile__edit profile__edit_color_blue" onClick={editForm}>Сохранить</button>
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