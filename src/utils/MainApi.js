class MainApi {
    constructor(baseUrl) {
        this._url = baseUrl;
    }

    _handleResponse(res) {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(res);
    }

    getToken() {
        return localStorage.getItem('token');
    }

    putHeaders() {
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${this.getToken()}`,
        }
        return headers;
    }

    signup({name, email, password}) {
        return fetch(`${this._url}/signup`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "name": name,
                "email": email,
                "password": password
            })
        })
        .then (this._handleResponse);
    }

    signin({email, password}) {
        return fetch(`${this._url}/signin`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "email": email,
                "password": password
            })
        })
        .then (this._handleResponse);
    }

    getInfo() {
        return fetch(`${this._url}/users/me`, {
            method: 'GET',
            headers: this.putHeaders(),
        })
        .then (this._handleResponse);
    }

    patchInfo({ name, email }) {
        return fetch(`${this._url}/users/me`, {
            method: 'PATCH',
            headers: this.putHeaders(),
            body: JSON.stringify({
                "name": name,
                "email": email
            })
        })
        .then (this._handleResponse);
    }

    getMovies() {
        return fetch(`${this._url}/movies`, {
            method: 'GET',
            headers: this.putHeaders(),
        })
        .then (this._handleResponse);
    }

    postMovies(data) {
        return fetch(`${this._url}/movies`, {
            method: 'POST',
            headers: this.putHeaders(),
            body: JSON.stringify({
                "country": data.country,
                "director": data.director,
                "duration": data.duration,
                "year": data.year,
                "description": data.description,
                "image": data.image,
                "trailerLink": data.trailerLink,
                "thumbnail": data.thumbnail,
                "movieId": data.movieId,
                "nameRU": data.nameRU,
                "nameEN": data.nameEN
            })
        })
        .then (this._handleResponse);
    }

    deleteMovies(movieId) {
        return fetch(`${this._url}/movies/${movieId}`, {
            method: 'DELETE',
            headers: this.putHeaders()
        })
        .then (this._handleResponse);
    }

}

const mainApi = new MainApi('https://api.yuji.nomoredomains.work');

export default mainApi;