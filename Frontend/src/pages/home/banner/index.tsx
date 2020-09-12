import React from 'react';
import { Grid, Button } from '@material-ui/core';
import styles from './banner.module.scss';

const BannerEn = ({ primaryText, secondaryText, history, buttonText }: any) => {
  return (
    <div className={styles.container}>
      <Grid className={[styles.item, styles.bgImg].join(' ')} item xs={12}>
        <p className={styles.title}>
          {primaryText}
        </p>
        <p className={styles.subTitle}>
          {secondaryText}
        </p>
        <div className={styles.buttons}>
          <Button className={styles.btn} size='large' color='primary' variant="contained" onClick={() => history.push('/contactus')}>
            {buttonText[0]}
          </Button>
          <Button className={styles.btn} size='large' color='primary' variant="contained" onClick={() => history.push('/donate')}>
            {buttonText[1]}
          </Button>
        </div>
      </Grid>
    </div>
  );
};

export default BannerEn;