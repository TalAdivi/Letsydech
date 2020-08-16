import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Grid, Tab, AppBar } from '@material-ui/core';



export default function Navbar({ history }: any): any {
  return (
    <div>
      <AppBar position="static" color="transparent">
        <Grid container alignItems="flex-start" justify="flex-end" direction="row">
          <Router>
            <div>
              <Tab label='gallery' onClick={() => { history.push('/gallery'); }} />
              <Tab label='aboutUs' onClick={() => { history.push('/aboutUs'); }} />
              <Tab label='home' onClick={() => { history.push('/'); }} />
              <Tab label='donate' onClick={() => { history.push('/donate'); }} />
            </div>
          </Router>
        </Grid>
      </AppBar>
    </div>
  );
}
