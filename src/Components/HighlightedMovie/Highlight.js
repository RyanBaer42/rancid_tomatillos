import React from "react";
import { NavLink } from "react-router-dom";
import "./Highlight.css"
import { Component } from "react";
import fetchData from "../../ApiCalls";

class Highlight extends Component { 
  constructor () {
    super()
    this.state = {}
  }

  componentDidMount() {
    const { singleMovieId } = this.props;
    fetchData(singleMovieId)
      .then(data => {
        this.props.updateSelectedMovie(data.movie);
        console.log('DATA.MOVIE', data.movie)
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
    const { singleMovie } = this.props.singleMovie; 
    return (
      <div className="highlighted-movie">
          <div>
              <h1>{singleMovie.title}</h1>
              <h1>Average Rating: {singleMovie.average_rating}</h1>
          </div>
          <img className="highlight-image" alt={singleMovie.title}src={singleMovie.poster_path}/>
          <p className="highlight-overview">{singleMovie.overview}</p>
          <NavLink to={'/'}>
            <button>Return to Movies</button>
          </NavLink>
      </div>
  )}
}


export default Highlight


