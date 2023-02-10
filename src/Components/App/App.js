import React, { Component } from "react";
import MoldyTurnips from "../../MoldyTurnips.png";
import MovieGrid from ".././MovieGrid/MovieGrid.js";
import MovieBanner from ".././MovieBanner/MovieBanner.js";
import Highlight from "../HighlightedMovie/Highlight.js";
import fetchData from "../../ApiCalls"
import { Route } from 'react-router-dom'

import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      isLoading: true,
    };
  }

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
          <Route exact path='/movies/:movieId' render={({ match }) => {
            const doesMovieExist = this.state.movies.find(movie => {
              return movie.id === parseInt(match.params.movieId)
            })
            if (!!doesMovieExist){
              return ( <Highlight singleMovieId={match.params.movieId} /> )}}}/>   
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
