import React, { Component } from "react";
import MoldyTurnips from "../../MoldyTurnips.png";
import MovieGrid from ".././MovieGrid/MovieGrid.js";
import MovieBanner from ".././MovieBanner/MovieBanner.js";
import Highlight from "../HighlightedMovie/Highlight.js";

import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      singleMovie: '',
      isLoading: true,
    };
  }


  fetchMovie(id) {
    fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw Promise.reject(response);
      })
      .then((result) => {
        this.setState({ singleMovie: result.movie, isLoading: false });
      })
      .catch((response) => {
        this.setState({ error: "Somethin aint workin" });
      });
  }

  handleClick = id => {
    this.fetchMovie(id)
  }

  handleReturn = () => {
    this.setState({singleMovie: ''})
  }


  componentDidMount() {
    fetch("https://rancid-tomatillos.herokuapp.com/api/v2/movies")
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw Promise.reject(response);
      })
      .then((result) => {
        this.setState({ movies: result.movies, isLoading: false });
      })
      .catch((response) => {
        this.setState({ error: "Somethin aint workin" });
      });
  }

  
  render() {
    console.log(this.state.singleMovie)
    if (!this.state.isLoading) {
      return (
        <div className="App">
          <div>
            <img src={MoldyTurnips} alt="Website Logo" className="logo" />
          </div>
          {this.state.movies && !this.state.singleMovie &&
          <MovieBanner movies={this.state.movies} /> 
          } 
          {this.state.movies && !this.state.singleMovie &&
          <MovieGrid movies={this.state.movies} handleClick={this.handleClick} />
          }
          {this.state.singleMovie && <Highlight handleReturn={this.handleReturn} singleMovie={this.state.singleMovie} />}
        </div>
      );
    } else {
      <div className="App">
        <h1>Loading Movies</h1>
      </div>;
    }
  }
}

export default App;
