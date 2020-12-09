import React, { Component } from 'react';

import {AppBar, Toolbar, Button} from '@material-ui/core';


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
        <AppBar className='Header' style={{ backgroundColor: '#282c34', position:'absolute'}}>
          <Toolbar>
          <Button variant='contained' color='primary' eventKey='Saku' onClick={ () => this.topMenuClick('Saku')} style={{marginInline: '1vh', backgroundColor: '#007bff'}}>
            Saku
          </Button>
          <Button variant='contained' color='primary' eventKey='Saku' onClick={ () => this.topMenuClick('Info')} style={{marginInline: '1vh', backgroundColor: '#007bff'}}>
            Github
          </Button>
          </Toolbar>
        </AppBar>
        </div>
        <div className='App'>
            {this.state.page}
        </div>
      </div>
    );
  }
}