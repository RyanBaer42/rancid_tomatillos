import React from "react";
import "./MovieGrid.css"
import Card from "../Card/Card.js"

const MovieGrid = ({movies, handleClick}) => {

  const cards = movies.map(card => {
    return (
      <Card 
        key={card.id}
        id={card.id}
        posterPath={card.poster_path}
        title={card.title}
        averageRating={card.average_rating.toFixed(1)}
        handleClick={handleClick}
     />   
    )
    }
  )

  return (
    <div className="movieGrid">
      {cards}
    </div>
  )

}

export default MovieGrid