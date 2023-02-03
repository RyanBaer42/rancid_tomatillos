import React, { Component } from "react";
import MoldyTurnips from "../../MoldyTurnips.png";
import MovieGrid from ".././MovieGrid/MovieGrid.js";
import MovieBanner from ".././MovieBanner/MovieBanner.js";
import movieData from "./MockData.js";

import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      singleMovie: {},
      isLoading: true,
    };
  }

  // handleClick = event => {
  //   this.setState({ })
  // }

  // componentDidMount = () => {
  //   this.setState({
  //     movies: movieData.movies,
  //   })
  // }

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
    if (!this.state.isLoading) {
      return (
        <div className="App">
          <div>
            <img src={MoldyTurnips} alt="Website Logo" className="logo" />
          </div>
          <MovieBanner movies={this.state.movies} />
          <MovieGrid movies={this.state.movies} />
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
