import React from "react";
import "./Highlight.css"

// //position absolute 00

const Highlight = ({singleMovie, handleReturn}) => {
    return (
        <div className="highlighted-movie">
            <div>
                <h1>{singleMovie.title}</h1>
                <h1>Average Rating: {singleMovie.average_rating}</h1>
            </div>
            <img className="highlight-image" alt={singleMovie.title}src={singleMovie.poster_path}/>
            <p className="highlight-overview">{singleMovie.overview}</p>
            <button onClick={() => handleReturn()}>Return to Movies</button>
        </div>
    )
}


export default Highlight


