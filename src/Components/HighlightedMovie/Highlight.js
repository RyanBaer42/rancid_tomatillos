import React from "react";
import { NavLink } from "react-router-dom";
import { Component } from "react";
import PropTypes from 'prop-types'
import fetchData from "../../ApiCalls";
import "./Highlight.css"

class Highlight extends Component { 
  constructor () {
    super()
    this.state = {
      singleMovie:{},
      error: ''
    }
  }

  componentDidMount() {
    const { singleMovieId } = this.props;
    fetchData(singleMovieId)
      .then(data => {
        this.setState({singleMovie:data.movie})
      })
      .catch(error => {
        if (
          error.message === '404'
        ) {
          this.setState({
            error: '404'
          });
        } else {
          this.setState({
            error: 'Sorry our team is working on resolving this issue'
          });
        }
      });
  }

  render() { 
    if (this.state.error === ''){
      let movie = this.state.singleMovie
      return (
        <div className="highlighted-movie">
            <img className="highlight-image" alt={movie.title}src={movie.poster_path}/>
            <div className="info-section">
              <h1>{movie.title}</h1>
              <h1>Average Rating: {movie.average_rating}</h1>
              <p className="highlight-overview">{movie.overview}</p>
              <NavLink to={'/'}>
                <button>Return to Movies</button>
              </NavLink>
            </div>
        </div>
      )
    } else {
      return (
        <div className="error-section">
          <h1 className="error-message">{this.state.error} Destination not found</h1>
          <NavLink to={'/'}>
            <button>Return to Movies</button>
          </NavLink>
        </div>
      )
    }
  }
}


export default Highlight

Highlight.propTypes = {
  singleMovieId: PropTypes.number.isRequired
}


