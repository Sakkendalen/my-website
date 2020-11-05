import React, { Component } from 'react';
import { Typography } from '@material-ui/core';
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
                  <div className='imgCont'>
                    <Image alt='kuva' src={logo} rounded style={{maxHeight:'50vh', maxWidth:'50vh' }} />
                  </div>
                  <Typography variant='body2'>
                    täsä mä olen
                  </Typography>
            </div>
            <div className='textCont'>
                  <Typography variant='body2'>
                  {aboutText}
                  </Typography>
            </div>
          </div>
        );
    }
}