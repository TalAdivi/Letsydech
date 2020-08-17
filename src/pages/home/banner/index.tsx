import React from 'react';
import { Grid, Paper, Typography, CardMedia } from '@material-ui/core';
import styles from './banner.module.scss';

const Banner = ({ primaryText, secondaryText }: { primaryText: string, secondaryText: string }) => {
  return (
    <Grid container spacing={2} justify='center'>
      <Grid className={[styles.item, styles.bgImg].join(' ')} item xs={12}>
        <p  className={styles.title}>
          {primaryText}
        </p>
        <p className={styles.subTitle}>
          {secondaryText}
        </p>
      </Grid>
    </Grid>
  );
};

export default Banner;