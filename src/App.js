import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="card">
          <h1>Title <small>subtitle</small></h1>
          <h2>Title <small>subtitle</small></h2>
          <h3>Title <small>subtitle</small></h3>
          <h4>Title <small>subtitle</small></h4>
          <h5>Title <small>subtitle</small></h5>
          <h6>Title <small>subtitle</small></h6>
          <p>Paragraph</p>
        </div>
      </div>
    );
  }
}

export default App;
