import React from "react";
import FormEdit from "../FormEdit/FormEdit";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { validateName, validateEmail } from "../../utils/ValidateInput";

function ProfileEdit(props) {
    const currentUser = React.useContext(CurrentUserContext);
    const [isInvalidData, setIsInvalidData] = React.useState(true);
    const [formValue, setFormValue] = React.useState({
        name: currentUser.name,
        email: currentUser.email,
    });
    const [isButtonDisable, setIsButtonDisable] = React.useState(true);
    const [isSameInputs, setIsSameInputs] = React.useState(false);

    function handleSubmit(e) {
        e.preventDefault();
        props.onSubmit({
            name: formValue.name,
            email: formValue.email
        })
        .then((res) =>setIsButtonDisable(res));
    }

    function handleChange(e) {
        setIsButtonDisable(false);
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
    }, [formValue]);

    React.useEffect(() => {
        if (formValue.name === currentUser.name && formValue.email === currentUser.email) {
        setIsSameInputs(true);
        } else {
        setIsSameInputs(false);
        }
    }, []);
    return(
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
                <button type="submit" onSubmit={handleSubmit} disabled={!isInvalidData || isButtonDisable || isSameInputs} className={`profile__edit profile__edit_color_blue ${ (!isInvalidData || isButtonDisable || isSameInputs) && "profile__edit_disabled" }`}>
                    Сохранить
                </button>
              </div>
            </FormEdit>
          </main>
    );
}

export default ProfileEdit;