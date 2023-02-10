
import React from "react";
import { Link } from "react-router-dom";
import "./Card.css"

const Card = ({posterPath, title, averageRating, id}) => {
  return (
    <Link to={`/movies/${id}`} style={{ textDecoration: 'none' }}>
      <div id={id} className="card" >
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