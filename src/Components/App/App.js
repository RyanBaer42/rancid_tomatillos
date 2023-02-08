import React, { Component } from "react";
import MoldyTurnips from "../../MoldyTurnips.png";
import MovieGrid from ".././MovieGrid/MovieGrid.js";
import MovieBanner from ".././MovieBanner/MovieBanner.js";
import Highlight from "../HighlightedMovie/Highlight.js";
import { fetchAllMovies, fetchSingleMovie } from "../../ApiCalls"
import { Route, NavLink } from 'react-router-dom'

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
    fetchSingleMovie(id)
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
  }

  componentDidMount() {
    fetchAllMovies()
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
        <main className="App">
          <div>
            <img src={MoldyTurnips} alt="Website Logo" className="logo" />
          </div>
          <Route exact path="/" render={() => <MovieBanner movies={this.state.movies} handleClick={this.handleClick}/> } />
          <Route exact path="/" render={() => <MovieGrid movies={this.state.movies} handleClick={this.handleClick} /> } />
          <Route exact path='/movies/:movieId' render={({ match }) => {return ( <Highlight handleReturn={this.handleReturn} singleMovie={this.state.singleMovie}/> )}} /> 
        </main>
      );
    } else {
      <div className="App">
        <h1>Loading Movies</h1>
      </div>;
    }
  }
}

export default App;
