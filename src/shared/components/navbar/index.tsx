import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Grid, Tab, AppBar } from '@material-ui/core';
import styles from './navbar.module.scss';

export default function Navbar({ history }: any): any {
  return (
    <div className={styles.container}>
      <AppBar position="static" color="transparent">
        <Grid container alignItems="flex-start" justify="flex-end" direction="row">
          <Router>
            <div>
              <Tab label='gallery' onClick={() => { history.push('/gallery'); }} />
              <Tab label='aboutUs' onClick={() => { history.push('/aboutUs'); }} />
              <Tab label='home' onClick={() => { history.push('/'); }} />
            </div>
          </Router>
        </Grid>
      </AppBar>
    </div>
  );
}
