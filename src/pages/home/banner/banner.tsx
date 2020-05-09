import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import './banner.scss';

const Banner = () => {
  return (
    <Grid className='bg' container spacing={2} justify="center">
      <Grid item xs={10}>
        <Grid container spacing={2} justify="center">
          <Grid item xs={6}>
            <Paper className='item'>Hellowww</Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className='item'>Hellowww</Paper>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Banner;