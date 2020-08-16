import React from 'react';
import { Card, CardContent, Typography, CardMedia, Grid } from '@material-ui/core';
import styles from './card.module.scss';

const SingleCard = ({ icon, text }: { icon: string, text: string }) => {
  return (

    // <>
    <Grid item xl alignContent="space-around">
      <CardMedia
          className={styles.myCardMedia}
          component="img"
          alt={text}
          height="550 !important"
          width= "370 !important"
          image= {icon}
          title={text}
        />

      <CardContent >
        <Typography gutterBottom variant="subtitle1" component="h6" align="center">
          {text}
        </Typography>
      </CardContent>
    </Grid>

    // {/* </> */}
  );
};

export default SingleCard;
