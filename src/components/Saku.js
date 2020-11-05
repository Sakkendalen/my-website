import React, { Component } from 'react';
import { Typography, Paper, Divider } from '@material-ui/core';
import { Image } from 'react-bootstrap';

import '../styles/Saku.css';
import logo from '../styles/Images/placeholder.jpg';
import infoText from '../styles/texts/infoText.js';

export default class Saku extends Component {

    constructor(props){
        super(props);
        this.state = {
          age: 0
        };
        this.getAge = this.getAge.bind(this);
    }

    componentDidMount() {
        this.getAge();
    }

    getAge() {
      const myYear = 1993;
      const myMonth = 3;
      const myDay = 23;

      let nowYear = new Date().getFullYear();
      let nowMonth = new Date().getMonth() + 1;
      let nowDay = new Date().getDate();

      let age = nowYear - myYear;

      if (nowMonth > myMonth){
        return age
      }
      else if (nowMonth == myMonth && nowDay >= myDay) {
        return age
      }
      else {
        return age -1
      }
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
                <Typography variant='body1' style={{paddingTop: '1vh', paddingBottom: '0.5vh', color: 'white' }}>
                  Kuka?
                </Typography>
                <Typography variant='body2' style={{paddingTop: '0.5vh', paddingBottom: '0.5vh', color: 'white' }}>
                  Saku Tynjälä
                </Typography>
                <Divider variant="middle" style={{ backgroundColor: 'white' }} />
                <Typography variant='body1' style={{paddingTop: '0.5vh', paddingBottom: '0.5vh', color: 'white' }}>
                  Ikä?
                </Typography>
                <Typography variant='body2' style={{paddingTop: '0.5vh', paddingBottom: '0.5vh', color: 'white' }}>
                  {this.getAge()}
                </Typography>
                <Divider variant="middle" style={{ backgroundColor: 'white' }} />
                <Typography variant='body1' style={{paddingTop: '0.5vh', paddingBottom: '0.5vh', color: 'white' }}>
                  Missä?
                </Typography>
                <Typography variant='body2' style={{paddingTop: '0.5vh', paddingBottom: '0.5vh', color: 'white' }}>
                  Tampere
                </Typography>
                <Divider variant="middle" style={{ backgroundColor: 'white' }} />
                <Typography variant='body2' style={{paddingTop: '0.5vh', paddingBottom: '0.5vh', color: 'white' }}>
                  Mitä?
                </Typography>
                <Typography variant='body2' style={{paddingTop: '0.5vh', paddingBottom: '1vh', color: 'white' }}>
                  pelailen
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