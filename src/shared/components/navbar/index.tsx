import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Grid, Tab, AppBar } from '@material-ui/core';
import styles from './navbar.module.scss';

export default function Navbar({ history }: any): any {
  return (
    <div className={styles.container}>
      <AppBar position="static" color="transparent">
        <Grid container alignItems="flex-start" justify="flex-start" direction="row">
          <Router>
            <div>
              <Tab label='עמוד הבית' onClick={() => { history.push('/'); }} />
              <Tab label='אודותינו' onClick={() => { history.push('/aboutUs'); }} />
              <Tab label='גלריית תמונות' onClick={() => { history.push('/gallery'); }} />
              <Tab label='צרו קשר' onClick={() => { history.push('/contactUs'); }} />
            </div>
          </Router>
        </Grid>
      </AppBar>
    </div>
  );
}
