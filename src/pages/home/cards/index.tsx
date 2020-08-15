import React from 'react';
import { Grid, Paper, GridList, GridListTile, Typography } from '@material-ui/core';
import Card from './card';

import styles from './cards.module.scss';

const Cards = ({ title, data }: { title: string, data: Array<{ icon: string, text: string }> }) => {
  return (
    <Grid container justify="center">
      {title !== '' ?
        <Grid className={styles.content} container spacing={2} justify='center'>

          <Typography color={"textPrimary"} className={styles.item}>{title}</Typography>

        </Grid>
        : null}
      {data ?
        <Grid className={styles.content} container spacing={2} justify='center'>
          <GridList spacing={10} className={styles.list} cols={3}>
            {data.map((elem: { icon: string, text: string }, index: number): any => (
              // <Grid item xs={4} key={index + elem.icon + elem.text}>
              //  </Grid>
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

export default Cards;
