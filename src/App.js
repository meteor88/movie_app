import React, { Component } from 'react';
import './App.css';
import Movie from "./Movie";

const apikey = 'cbe579c7';
const search_keyword = 'fast';

class App extends Component {
  state = {}

  componentDidMount() {
    this._getMovies();
  }

  _getMovies = async () => {
    const movies = await this._callApi();
    console.log(movies.Search);
    this.setState({
      movies: movies.Search
    })

  }

  _callApi = () => {
    return fetch(`http://www.omdbapi.com/?s=${search_keyword}&apikey=${apikey}`)
      .then(response => response.json())
      .then(json => json)
      .catch(err => console.log(err));

  }

  _renderMovies = () => {
    const movies = this.state.movies.map(movie => {
      return <Movie
        title={movie.Title}
        poster={movie.Poster}
        key={movie.imdbID}
        category={movie.Type}
        year={movie.Year}
      />
    });

    return movies;
  }

  render() {
    return (
      <div className="App">
        {this.state.movies ? this._renderMovies() : 'Loading ....'}
      </div>
    );
  }
}

export default App;
