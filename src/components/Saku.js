import React, { Component } from 'react';
import { Typography, Card, CardContent, Avatar, makeStyles } from '@material-ui/core';

import '../styles/App.css';
import logo from '../styles/Images/placeholder.jpg';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    small: {
      width: theme.spacing(3),
      height: theme.spacing(3),
    },
    large: {
      width: theme.spacing(7),
      height: theme.spacing(7),
      justifyContent: 'center',
    },
  }));

export default class Saku extends Component {

    constructor(props){
        super(props);
        this.state = {
        };
    }

    componentDidMount() {
        
    }

    render() {

        return (
        <div style={{ display: 'flex', flex: 1, flexDirection: 'row', minWidth: '80%'}}>
          <div style={{ display: 'flex', flex: 1, flexDirection: 'column'}}>
                  <div align={'center'} style={{paddingTop: '15vh'}}>
                    <img src={logo} alt='Logo' style={{maxHeight: '50vh', maxWidth: '50vh'}} />
                  </div>
                  <Typography variant='body2' color='textprimary' component='p'>
                    täsä mä olen
                  </Typography>
            </div>
            <div style={{ display: 'flex', flex: 2}}>
                  <Typography variant='body2' color='textprimary' component='p' style={{padding: 50}}>
                  Moro. 
  Olen kolmannen vuoden opiskelija Tampereen ammattikorkeakoulussa, Tietojenkäsittelyn tutkinto-ohjelmassa ja suuntautuminen on Ohjelmistotuotanto. Olen iloinen ja sosiaalinen persoona, jolle puujalkavitsit ovat erityisen lähellä sydäntä. Olen valmis kokeilemaan uusia asioita, josta hyvänä esimerkkinä voin mainita muutaman vuoden takaisen laskuvarjohyppykurssin, johon sen aikainen työkaveri innosti mukaan. Harrastuksiini kuuluu videopelipahisten koordinoitu kukistaminen isolla peliporukalla sekä pyöräily (tämä tauolla, koska pyörä lähti sitä ilmeisesti enemmän tarvitsevan matkaan). Tavoitteena olisi nyt löytää työpaikka/harjoittelupaikka, jossa oppia uusia asioita ja kehittää omia taitoja kohtaamalla uusia haasteita hyvässä, kannustavassa ja toisiaan tukevassa työporukassa.
  Projekteja on koulussa tullut kyhäiltyä java-, JavaScript-, Swift-, React-, React Native-, Spring Boot-, Angular- ja C#- kielillä/tekniikoilla osana kursseja, asiakasprojekteja sekä paria peliprojektia.
                  </Typography>
            </div>
        </div>
        );
    }
}