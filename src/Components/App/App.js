import React, { Component } from "react";
import MoldyTurnips from "../../MoldyTurnips.png";
import MovieGrid from ".././MovieGrid/MovieGrid.js";
import MovieBanner from ".././MovieBanner/MovieBanner.js";
import Highlight from "../HighlightedMovie/Highlight.js";
import fetchData from "../../ApiCalls"
import { Route, Link } from 'react-router-dom'

import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      singleMovie: '',
      isLoading: true,
      singleMovieId: null
    };
  }

  // fetchMovie(id) {
  //   fetchSingleMovie(id)
  //     .then((result) => {
  //       this.setState({ singleMovie: result.movie, isLoading: false });
  //     })
  //     .catch((response) => {
  //       this.setState({ error: "Somethin aint workin" });
  //     });
  // }

  // handleClick = id => {
  //   this.fetchMovie(id)
  // }

  displayOneMovie = id => {
    this.setState({ singleMovieId: id });
  };

  updateSelectedMovie = movie => {
    this.setState({ singleMovie: movie });
  };

  // handleReturn = () => {
  // }

  // componentDidMount() {
  //   if(this.state.singleMovie === '') {
  //     fetchAllMovies()
  //     .then((result) => {
  //       this.setState({ movies: result.movies, isLoading: false });
  //     })
  //     .catch((response) => {
  //       this.setState({ error: "Somethin aint workin" });
  //     });
  //   }
  // }

  componentDidMount() {
    fetchData()
      .then(data => {
        this.setState({
          movies: data.movies,
          isLoading: false
        });
      })
      .catch(error => {
        if (error.message === '404') {
          this.setState({
            error: '404'
          });
        } else {
          this.setState({
            error: "Sorry we're doing our best"
          });
        }
      });
  }
  
  render() {
    if (!this.state.isLoading) {
      return (
        <main className="App">
          <div>
            <img src={MoldyTurnips} alt="Website Logo" className="logo" />
          </div>
          <Route exact path="/" render={() => <MovieBanner movies={this.state.movies} displayOneMovie={this.displayOneMovie}/> } />
          <Route exact path="/" render={() => <MovieGrid movies={this.state.movies} displayOneMovie={this.displayOneMovie} /> } />
          <Route exact path='/movies/:movieId' render={({ match }) => {return ( <Highlight singleMovieId={this.state.singleMovieId} singleMovie={this.state.singleMovie}/> )}} /> 
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
