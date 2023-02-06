
const fetchAllMovies = () => {
    return fetch("https://rancid-tomatillos.herokuapp.com/api/v2/movies")
        .then((response) => {
            if (response.ok) {
                return response.json();
            }
            throw Promise.reject(response);
        })
}

const fetchSingleMovie = (id) => {
    return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw Promise.reject(response);
      })
}

export {fetchAllMovies, fetchSingleMovie}