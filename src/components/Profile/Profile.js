import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import FormEdit from "../FormEdit/FormEdit";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import ProfileEdit from "../ProfileEdit/ProfileEdit";

function Profile(props) {
  const currentUser = React.useContext(CurrentUserContext);

  return (
    <Routes>
      <Route path="/" element={
        <main className="profile">
          <FormEdit textButton="Редактировать">
            <div className="profile__element">
              <label className="profile__label">Имя</label>
              <input type="text" className="profile__input profile__input_focus_disable" value={currentUser.name} disabled placeholder="Имя" />
            </div>

            <span className="profile__border" />
              <div className="profile__element">
                <label className="profile__label">E-mail</label>
                <input type="email" className="profile__input profile__input_focus_disable" value={currentUser.email} disabled placeholder="Почта" />
              </div>
          </FormEdit>
            <div className="profile__links">
              <Link to="/profile/edit">
                <button type="button" className="profile__edit">
                  Редактировать
                </button>
              </Link>
                  
              <Link to="/" className="profile__signout" onClick={props.signout}>
                Выйти из аккаунта
              </Link>
            </div>
        </main>
      } />
      <Route path="/edit" element={ <ProfileEdit onSubmit={props.onSubmit} />} />
    </Routes>
  )
}

export default Profile;
