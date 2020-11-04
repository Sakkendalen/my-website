import React, { Component } from 'react';
import { Nav } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/App.css';

import Me from "./Me.js";
import Portfolio from "./Portfolio.js";

export default class App extends Component {

  state = {
    isLoading: false,
    page: "Me",
  };

  componentDidMount() {

  }

  topMenuClick(x) {
    if (x === "Me") {
        this.setState({page: <Me/> });
    }
    if (x === "Info") {
        this.setState({page: <Portfolio/> });
    }
  }

  render() {
    const {isLoading} = this.state;

    if (isLoading) {
      return <p>Loading...</p>;
    }

    return (
      <div>
        <div className="Header">
        <Nav variant="pills" defaultActiveKey="Me">
          <Nav.Item>
            <Nav.Link eventKey="Me" onClick={ () => this.topMenuClick("Me")}> Me </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="Github" onClick={ () => this.topMenuClick("Info")}> Github </Nav.Link>
          </Nav.Item>
        </Nav>
        </div>
        <div className="App">
            {this.state.page}
        </div>
      </div>
    );
  }
}