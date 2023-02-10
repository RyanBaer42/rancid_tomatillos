import React from "react";
import { NavLink } from "react-router-dom";
import "./Highlight.css"
import { Component } from "react";
import fetchData from "../../ApiCalls";

class Highlight extends Component { 
  constructor () {
    super()
    this.state = {
      singleMovie:{}
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
    return (
      <div className="highlighted-movie">
          <div>
              <h1>{this.state.singleMovie.title}</h1>
              <h1>Average Rating: {this.state.singleMovie.average_rating}</h1>
          </div>
          <img className="highlight-image" alt={this.state.singleMovie.title}src={this.state.singleMovie.poster_path}/>
          <p className="highlight-overview">{this.state.singleMovie.overview}</p>
          <NavLink to={'/'}>
            <button>Return to Movies</button>
          </NavLink>
      </div>
  )}
}


export default Highlight


