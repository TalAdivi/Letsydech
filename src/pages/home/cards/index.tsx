import React from 'react';
import { Grid, GridList, GridListTile, Typography } from '@material-ui/core';
import withWidth, { isWidthUp } from '@material-ui/core/withWidth';
import Card from './card';

import styles from './cards.module.scss';
import { Image } from '../../../shared/models/gallery.model';


const getCols = (screenWidth: any) => {
  // console.log('screenWidth -> ', screenWidth)

  if (isWidthUp('lg', screenWidth)) {
    return 5;
  }

  if (isWidthUp('md', screenWidth)) {
    return 3;
  }
  return 2;
};

const Cards = ({ title, data, width }: { title: string, data: Array<Image>, width: any }) => {
  const cols = getCols(width)

  console.log('data-> ', data)
  return (
    <Grid container justify="center">
      {title !== '' ?
        <Grid className={styles.content} container spacing={2} justify='center'>
          <Typography color={"textPrimary"} className={styles.item}>{title}</Typography>
        </Grid>
        : null}
      {data ? <div className={styles.supporters}>
        {data.map((elem): any =>
          <div className={styles.supporter}>
            <Card icon={elem.url} text={elem.caption} />
          </div>
        )}
      </div>
        : null}
    </Grid >
  );
};

export default withWidth()(Cards);
