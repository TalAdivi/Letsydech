import React from 'react';
import Grid from '@material-ui/core/Grid';
import Card from './card';

const Cards = () => {
  return (
    <Grid container spacing={2} justify="center">
      <Grid item xs={6}>
        <Card icon='' text='test' />
      </Grid>
      <Grid item xs={6}>  
        <Card icon='' text='test' />
      </Grid>
      <Grid item xs={6}>
        <Card icon='' text='test' />
      </Grid>
    </Grid>
  );
};

export default Cards;
