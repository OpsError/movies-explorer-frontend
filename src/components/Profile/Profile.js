import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import FormEdit from "../FormEdit/FormEdit";
import { validateName, validateEmail } from "../../utils/ValidateInput";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function Profile(props) {
  const currentUser = React.useContext(CurrentUserContext);
  const [isInvalidData, setIsInvalidData] = React.useState(true);
  const [formValue, setFormValue] = React.useState({
    name: currentUser.name,
    email: currentUser.email,
  });
  const [isButtonDisable, setIsButtonDisable] = React.useState(false);
  const [isSameInputs, setIsSameInputs] = React.useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    props.onSubmit({
        name: formValue.name,
        email: formValue.email
    });
    setIsButtonDisable(true);
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setFormValue({
      ...formValue,
      [name]: value,
    });

    let isValidName = false;
    let isValidEmail = false;
    if (name === 'name') {
        isValidName = validateName(value);
    } else {
        isValidEmail = validateEmail(value);
    }

    setIsInvalidData( isValidName || isValidEmail );
  }

  React.useEffect(() => {
    if (formValue.name === currentUser.name && formValue.email === currentUser.email) {
      setIsSameInputs(true);
    } else {
      setIsSameInputs(false);
    }
  }, [formValue], [currentUser]);
  return (
    <Routes>
      <Route path="/edit" element={
          <main className="profile">
            <FormEdit textButton="Сохранить" onSubmit={handleSubmit}>
              <div className={`profile__element ${!isInvalidData ? 'profile__element_error' : ''}`}>
                <label className="profile__label">Имя</label>
                <input name="name" type="text" className={`profile__input ${ !isInvalidData && "profile__input_error" }`} value={formValue.name} placeholder="Имя" onChange={handleChange} />
              </div>

              <span className="profile__border" />

              <div className="profile__element">
                <label className="profile__label">E-mail</label>
                <input name="email" type="email" className="profile__input" value={formValue.email} placeholder="Почта" onChange={handleChange} />
              </div>

              <div className="profile__links">
                <span className="profile__error">
                    {props.errorText}
                </span>
                <button type="submit" onSubmit={handleSubmit} disabled={!isInvalidData || props.isDisableButton || isButtonDisable || isSameInputs} className={`profile__edit profile__edit_color_blue ${ (!isInvalidData || isButtonDisable) && "profile__edit_disabled" }`}>
                    Сохранить
                </button>
              </div>
            </FormEdit>
          </main>
        }>
      </Route>

      <Route path="/" element={
          <main className="profile">
            <FormEdit textButton="Редактировать">
              <div className="profile__element">
                <label className="profile__label">Имя</label>
                <input type="text" className="profile__input profile__input_focus_disable" value={props.currentUser.name} disabled placeholder="Имя" />
              </div>

              <span className="profile__border" />

              <div className="profile__element">
                <label className="profile__label">E-mail</label>
                <input type="email" className="profile__input profile__input_focus_disable" value={props.currentUser.email} disabled placeholder="Почта" />
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
        }>
      </Route>
    </Routes>
  );
}

export default Profile;
