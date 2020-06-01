import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import { Grid } from '@material-ui/core';
import Tab from '@material-ui/core/Tab';
import './navbar.scss';

export default function Navbar(props: any): any {
  return (
    <div>
      <AppBar position="fixed" color="transparent">
        <Grid container alignItems="flex-start" justify="flex-end" direction="row">
          <Router>
            <div>
              <Tab label='test' onClick={() => { props.history.push('/test'); }} />
              <Tab label='about us' onClick={() => { props.history.push('/aboutUs'); }} />
              <Tab label='home' onClick={() => { props.history.push('/'); }} />
            </div>
          </Router>
        </Grid>
      </AppBar>
    </div>
  );
}
