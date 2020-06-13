import React from 'react';
import { Grid, Paper } from '@material-ui/core';
import styles from './banner.module.scss';

const Banner = () => {
  return (
    <Grid container spacing={2} justify='center'>
      <Grid item xs={6}>
        <Paper className={styles.item}>TEXT PLACEHOLDER</Paper>
      </Grid>
      <Grid item xs={6}>
        <Paper className={styles.item}>IMAGE PLACEHOLDER</Paper>
      </Grid>
    </Grid>
  );
};

export default Banner;