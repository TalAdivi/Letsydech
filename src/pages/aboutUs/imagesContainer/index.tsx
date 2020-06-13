import React from 'react';
import { Grid, GridList, GridListTile } from '@material-ui/core';
import withWidth, { isWidthUp } from '@material-ui/core/withWidth';

import styles from './imagesContainer.module.scss';


const getCols = (screenWidth: any) => {
  if (isWidthUp('lg', screenWidth)) {
    return 5;
  }

  if (isWidthUp('md', screenWidth)) {
    return 3;
  }

  return 2;
};

const imagesContainer = (props: any) => {
  const cols = getCols(props.width);
  const data: Array<{ img: string, title: string }> = [{
    img: 'https://imgur.com/XMuR7pR.png',
    title: 'Image1'
  }, {
    img: 'https://imgur.com/XMuR7pR.png',
    title: 'Image1'
  }, {
    img: 'https://imgur.com/XMuR7pR.png',
    title: 'Image1'
  }, {
    img: 'https://imgur.com/XMuR7pR.png',
    title: 'Image1'
  }, {
    img: 'https://imgur.com/XMuR7pR.png',
    title: 'Image1'
  }];

  return (
    <Grid className={styles.images} container>
      <GridList className={styles.list} cols={cols}> 
        {data.map((tile) => (
          <GridListTile key={tile.img}>
            <img src={tile.img} alt={tile.title} />
          </GridListTile>
        ))}
      </GridList>
    </Grid>
  );
};

export default withWidth()(imagesContainer);