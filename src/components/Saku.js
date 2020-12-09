import React, { Component } from 'react';
import { Typography, Paper, Divider, Link } from '@material-ui/core';
import { Image } from 'react-bootstrap';
import { green } from '@material-ui/core/colors';

import PersonRoundedIcon from '@material-ui/icons/PersonRounded';
import WorkRoundedIcon from '@material-ui/icons/WorkRounded';
import EmojiFoodBeverageRoundedIcon from '@material-ui/icons/EmojiFoodBeverageRounded';
import EmojiObjectsRoundedIcon from '@material-ui/icons/EmojiObjectsRounded';

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
      else if (nowMonth === myMonth && nowDay >= myDay) {
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
                <Typography variant='body1' style={{paddingTop: '0.5vh', paddingBottom: '0.5vh', color: 'white' }}>
                  Student
                </Typography>
                <Typography variant='body2' style={{paddingTop: '0.5vh', paddingBottom: '1vh', color: 'white' }}>
                  Tampere
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
                  <Typography variant='h5' style={{ paddingBottom: '1vh', paddingInline: '5vh', color: 'white' }}>
                    Profile
                  </Typography>

                  </div>
                    <Typography variant='body2'style={{ flex:'1',paddingTop: '0.5vh', paddingBottom: '2vh', paddingInline: '5vh', color: 'white'}}>
                      {aboutText}
                    </Typography>
                    <Divider variant="middle" style={{ backgroundColor: 'white' }} />

                    <div className='textContShort'>
                    <WorkRoundedIcon style={{ color: green[50]}}/>
                    <Typography variant='h5' style={{ paddingBottom: '1vh', paddingInline: '5vh', color: 'white' }}>
                      Education
                    </Typography>
                  </div>

                  <div className='textContRow'>
                    <Typography variant='body1' style={{ flex:'2', paddingBottom: '0.5vh', paddingInline: '5vh', color: 'white' }}>
                    B.B.A, Software Development, Business information systems
                    </Typography>
                    <Typography variant='body2' style={{ flex:'1', paddingBottom: '0.5vh', paddingInline: '5vh', color: 'white' }}>
                      2017-
                    </Typography>
                  </div>

                  <div className='textContRow'>
                    <Typography variant='body2' style={{ flex:'2', paddingBottom: '2vh', paddingInline: '5vh', color: 'white' }}>
                    Tampere University of Applied Sciences
                    </Typography>
                    <Typography variant='body2' style={{ flex:'1', paddingBottom: '1vh', paddingInline: '5vh', color: 'white' }}/>
                    </div>

                    <div className='textContRow'>
                    <Typography variant='body1' style={{ flex:'2', paddingBottom: '0.5vh', paddingInline: '5vh', color: 'white' }}>
                        Talotekniikan perustutkinto. (HVAC-installer)
                    </Typography>
                    <Typography variant='body2' style={{ flex:'1', paddingBottom: '0.5vh', paddingInline: '5vh', color: 'white' }}>
                      2012
                    </Typography>
                  </div>

                  <div className='textContRow'>
                    <Typography variant='body2' style={{ flex:'2', paddingBottom: '2vh', paddingInline: '5vh', color: 'white' }}>
                        Sedu Kirkkokatu
                    </Typography>
                    <Typography variant='body2' style={{ flex:'1', paddingBottom: '1vh', paddingInline: '5vh', color: 'white' }}/>
                  </div>

                    <Divider variant="middle" style={{ backgroundColor: 'white' }} />

                  <div className='textContShort'>
                    <WorkRoundedIcon style={{ color: green[50]}}/>
                    <Typography variant='h5' style={{ paddingBottom: '1vh', paddingInline: '5vh', color: 'white' }}>
                      Work Experience
                    </Typography>
                  </div>

                  <div className='textContRow'>
                    <Typography variant='body1' style={{ flex:'2', paddingBottom: '0.5vh', paddingInline: '5vh', color: 'white' }}>
                     ARE OY
                    </Typography>
                    <Typography variant='body2' style={{ flex:'1', paddingBottom: '0.5vh', paddingInline: '5vh', color: 'white' }}>
                      10/2016 – 07/2017
                    </Typography>
                  </div>
                  <div className='textContRow'>
                    <Typography variant='body2' style={{ flex:'2', paddingBottom: '2vh', paddingInline: '5vh', color: 'white' }}>
                      HV-installer
                    </Typography>
                    <Typography variant='body2' style={{ flex:'1', paddingBottom: '1vh', paddingInline: '5vh', color: 'white' }}/>
                  </div>

                  <div className='textContRow'>
                    <Typography variant='body1' style={{ flex:'2', paddingBottom: '0.5vh', paddingInline: '5vh', color: 'white' }}>
                    LVI-Katila Oy
                    </Typography>
                    <Typography variant='body2' style={{ flex:'1', paddingBottom: '0.5vh', paddingInline: '5vh', color: 'white' }}>
                    04/2016 – 09/2016
                    </Typography>
                  </div>
                  <div className='textContRow'>
                    <Typography variant='body2' style={{ flex:'2', paddingBottom: '2vh', paddingInline: '5vh', color: 'white' }}>
                      HVAC-installer
                    </Typography>
                    <Typography variant='body2' style={{ flex:'1', paddingBottom: '1vh', paddingInline: '5vh', color: 'white' }}/>
                  </div>

                  <div className='textContRow'>
                    <Typography variant='body1' style={{ flex:'2', paddingBottom: '0.5vh', paddingInline: '5vh', color: 'white' }}>
                      Pohjanmaanputki Oy
                    </Typography>
                    <Typography variant='body2' style={{ flex:'1', paddingBottom: '0.5vh', paddingInline: '5vh', color: 'white' }}>
                      Oy, 07/2013 – 07/2016
                    </Typography>
                  </div>
                  <div className='textContRow'>
                    <Typography variant='body2' style={{ flex:'2', paddingBottom: '2vh', paddingInline: '5vh', color: 'white' }}>
                      HVAC-installer
                    </Typography>
                    <Typography variant='body2' style={{ flex:'1', paddingBottom: '1vh', paddingInline: '5vh', color: 'white' }}/>
                  </div>

                  <div className='textContRow'>
                    <Typography variant='body1' style={{ flex:'2', paddingBottom: '0.5vh', paddingInline: '5vh', color: 'white' }}>
                    Avoin yhteiö Keisasen Turkis
                    </Typography>
                    <Typography variant='body2' style={{ flex:'1', paddingBottom: '0.5vh', paddingInline: '5vh', color: 'white' }}>
                      06/2011 – 07/2011
                    </Typography>
                  </div>
                  <div className='textContRow'>
                    <Typography variant='body2' style={{ flex:'2', paddingBottom: '2vh', paddingInline: '5vh', color: 'white' }}>
                      Summer Job
                    </Typography>
                    <Typography variant='body2' style={{ flex:'1', paddingBottom: '1vh', paddingInline: '5vh', color: 'white' }}/>
                  </div>

                  <div className='textContRow'>
                    <Typography variant='body1' style={{ flex:'2', paddingBottom: '0.5vh', paddingInline: '5vh', color: 'white' }}>
                    Lehtimäen Opisto
                    </Typography>
                    <Typography variant='body2' style={{ flex:'1', paddingBottom: '0.5vh', paddingInline: '5vh', color: 'white' }}>
                      07/2010 – 10/2011
                    </Typography>
                  </div>
                  <div className='textContRow'>
                    <Typography variant='body2' style={{ flex:'2', paddingBottom: '1vh', paddingInline: '5vh', color: 'white' }}>
                      Summer Job
                    </Typography>
                    <Typography variant='body2' style={{ flex:'1', paddingBottom: '1vh', paddingInline: '5vh', color: 'white' }}/>
                  </div>

                  <Divider variant="middle" style={{ backgroundColor: 'white' }} />
                  <div className='textContShort'>
                    <EmojiFoodBeverageRoundedIcon style={{ color: green[50]}}/>
                    <Typography variant='h5' style={{ paddingBottom: '1vh', paddingInline: '5vh', color: 'white' }}>
                      Position of responsibility
                    </Typography>
                  </div>
                  <div className='textContRow'>
                    <Typography variant='body1' style={{flex:'2', paddingBottom: '0.5vh', paddingInline: '5vh', color: 'white' }}>
                      Rakennusliitto
                    </Typography>
                    <Typography variant='body2' style={{flex:'1', paddingBottom: '0.5vh', paddingInline: '5vh', color: 'white' }}>
                      2016
                    </Typography>
                  </div>
                  <div className='textContRow'>
                    <Typography variant='body2' style={{flex:'2', paddingBottom: '1vh', paddingInline: '5vh', color: 'white' }}>
                      Seinäjoen osaston putkijaosto, Kirjuri
                    </Typography>
                    <Typography variant='body2' style={{ flex:'1', paddingBottom: '2vh', paddingInline: '5vh', color: 'white' }}/>
                  </div>

                  <Divider variant="middle" style={{ backgroundColor: 'white' }} />
                  <div className='textContShort'>
                    <EmojiObjectsRoundedIcon style={{ color: green[50]}}/>
                    <Typography variant='h5' style={{ paddingBottom: '1vh', paddingInline: '5vh', color: 'white' }}>
                      Technologies
                    </Typography>
                  </div>
                  <div className='textContRow'>
                    <Typography variant='h6' style={{flex:'1', paddingBottom: '0.5vh', paddingInline: '5vh', color: 'white' }}>
                      Programming Languages
                    </Typography>
                    <Typography className='SkillLevel' variant='h6' style={{ flex:'1', paddingBottom: '1vh', paddingInline: '5vh', color: 'white'}}>
                      Level
                    </Typography>
                  </div>
                  <div className='textContRow'>
                    <Typography variant='body2' style={{flex:'1', paddingBottom: '0.5vh', paddingInline: '5vh', color: 'white' }}>
                      Java
                    </Typography>
                    <Typography variant='body2' style={{ flex:'1', paddingBottom: '1vh', paddingInline: '5vh', color: 'white' }}>
                    </Typography>
                  </div>
                  <div className='textContRow'>
                    <Typography variant='body2' style={{flex:'1', paddingBottom: '0.5vh', paddingInline: '5vh', color: 'white' }}>
                      JavaScript
                    </Typography>
                    <Typography variant='body2' style={{ flex:'1', paddingBottom: '1vh', paddingInline: '5vh', color: 'white' }}>
                      Good
                    </Typography>
                  </div>
                  <div className='textContRow'>
                    <Typography variant='body2' style={{flex:'1', paddingBottom: '0.5vh', paddingInline: '5vh', color: 'white' }}>
                      Typescript
                    </Typography>
                    <Typography variant='body2' style={{ flex:'1', paddingBottom: '1vh', paddingInline: '5vh', color: 'white' }}>
                      Basics+
                    </Typography>
                  </div>
                  <div className='textContRow'>
                    <Typography variant='body2' style={{flex:'1', paddingBottom: '0.5vh', paddingInline: '5vh', color: 'white' }}>
                      C#
                    </Typography>
                    <Typography variant='body2' style={{ flex:'1', paddingBottom: '1vh', paddingInline: '5vh', color: 'white' }}>
                      Basics
                    </Typography>
                  </div>
                  <div className='textContRow'>
                    <Typography variant='body2' style={{flex:'1', paddingBottom: '0.5vh', paddingInline: '5vh', color: 'white' }}>
                      C++
                    </Typography>
                    <Typography variant='body2' style={{ flex:'1', paddingBottom: '1vh', paddingInline: '5vh', color: 'white' }}>
                      Basics
                    </Typography>
                  </div>

              </Paper>
            </div>
          </div>
        );
    }
}