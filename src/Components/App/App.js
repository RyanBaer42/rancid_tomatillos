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
      error: ''
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
    if (!this.state.isLoading && !this.state.error) {
      return (
        <main className="App">
          <div>
            <img src={MoldyTurnips} alt="Website Logo" className="logo" />
          </div>
          <Route exact path="/" render={() => <MovieBanner movies={this.state.movies} />} />
          <Route exact path="/" render={() => <MovieGrid movies={this.state.movies} />} />
          <Route exact path='/movies/:movieId' render={({ match }) => {
              return (<Highlight singleMovieId={match.params.movieId} />)
            }
          }/>
        </main>
      );
    } else if (this.state.isLoading && !this.state.error) {
      return (
        <div className="App">
          <h1>Loading Movies...</h1>
        </div>
      )
    } else {
      <h1>Server is down please try again later</h1>
    }
  }
}

export default App;
