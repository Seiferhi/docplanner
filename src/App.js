import React, { Component } from 'react';
  

import PostsConnect from './components/Posts'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <PostsConnect/>  
      </div>
    );
  }
}

export default App;
