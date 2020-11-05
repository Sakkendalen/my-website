import React, { Component } from 'react';
import { Typography, Paper } from '@material-ui/core';
import { Image } from 'react-bootstrap';

import '../styles/Saku.css';
import logo from '../styles/Images/placeholder.jpg';
import infoText from '../styles/texts/infoText.js';

export default class Saku extends Component {

    constructor(props){
        super(props);
        this.state = {
        };
    }

    componentDidMount() {
        
    }

    render() {
      const aboutText = infoText;

        return (
          <div className='content'>
            <div className='shortInfo'>
              <Paper variant="outlined" style={{backgroundColor: '#282c34'}}>
                <div className='imgCont'>
                  <Image alt='kuva' src={logo} rounded style={{maxHeight:'50vh', maxWidth:'50vh', padding: '2vh' }} />
                </div>
                <Typography variant='body2' style={{paddingTop: '2vh', paddingBottom: '2vh', color: 'white' }}>
                  täsä mä olen
                </Typography>
              </Paper>
            </div>
            <div className='textCont'>
              <Paper variant="outlined" style={{backgroundColor: '#282c34'}}>
                <Typography variant='body2'style={{padding: '5vh', color: 'white' }}>
                  {aboutText}
                </Typography>
              </Paper>
            </div>
          </div>
        );
    }
}