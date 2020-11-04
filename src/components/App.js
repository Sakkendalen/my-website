import React, { Component } from 'react';

import logo from '../styles/logo.svg';
import '../styles/App.css';

class App extends Component {

  state = {
    isLoading: false,
    page: "",
  };

  componentDidMount() {
      this.setState( {page : "me"});
  }

  topMenuClick(x) {
    // if (x === "Search") {
    //     this.setState({page: <SearchComponent onClick={ (a) => this.showSinglePostClick(a)} formatTime={(e) => this.formatTime(e)} /> });
    // }
    // if (x === "Publish") {
    //     this.setState({page: <ComposeComponent setMainPage={() => this.setMainPage()}/> });
    // }
  }

  render() {
    const {isLoading} = this.state;

    if (isLoading) {
      return <p>Loading...</p>;
    }

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
