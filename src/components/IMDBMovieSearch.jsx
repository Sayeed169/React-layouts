import React, { Component } from 'react';
import Navigation from './Navigation';
import Movie from "./Movie";
import SearchResult from "./SearchResult";
import "bootstrap/dist/css/bootstrap.min.css";

export default class IMDBMovieSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: '',
      searchResult: [],
    }

    this.getSearchValue = this.getSearchValue.bind(this);
  }

  componentDidMount() {
    try {
      fetch('http://www.omdbapi.com/?apikey=2088d444&i=tt1285016', {
        method: 'GET',
        // headers: {
        //   'Accept': 'application/json',
        //   'Content-type': 'application/json'
        // },
        // body: JSON.stringify()
      })
      .then(response => response.json())
      .then(response => {
        this.setState({ results: response });
      }
      );
    } catch (error) {
      console.error(error);
    }
  }

  getSearchValue(query) {
    try {
      fetch('http://www.omdbapi.com/?apikey=2088d444&s='+query, {
        method: 'GET',
      })
      .then(response => response.json())
      .then(response => this.setState( {searchResult: response} ))
    } catch (e) {
      console.error(e);
    }
  }

  render() {
    let list = this.state.searchResult.Search; 
    console.log(list);  
    if(list){
      list = list.map((movie, id) => <SearchResult key={id} value={movie}/>);
    }

    return (
      <div>
        <Navigation onSubmit={this.getSearchValue} />
        {/* <Movie value={this.state.results} /> */}
        <div className="row">{list}</div>
      </div>
    );
  }
}
