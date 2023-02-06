import React from "react";
import "./Card.css"

const Card = ({posterPath, title, averageRating, handleClick, id}) => {
  return (
    <div className="card" onClick={() => handleClick(id)}>
      <img src={posterPath} alt={title} className="cardImage" />
      <div className="card-info">
        <p>Rating: {averageRating}</p>
        <p>{title}</p> 
      </div>  
    </div>
  )
}


export default Card