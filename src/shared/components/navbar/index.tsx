import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import { Grid } from '@material-ui/core';
import './navbar.scss';

export default function Navbar(props: any): any {
  return (
    <div className='left'>
      <AppBar position="fixed" color="transparent">
        <Grid container alignItems="flex-start" justify="flex-end" direction="row">
          <Router>
            <div>
              <button onClick={() => { props.history.push('/test'); }}>TEST</button>
            </div>
          </Router>
        </Grid>
      </AppBar>
    </div>
  );
}
