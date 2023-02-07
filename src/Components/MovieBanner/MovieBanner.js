import React from "react";
import "./MovieBanner.css"

const MovieBanner = ({movies}) => {
    const randomMovie = () => {
        return movies[Math.floor(Math.random()*movies.length)]
    }
    const random = randomMovie()
    if(movies) {
    return (
        <div className="movie-banner"> 
                <img className="banner-poster" alt={random.title} src={random.poster_path}/>
                <img className="banner-image" alt={random.title} src={random.backdrop_path}/>
        </div>
    )
    }
}

export default MovieBanner
