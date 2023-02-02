import React from "react";
import "./Card.css"

const Card = ({posterPath, title, averageRating}) => {
  return (
    <div className="card">
      <img src={posterPath} className="cardImage" />
      <p>Rating: {averageRating}</p>
      <p>{title}</p> 
    </div>
  )
}

export default Card