import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Grid, Tab, AppBar } from '@material-ui/core';
import styles from './navbar.module.scss';
import { Nav, NavDropdown, Navbar, Container, Form, FormControl, Button } from 'react-bootstrap';

const Header = ({ history }: any): any => {
  return (
    <div className={styles.root}>
      <AppBar position="static" color="transparent">
        <div className={styles.container}>
          <div className={styles.logo}>
            test
        </div>
          <div className={styles.nav}>
            <Grid className={styles.grid} container alignItems="flex-start" justify="flex-start" direction="column">
              <Router>
                <div>
                  <Tab label='עמוד הבית' onClick={() => { history.push('/'); }} />
                  <Tab label='אודותינו' onClick={() => { history.push('/aboutUs'); }} />
                  <Tab label='גלריית תמונות' onClick={() => { history.push('/gallery'); }} />
                  <Tab label='סיפורים' onClick={() => { history.push('/stories'); }} />
                  <Tab label='תרומות' onClick={() => { history.push('/donate'); }} />
                  <Tab label='צרו קשר' onClick={() => { history.push('/contactUs'); }} />
                </div>
              </Router>
            </Grid>
          </div>
        </div >
      </AppBar>
    </div>
  );
}

export default Header;