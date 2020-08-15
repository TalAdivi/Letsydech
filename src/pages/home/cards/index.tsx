import React from 'react';
import { Grid, GridList, GridListTile, Typography } from '@material-ui/core';
import withWidth, { isWidthUp } from '@material-ui/core/withWidth';
import Card from './card';

import styles from './cards.module.scss';


const getCols = (screenWidth: any) => {
  console.log('screenWidth -> ', screenWidth)
  if (isWidthUp('lg', screenWidth)) {
    return 5;
  }

  if (isWidthUp('md', screenWidth)) {
    return 3;
  }
  return 2;
};

const Cards = ({ title, data ,width}: { title: string, data: Array<{ icon: string, text: string }>, width:any }) => {
  const cols = getCols(width)
  return (
    <Grid container justify="center">
      {title !== '' ?
        <Grid className={styles.content} container spacing={2} justify='center'>

          <Typography color={"textPrimary"} className={styles.item}>{title}</Typography>

        </Grid>
        : null}
      {data ?
        <Grid className={styles.content} container spacing={2} justify='center'>
          <GridList spacing={10} className={styles.list} cols={cols}>
            {data.map((elem: { icon: string, text: string }, index: number): any => (
              <GridListTile className={styles.gridListTitle}>

                <Card icon={elem.icon} text={elem.text} />
              </GridListTile>
            ))}
          </GridList>
        </Grid>
        : null}
    </Grid>
  );
};

export default withWidth()(Cards) ;
