import React, { Component } from 'react';

import {Card, Box, Grid} from '@material-ui/core';

import Item from './Item.js'
import '../styles/App.css';

const style = {
    maxWidth: 345,
    minWidth: 345,
    background: '#334A76' 
  }

export default class Info extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
          data: null
        }
      }
    
      componentDidMount() {
        fetch('https://api.github.com/users/Sakkendalen/repos')
          .then(response => response.json())
          .then(data => this.setState({ data }));
          console.log('' + this.state.data);
      }

    render() {

        if(this.state.data && this.props.value === this.props.index) {
            return (
              <div style={{maxWidth: '100vw', overflow: 'hidden', paddingBottom: 100}}>
                <Box style={{paddingTop: 100, flex: 1}}/>
                <Grid container justify='center' spacing={2}>
                  {this.state.data.sort((a,b) => {
                    if(a.created_at < b.created_at) return 1
                    else if (a.created_at > b.created_at) return -1
                    return 0
                  }).map(data => {
                    return (
                      <Grid item key={data.id}>
                        <Card style={style}>
                          <Item name={data.name} language={data.language} description={data.description} date={data.created_at} link={data.html_url}/>
                        </Card>
                      </Grid>
                    )
                  })}
                </Grid>
              </div>
            );
        }
        else {
            return <p>Loading...</p>;
        }
    }
}