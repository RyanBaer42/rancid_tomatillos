
import React from "react";
import { Link } from "react-router-dom";
import "./Card.css"

const Card = ({posterPath, title, averageRating, displayOneMovie, id}) => {
  return (
    <Link to={`/movies/${id}`} style={{ textDecoration: 'none' }}>
      <div id={id} className="card" onClick={() => displayOneMovie(id)}>
        <img src={posterPath} alt={title} className="cardImage" />
        <div className="card-info">
          <p>⭐ {averageRating}</p>
          <p>{title}</p>
        </div>
      </div>
    </Link>
  )
}
export default Card