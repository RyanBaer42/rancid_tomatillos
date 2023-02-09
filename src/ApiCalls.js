import React from "react";

// const fetchSingleMovie = (id) => {
//   return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`)
//       .then((response) => {
//         if (response.ok) {
//           return response.json();
//         }
//         throw Promise.reject(response);
//       })
// }

// const fetchAllMovies = () => {
//   return fetch("https://rancid-tomatillos.herokuapp.com/api/v2/movies")
//   .then((response) => {
//     if (response.ok) {
//       return response.json();
//     }
//     throw Promise.reject(response);
//   })
// }

// export {fetchSingleMovie, fetchAllMovies}
const fetchData = (movieId) => {
    let path;
    
    if(!movieId) { 
      path = 'movies'
    } else {
      path = `movies/${movieId}`
    }
    console.log('PATH', path)
    return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/${path}`)
      .then(response => {
        if (response.ok) {
          return response.json()
        } else if (response.status === 404) {
          throw new Error('404')
        } else {
          console.log(response);
          throw new Error(`An error occurred: status ${response.status}`);
        }
      })
  }




export default fetchData;