import './App.css';
import React from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Profile from '../Profile/Profile';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import NotFound from '../NotFound/NotFound';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import ProtectedRouteElement from '../ProtectedRoute/ProtectedRoute';
import AuthRouteElement from '../AuthRoute/AuthRoute';
import moviesApi from '../../utils/MoviesApi';
import mainApi from '../../utils/MainApi';
import SuccessPopup from '../SuccessPopup/SuccessPopup';

function App() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState({
    name: '',
    email: '',
    _id: ''
  });
  const [movies, setMovies] = React.useState([]);
  const [errorText, setErrorText] = React.useState('');
  const [savedFilmsList, setSavedFilmsList] =React.useState([]);
  const [isEmptySavedFilms, setIsEmptySavedFilms] = React.useState(false);
  const [isDisableButton, setIsDIsableButton] = React.useState(false);
  const [isOpenPopup, setIsOpenPopup] = React.useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  // регистрация
  function handleSubmitRegisterForm({ name, email, password }) {
    mainApi.signup({ name, email, password })
    .then((res) => {
      handleSubmitLoginForm({ email, password });
      setIsLoggedIn(true);
    })
    .catch((err) => {
      if (err.status === 400) {
        setErrorText('Пользователь с таким email уже существует.');
      } else {
        setErrorText('При регистрации пользователя произошла ошибка.');
      }
    })
  }

  // авторизация
  function handleSubmitLoginForm({ email, password }) {
    mainApi.signin({ email, password })
    .then((res) => {
      if (res) {
        localStorage.setItem('token', res.token);
        handleCheckToken();
        setIsLoggedIn(true);
        navigate('/movies', { replace: true });
      }
    })
    .catch((err) => {
      if (err.status === 401) {
        setErrorText('Вы ввели неправильный логин или пароль.');
      } else {
        setErrorText('Что-то пошло не так...')
      }
    })
  }

  // проверка токена и получение информации о пользователе
  function handleCheckToken() {
    const token = localStorage.getItem('token');
    if (token) {
      mainApi.getInfo()
      .then((res) => {
        if (res) {
          setIsLoggedIn(true);
          setCurrentUser({
            name: res.name,
            email: res.email,
            _id: res._id
          });
        }
      })
      .catch((err) => {
        setIsLoggedIn(false);
      })
    }
    if (isLoggedIn && (location.pathname === '/signin' || location.pathname === '/signup')) {
      navigate('/movies', {replace: true});
    }
  }

  React.useEffect(() => {
    handleCheckToken();
  }, []);

  // выход из аккаунта
  function signOut() {
    setCurrentUser({});
    setIsLoggedIn(false);
    localStorage.removeItem('token');
    localStorage.removeItem('filmName');
    localStorage.removeItem('filmDuration');
    localStorage.removeItem('film');
  }

  // обновить профиль
  function patchProfile({ name, email }) {
    setIsDIsableButton(true);
    mainApi.patchInfo({ name, email })
    .then(async (res) => {
      await setCurrentUser({
        name: res.name,
        email: res.email
      });
      navigate('/profile', { replace: true });
      setIsOpenPopup(true);
    })
    .catch(err => {
      if (err.status === 500) {
        setErrorText('При обновлении профиля произошла ошибка.');
      } else {
        setErrorText('Пользователь с таким email уже существует.');
      }
      console.log(err);
    });
    setIsDIsableButton(false);
  }

  // получение фильмов
  React.useEffect(() => {
    if (isLoggedIn) {
      moviesApi.getMovies()
      .then((res) => {
        setMovies(res);
      })
      .catch((err) => {
        console.log(err);
      });

      mainApi.getMovies()
      .then((res) => {
        setSavedFilmsList(res.reverse());
      })
      .catch(() => setIsEmptySavedFilms(true));
    }
  }, [isLoggedIn]);

  // сохранить в избранные
  function createMovie({ 
    country, director, duration, year, description, image, trailerLink, thumbnail,
    movieId, nameRU, nameEN
   }) {
    mainApi.postMovies({
      country, director, duration,year, description, image, trailerLink, thumbnail,
      movieId, nameRU, nameEN
    })
    .then(async(res) => {
      await setSavedFilmsList([
        {
          country: res.country,
          director: res.director,
          duration: res.duration,
          year: res.year,
          description: res.description,
          image: res.image,
          trailerLink: res.trailerLink,
          thumbnail: res.thumbnail,
          movieId: res.movieId,
          _id: res._id,
          nameRU: res.nameRU,
          nameEN: res.nameEN
        },
        ...savedFilmsList
      ]);
    })
    .catch(err => console.log(err));
    return true;
   }

  //  удалить из избранных
    function handleDeleteLike(movieId) {
      mainApi.deleteMovies(movieId)
      .then(() => {
        setSavedFilmsList(savedFilmsList.filter(item => item._id !== movieId));
      })
      .catch((err) => console.log(err));
      return false;
   }

   function handleOpenTooltip() {
    setIsOpenPopup(true);
}

// закрытие попапов
function closeAllPopups() {
    setIsOpenPopup(false);
}

function closePopupButton(evt) {
    if (evt.target.classList.contains('popup') || (evt.target.classList.contains('popup__close-icon')) || (evt.key === 'Escape')) {
        closeAllPopups();
    }
}

React.useEffect(() => {
    function closeByEscape(evt) {
        if (evt.key === 'Escape') {
            closeAllPopups();
        }
    }
    if (isOpenPopup) {
        document.addEventListener('keydown', closeByEscape);
        return () => {
            document.removeEventListener('keydown', closeByEscape);
        }
    }
}, [isOpenPopup]);

  return(
    <CurrentUserContext.Provider value={currentUser}>
        <Header authorized={isLoggedIn} />
        <SuccessPopup isOpen={isOpenPopup} onClose={closePopupButton} />
        <Routes>
          <Route path='/*' element={<NotFound />} />
          <Route path='/' element={<Main />} />
          <Route path='/profile/*' element={<ProtectedRouteElement element={Profile} loggedIn={isLoggedIn} signout={signOut} onSubmit={patchProfile} errorText={errorText} currentUser={currentUser} isDisableButton={isDisableButton} />} />
          <Route path='/movies' element={<ProtectedRouteElement element={Movies} loggedIn={isLoggedIn} movies={movies}  savedMovies={savedFilmsList} />} />
          <Route path='/saved-movies' element={<ProtectedRouteElement element={SavedMovies} loggedIn={isLoggedIn} savedMovies={savedFilmsList} handleDelete={handleDeleteLike} isEmpty={isEmptySavedFilms} />} />
          <Route path='/signup' element={ <AuthRouteElement element={Register} loggedIn={isLoggedIn} onSubmit={handleSubmitRegisterForm} errorText={errorText} /> } />
          {/* <Route path='/signup' element={<Register onSubmit={handleSubmitRegisterForm} errorText={errorText} />} /> */}
          <Route path='/signin' element={ <AuthRouteElement element={Login} loggedIn={isLoggedIn} onSubmit={handleSubmitLoginForm} errorText={errorText} /> } />
          {/* <Route path='/signin' element={<Login onSubmit={handleSubmitLoginForm} errorText={errorText} />} /> */}
        </Routes>
        <Footer />
    </CurrentUserContext.Provider>
  );
}

export default App;
