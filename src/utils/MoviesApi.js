class MoviesApi {
    constructor(baseUrl) {
        this._url = baseUrl;
    }

    _handleResponse(res) {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(new Error('Произошла ошибка'));
    }

    getMovies() {
        return fetch(this._url, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then (this._handleResponse);
    }
}

const moviesApi = new MoviesApi('https://api.nomoreparties.co/beatfilm-movies');

export default moviesApi;