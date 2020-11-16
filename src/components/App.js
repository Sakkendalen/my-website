import React, { Component } from 'react';
import { Nav } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/App.css';

import Saku from './Saku.js';
import Info from './Info.js';

export default class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      isLoading: false,
      page: <Saku/>,
    };
  }

  componentDidMount() {

  }

  topMenuClick(x) {
    if (x === 'Saku') {
        this.setState({page: <Saku/> });
    }
    if (x === 'Info') {
        this.setState({page: <Info/> });
    }
  }

  render() {
    const {isLoading} = this.state;

    if (isLoading) {
      return <p>Loading...</p>;
    }

    return (
      <div>
        <div className='Header'>
        <Nav variant='pills' defaultActiveKey='Saku'>
          <Nav.Item>
            <Nav.Link eventKey='Saku' onClick={ () => this.topMenuClick('Saku')}> Saku </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey='Github' onClick={ () => this.topMenuClick('Info')}> Github </Nav.Link>
          </Nav.Item>
        </Nav>
        </div>
        <div className='App'>
            {this.state.page}
        </div>
      </div>
    );
  }
}