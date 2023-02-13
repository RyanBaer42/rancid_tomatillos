
import React from "react";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types'
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

Card.propTypes = {
  title: PropTypes.string.isRequired,
  posterPath: PropTypes.string.isRequired,
  averageRating: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
};