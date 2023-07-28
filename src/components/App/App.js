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
import moviesApi from '../../utils/MoviesApi';
import mainApi from '../../utils/MainApi';

function App() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState({
    name: '',
    email: '',
    _id: ''
  });
  const [movies, setMovies] = React.useState([]);
  const [errorText, setErrorText] = React.useState('');

  const navigate = useNavigate();
  const location = useLocation();

  function handleSubmitRegisterForm({ name, email, password }) {
    mainApi.signup({ name, email, password })
    .then((res) => {
      navigate('/movies', {replace: true});
      localStorage.setItem('token', res.data);
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

  function handleSubmitLoginForm({ email, password }) {
    mainApi.signin({ email, password })
    .then((res) => {
      if (res) {
        localStorage.setItem('token', res.token);
        setIsLoggedIn(true);
        navigate('/movies', { replace: true });
      }
    })
    .catch(err => {
      if (err.status === 401) {
        setErrorText('Вы ввели неправильный логин или пароль.');
      }
    })
  }

  function handleCheckToken() {
    const token = localStorage.getItem('token');
    if (token) {
      mainApi.checkToken(token)
      .then((res) => {
        console.log(res);
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

  function signOut() {
    setCurrentUser({});
    setIsLoggedIn(false);
    localStorage.removeItem('token');
  }


  React.useEffect(() => {
    if (isLoggedIn) {
      moviesApi.getMovies()
      .then((res) => {
        setMovies(res);
      })
      .catch((err) => {
        console.log(err);
      })
    }
  }, [isLoggedIn]);

  return(
    <CurrentUserContext.Provider value={currentUser}>
        <Header authorized={isLoggedIn} />
        
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/signup' element={<Register onSubmit={handleSubmitRegisterForm} errorText={errorText} />} />
          <Route path='/signin' element={<Login onSubmit={handleSubmitLoginForm} />} />
          <Route path='/profile' element={<ProtectedRouteElement element={Profile} loggedIn={isLoggedIn} signout={signOut} />} />
          <Route path='/movies' element={<ProtectedRouteElement element={Movies} loggedIn={isLoggedIn} movies={movies} />} />
          <Route path='/saved-movies' element={<ProtectedRouteElement element={SavedMovies} loggedIn={isLoggedIn} />} />
          <Route path='/404' element={<NotFound />} />
        </Routes>
        <Footer />
    </CurrentUserContext.Provider>
  );
}

export default App;
