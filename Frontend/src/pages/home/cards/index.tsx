import React from 'react';
import { Grid } from '@material-ui/core';
import withWidth from '@material-ui/core/withWidth';
import Card from './card';
import styles from './cards.module.scss';
import { Image } from '../../../shared/models/gallery.model';

const Cards = ({ title, data }: { title: string, data: Array<Image>, width: any }) => {
  return (
    <Grid container justify="center">
      {title !== '' ?
        <Grid className={styles.content} container spacing={2} justify='center'>
          <h4 color={"textPrimary"} className={styles.item}>{title}</h4>
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
