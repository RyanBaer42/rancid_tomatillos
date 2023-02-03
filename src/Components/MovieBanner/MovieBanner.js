import React from "react";
import Card from "../Card/Card";
import "./MovieBanner.css"

const MovieBanner = ({movies}) => {
    console.log('movies', movies)
    const randomMovie = () => {
        return movies[Math.floor(Math.random()*movies.length)]
    }
    const random = randomMovie()
    if(movies) {
    return (
        <div className="movie-banner"> 
            <div className="title-and-rank">
                <p>{random.title}</p>
                <p>Average Rating {random.average_rating.toFixed(1)}</p>   
            </div>
                <img className="banner-image" src={random.backdrop_path}/>
        </div>
    )
    }
}

export default MovieBanner
