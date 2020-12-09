import React, { Component } from 'react';
import { Typography, Paper, Divider, Link } from '@material-ui/core';
import { Image } from 'react-bootstrap';
import { green } from '@material-ui/core/colors';

import PersonRoundedIcon from '@material-ui/icons/PersonRounded';
import WorkRoundedIcon from '@material-ui/icons/WorkRounded';
import SportsEsportsRoundedIcon from '@material-ui/icons/SportsEsportsRounded';

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
                <Typography variant='h5' style={{paddingTop: '0.5vh', paddingBottom: '0.5vh', color: 'white' }}>
                  Saku Tynjälä
                </Typography>
                <Typography variant='body1' style={{paddingTop: '0.5vh', paddingBottom: '1vh', color: 'white' }}>
                  Student
                </Typography>
                <Divider variant="middle" style={{ backgroundColor: 'white' }} />
                <Typography variant='h5' style={{paddingTop: '1vh', paddingBottom: '0.5vh', color: 'white' }}>
                  Info
                </Typography>
                <Typography variant='body1' style={{paddingTop: '0.5vh', paddingBottom: '0.5vh', color: 'white' }}>
                  Sakutynjala@gmail.com
                </Typography>
                <Typography variant='body1' style={{paddingTop: '0.5vh', paddingBottom: '0.5vh'}}>
                  <Link href="https://github.com/sakkendalen" variant='body1' underline='always' style={{color: 'white' }}>
                    Github
                  </Link>
                </Typography>
                <Typography variant='body1' style={{paddingTop: '0.5vh', paddingBottom: '0.5vh' }}>
                  <Link href="https://pikadev.fi/public/5e1eff28c04e4c0d0afa792d" variant='body1' underline='always' style={{ color: 'white' }}>
                    Pikadev
                  </Link>
                </Typography>
                <Typography variant='body1' style={{paddingTop: '0.5vh', paddingBottom: '1vh' }}>
                  <Link href="https://www.linkedin.com/in/saku-tynj%C3%A4l%C3%A4-4a8bb7158/" variant='body1' underline='always' style={{color: 'white' }}>
                    Linkedin
                  </Link>
                </Typography>
                <Divider variant="middle" style={{ backgroundColor: 'white' }} />
                <Typography variant='h5' style={{paddingTop: '1vh', paddingBottom: '0.5vh', color: 'white' }}>
                  Languages
                </Typography>
                <Typography variant='body1' style={{paddingTop: '0.5vh', paddingBottom: '0.5vh', color: 'white' }}>
                  Finnish (Native)
                </Typography>
                <Typography variant='body1' style={{paddingTop: '0.5vh', paddingBottom: '0.5vh', color: 'white' }}>
                  English (Fluent)
                </Typography>
                <Typography variant='body1' style={{paddingTop: '0.5vh', paddingBottom: '1vh', color: 'white' }}>
                  Swedish (Basics)
                </Typography>
                <Divider variant="middle" style={{  backgroundColor: 'white' }} />
                <Typography variant='h5' style={{paddingTop: '1vh', paddingBottom: '0.5vh', color: 'white' }}>
                  Interests
                </Typography>
                <Typography variant='body1' style={{paddingTop: '0.5vh', paddingBottom: '0.5vh', color: 'white' }}>
                  Games
                </Typography>
                <Typography variant='body1' style={{paddingTop: '0.5vh', paddingBottom: '0.5vh', color: 'white' }}>
                  Programming
                </Typography>
                <Typography variant='body1' style={{paddingTop: '0.5vh', paddingBottom: '1vh', color: 'white' }}>
                  more...
                </Typography>
              </Paper>
            </div>
            <div className='textCont'>
              <Paper variant="outlined" style={{backgroundColor: '#282c34'}}>
                <div className='textContShort'>
                  <PersonRoundedIcon style={{ color: green[50]}}/>
                  <Typography variant='h6' style={{ paddingBottom: '1vh', paddingInline: '5vh', color: 'white' }}>
                    Profile
                  </Typography>
                  </div>
                    <Typography variant='body2'style={{paddingTop: '0.5vh', paddingBottom: '1vh', paddingInline: '5vh', color: 'white'}}>
                      {aboutText}
                    </Typography>
                    <Divider variant="middle" style={{ backgroundColor: 'white' }} />
                  <div className='textContShort'>
                    <WorkRoundedIcon style={{alignSelf: '', color: green[50]}}/>
                    <Typography variant='h6' style={{ paddingBottom: '1vh', paddingInline: '5vh', color: 'white' }}>
                      Work Experience
                    </Typography>
                  </div>
                  <Divider variant="middle" style={{ backgroundColor: 'white' }} />
                  <div className='textContShort'>
                    <WorkRoundedIcon style={{ color: green[50]}}/>
                    <Typography variant='h6' style={{ paddingBottom: '1vh', paddingInline: '5vh', color: 'white' }}>
                      Education
                    </Typography>
                  </div>
                  <Divider variant="middle" style={{ backgroundColor: 'white' }} />
                  <div className='textContShort'>
                    <WorkRoundedIcon style={{ color: green[50]}}/>
                    <Typography variant='h6' style={{ paddingBottom: '1vh', paddingInline: '5vh', color: 'white' }}>
                      Skills
                    </Typography>
                  </div>
              </Paper>
            </div>
          </div>
        );
    }
}