import React, { Component } from 'react';

import {CardContent, Divider, Typography, CardActions, IconButton} from '@material-ui/core';
import Icon from '@mdi/react'
import { mdiLanguageJava, mdiLanguageSwift, mdiLanguageCsharp, mdiLanguageJavascript  } from '@mdi/js'
import GitHubIcon from '@material-ui/icons/GitHub';

import '../styles/Item.css';

export default class Item extends Component {

  constructor(props) {
    super(props);
    this.state = {
      icon: mdiLanguageJava,
      date: null
    }
  }

  componentDidMount() {
    if(this.props.language === 'Java'){
      this.setState({
        icon: mdiLanguageJava
      })
    } else if (this.props.language === 'JavaScript') {
      this.setState({
        icon: mdiLanguageJavascript
      })
    } else if (this.props.language === 'C#') {
      this.setState({
        icon: mdiLanguageCsharp
      })
    }  else if (this.props.language === 'Swift') {
      this.setState({
        icon: mdiLanguageSwift
      })
    }
    this.setState({
      date: this.formatDate(this.props.date)
    })
  }

  formatDate(date) {
    const newDate = new Date(date);
    const year = newDate.getFullYear();
    let month = newDate.getMonth() + 1;
    let day = newDate.getDate();

    if (day < 10) {
      day = '0' + day;
    }
    if (month < 10) {
      month = '0' + month;
    }

    return day + '-' + month + '-' + year;
  }

  render() {
    if(this.props.value === this.props.index) {
      return (
        <CardContent style={{padding: 0}}>
          <Typography gutterBottom variant='h5' component='h2' style={{marginTop: 24, textAlign: 'center', minHeight: 70}}>
            {this.props.name}
          </Typography>
          <div className='eka'>
            <Icon path={this.state.icon}
                  title='User Profile'
                  size={5}
                  color='#80deea'
            />
          </div>
          <Divider style={{marginBottom: 12,}} />
          <div className='toka'>
            <Typography variant='body2' color='textSecondary' component='p' style={{paddingBottom: '1.2vh'}}>
              {this.state.date}
            </Typography>
            <Typography variant='body2' component='p'>
              Description:
            </Typography>
            <Typography variant='body2' color='textSecondary' component='p' style={{paddingBottom: '1.2vh'}}>
              {this.props.description}
            </Typography>
          </div>
          <CardActions disableSpacing style={{flexDirection: 'column'}}>
            <IconButton onClick={()=> window.open(this.props.link)}>
              <GitHubIcon color='primary'/>
            </IconButton>
          </CardActions>
        </CardContent>
      );
    }
    return (
      null
    );
  }
}