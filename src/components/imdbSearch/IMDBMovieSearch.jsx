import React, { Component } from 'react';
import SearchBar from './SearchBar';
import Movie from "./Movie";
import SearchResult from "./SearchResult";
import "bootstrap/dist/css/bootstrap.min.css";

export default class IMDBMovieSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      view: '',
      searchResult: [],
    }
    this.getSearchValue = this.getSearchValue.bind(this);
  }
  // componentDidMount() {
  //   try {
  //     fetch('http://www.omdbapi.com/?apikey=2088d444&i=tt1285016', {
  //       method: 'GET',
  //       // headers: {
  //       //   'Accept': 'application/json',
  //       //   'Content-type': 'application/json'
  //       // },
  //       // body: JSON.stringify()
  //     })
  //       .then(response => response.json())
  //       .then(response => {
  //         this.setState({ results: response });
  //       }
  //       );
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }
  getSearchValue(query) {
    try {
      fetch('http://www.omdbapi.com/?apikey=2088d444&s=' + query, {
        method: 'GET',
      })
        .then(response => response.json())
        .then(response => this.setState({ searchResult: response }))
    } catch (e) {
      console.error(e);
    }
  }
  handleResultClick(imdbId) {
    try {
      fetch('http://www.omdbapi.com/?apikey=2088d444&i=' + imdbId, { method: 'GET' })
        .then(response => response.json())
        .then(response => { this.setState({ view: response }) })
    } catch (error) {
      console.error(error);
    }
  }
  render() {
    let list = this.state.searchResult.Search;
    let movie = (this.state.view) ? <Movie className="col" value={this.state.view} /> : "";
    if (list) {
      list = list.map(
        (movie, id) =>
          <SearchResult key={id} value={movie} onClick={(id) => { this.handleResultClick(id) }} />
      );
    }

    return (
      <div className="row">
        <div className="col-4">
          <SearchBar onSubmit={this.getSearchValue} />
          <div>{list}</div>
        </div>
        {movie}
      </div>
    );
  }
}