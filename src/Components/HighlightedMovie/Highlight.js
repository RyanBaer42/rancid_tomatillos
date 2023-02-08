import React from "react";
import { NavLink } from "react-router-dom";
import "./Highlight.css"

// //position absolute 00

const Highlight = ({singleMovie, handleReturn, movieId}) => {
    return (
        <div className="highlighted-movie">
            <div>
                <h1>{singleMovie.title}</h1>
                <h1>Average Rating: {singleMovie.average_rating}</h1>
            </div>
            <img className="highlight-image" alt={singleMovie.title}src={singleMovie.poster_path}/>
            <p className="highlight-overview">{singleMovie.overview}</p>
            <NavLink to={'/'}>
              <button onClick={() => handleReturn()}>Return to Movies</button>
            </NavLink>
        </div>
    )
}


export default Highlight


