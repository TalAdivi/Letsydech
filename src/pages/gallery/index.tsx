import React from 'react';
import { GridList, GridListTile } from '@material-ui/core';
import Navbar from '../../shared/components/navbar';

const Gallery = (props: any): any => {
  const images: Array<{ url: string, title: string, cols: number }> = [];

  return (
    <div>
      <Navbar navigation={props.navigation} />
      <GridList cellHeight={160} cols={5}>
        {images.map((tile) => (
          <GridListTile key={tile.url} cols={tile.cols || 1}>
            <img src={tile.url} alt={tile.title} />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
};

export default Gallery;
