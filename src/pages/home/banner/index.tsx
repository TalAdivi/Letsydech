import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import styles from './banner.module.scss';

const Banner = () => {
  return (
    <Grid className={styles.bg} container spacing={2} justify='center'>
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