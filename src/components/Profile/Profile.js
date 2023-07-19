import React from "react";
import { Link } from "react-router-dom";
import FormEdit from "../FormEdit/FormEdit";

function Profile() {
    const [edit, setEdit] = React.useState(false);

    function editForm() {
        setEdit(!edit);
    }
    return(
        <section className="profile">
                {
                    edit ?
                        <FormEdit textButton="Сохранить" classButton="profile__edit_color_blue">
                            <div className="profile__element">
                                <label className="profile__label">Имя</label>
                                <input className="profile__input" defaultValue="Виталий" />
                            </div>

                            <div className="profile__element">
                                <label className="profile__label">E-mail</label>
                                <input className="profile__input" defaultValue="pochta@yandex.ru" />
                            </div>
                        </FormEdit>
                     :

                    <FormEdit textButton="Редактировать" onClick={editForm}>
                        <div className="profile__element">
                            <label className="profile__label">Имя</label>
                            <input className="profile__input" defaultValue="Виталий" />
                        </div>

                        <div className="profile__element">
                            <label className="profile__label">E-mail</label>
                            <input className="profile__input" defaultValue="pochta@yandex.ru" />
                        </div>
                    </FormEdit>
                }
                {
                    edit?
                    <div className="profile__links">
                        <span className="profile__error">При обновлении профиля произошла ошибка.</span>
                        {/* profile__edit_disabled -- класс для недействующей кнопки */}
                        <button disabled={false} className="profile__edit profile__edit_color_blue" onClick={editForm}>Сохранить</button>
                    </div> 
                     : 
                    <div className="profile__links">
                        <button className="profile__edit" onClick={editForm}>Редактировать</button>
                        <Link to="/" className="profile__signout">Выйти из аккаунта</Link>
                    </div>
                }
        </section>
    );
}

export default Profile;