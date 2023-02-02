import React from "react";
import "./MovieGrid.css"
import Card from "../Card/Card.js"

const MovieGrid = ({movies}) => {

  const cards = movies.map(card => {
    return (
      <Card 
        posterPath={card.poster_path}
        title={card.title}
        averageRating={card.average_rating}
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