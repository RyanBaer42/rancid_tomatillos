import React from "react";
import { NavLink } from "react-router-dom";
import "./MovieBanner.css"

const MovieBanner = ({movies, displayOneMovie}) => {
    const randomMovie = () => {
        return movies[Math.floor(Math.random()*movies.length)]
    }
    const random = randomMovie()
    if(movies) {
    return (
        <NavLink to={`/movies/${random.id}`}>
            <div className="movie-banner" onClick={() => displayOneMovie(random.id)}> 
                    <img className="banner-poster" alt={random.title} src={random.poster_path}/>
                    <img className="banner-image" alt={random.title} src={random.backdrop_path}/>
            </div>
        </NavLink>
    )
    }
}

export default MovieBanner
