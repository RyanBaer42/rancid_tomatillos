import React from "react";
import "./MovieGrid.css"
import PropTypes from 'prop-types'
import Card from "../Card/Card.js"

const MovieGrid = ({movies}) => {

  const cards = movies.map(card => {
    return (
      <Card 
        key={card.id}
        id={card.id}
        posterPath={card.poster_path}
        title={card.title}
        averageRating={Number(card.average_rating.toFixed(1))}
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

MovieGrid.propTypes = {
  movies: PropTypes.array.isRequired
}