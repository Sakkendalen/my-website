import React, { Component } from 'react';
import { Typography } from '@material-ui/core';
import { Image } from 'react-bootstrap';

import '../styles/Saku.css';
import logo from '../styles/Images/placeholder.jpg';

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
          <div className='eka'>
            <div className='toka'>
                  <div className='kolmas'>
                    <Image alt='kuva' src={logo} rounded style={{maxHeight:'50vh', maxWidth:'50vh' }} />
                  </div>
                  <Typography variant='body2' component='p'>
                    täsä mä olen
                  </Typography>
            </div>
            <div className='viides'>
                  <Typography variant='body2' component='p'>
                  Moro. 
                  Olen kolmannen vuoden opiskelija Tampereen ammattikorkeakoulussa, Tietojenkäsittelyn tutkinto-ohjelmassa ja suuntautuminen on Ohjelmistotuotanto. Olen iloinen ja sosiaalinen persoona, jolle puujalkavitsit ovat erityisen lähellä sydäntä. Olen valmis kokeilemaan uusia asioita, josta hyvänä esimerkkinä voin mainita muutaman vuoden takaisen laskuvarjohyppykurssin, johon sen aikainen työkaveri innosti mukaan. Harrastuksiini kuuluu videopelipahisten koordinoitu kukistaminen isolla peliporukalla sekä pyöräily (tämä tauolla, koska pyörä lähti sitä ilmeisesti enemmän tarvitsevan matkaan). Tavoitteena olisi nyt löytää työpaikka/harjoittelupaikka, jossa oppia uusia asioita ja kehittää omia taitoja kohtaamalla uusia haasteita hyvässä, kannustavassa ja toisiaan tukevassa työporukassa.
                  Projekteja on koulussa tullut kyhäiltyä java-, JavaScript-, Swift-, React-, React Native-, Spring Boot-, Angular- ja C#- kielillä/tekniikoilla osana kursseja, asiakasprojekteja sekä paria peliprojektia.
                  </Typography>
            </div>
          </div>
        );
    }
}