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
              <Tab label='גלריית תמונות' onClick={() => { history.push('/gallery'); }} />
              <Tab label='אודותינו' onClick={() => { history.push('/aboutUs'); }} />
              <Tab label='עמוד הבית' onClick={() => { history.push('/'); }} />
            </div>
          </Router>
        </Grid>
      </AppBar>
    </div>
  );
}
