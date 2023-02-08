
import React from "react";
import { NavLink } from "react-router-dom";
import "./Card.css"
const Card = ({posterPath, title, averageRating, handleClick, id}) => {
  return (
    <NavLink to={`/movies/${id}`}>
      <div className="card" onClick={() => handleClick(id)}>
        <img src={posterPath} alt={title} className="cardImage" />
        <div className="card-info">
          <p>⭐ {averageRating}</p>
          <p>{title}</p>
        </div>
      </div>
    </NavLink>
  )
}
export default Card