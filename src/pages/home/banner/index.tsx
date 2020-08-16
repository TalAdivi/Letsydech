import React from 'react';
import { Grid, Paper, Typography, CardMedia } from '@material-ui/core';
import styles from './banner.module.scss';

const Banner = ({primaryText, secondaryText}: {primaryText: string,secondaryText: string }) => {
  return (
    <Grid container spacing={2} justify='center'>
      <Grid className={[styles.item, styles.bgImg].join(' ')} item xs={12}>
          <Typography color={"textPrimary"} align={"center"} className={styles.typo}>
            {primaryText}
              <Typography className={styles.typoSecondary} color={"textSecondary"} align={"center"} >
               {secondaryText}
             </Typography>             
          </Typography>
      </Grid>
    </Grid>
  );
};

export default Banner;