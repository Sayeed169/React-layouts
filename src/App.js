import React, { Component } from 'react';
import Navigation from "./components/Navigation";
import IMDBMovieSearch from "./components/imdbSearch/IMDBMovieSearch";
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <IMDBMovieSearch />
      </div>
    );
  }
}

export default App;
