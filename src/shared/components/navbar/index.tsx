import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Grid, Tab, AppBar } from '@material-ui/core';
import './navbar.scss';

export default function Navbar(props: any): any {
  return (
    <div>
      <AppBar position="fixed" color="transparent">
        <Grid container alignItems="flex-start" justify="flex-end" direction="row">
          <Router>
            <div>
              <Tab label='gallery' onClick={() => { props.history.push('/gallery'); }} />
              <Tab label='aboutUs' onClick={() => { props.history.push('/aboutUs'); }} />
              <Tab label='home' onClick={() => { props.history.push('/'); }} />
            </div>
          </Router>
        </Grid>
      </AppBar>
    </div>
  );
}
