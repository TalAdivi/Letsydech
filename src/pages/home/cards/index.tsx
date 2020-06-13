import React from 'react';
import { Grid, Paper } from '@material-ui/core';
import Card from './card';

import styles from './cards.module.scss';

const Cards = ({ title, data }: { title: string, data: Array<{ icon: string, text: string }> }) => {
  return (
    <Grid container justify="center">
      {title !== '' ?
        <Grid className={styles.content} container spacing={2} justify='center'>
          <Grid item xs={2}>
            <Paper className='item'>{title}</Paper>
          </Grid>
        </Grid>
        : null}
      {data ?
        <Grid className={styles.content} container spacing={2} justify='center'>
          {data.map((elem: { icon: string, text: string }, index: number): any => (
            <Grid item xs={4} key={index + elem.icon + elem.text}>
              <Card icon={elem.icon} text={elem.text} />
            </Grid>
          ))}
        </Grid>
        : null}
    </Grid>
  );
};

export default Cards;
