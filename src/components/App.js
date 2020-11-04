import React, { Component } from 'react';
import { Nav } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/App.css';

class App extends Component {

  state = {
    isLoading: false,
    page: "Me",
  };

  componentDidMount() {
  }

  topMenuClick(x) {
    // if (x === "Search") {
    //     this.setState({page: <SearchComponent onClick={ (a) => this.showSinglePostClick(a)} formatTime={(e) => this.formatTime(e)} /> });
    // }
    // if (x === "Publish") {
    //     this.setState({page: <ComposeComponent setMainPage={() => this.setMainPage()}/> });
    this.setState({page: x})
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

export default App;
