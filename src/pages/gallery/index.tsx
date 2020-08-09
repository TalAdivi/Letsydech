import React from 'react';
import Axios from 'axios';
import { GridList, GridListTile } from '@material-ui/core';
import styles from './gallery.module.scss';
import Image from '../../shared/models/image.model'
import Loading from '../../shared/components/loading';
import Navbar from '../../shared/components/navbar';

const Gallery = (props: any): any => {
  const [images, setImages] = React.useState<Array<Image>>([]);
  const [loading, setLoading] = React.useState(false);

  React.useEffect((): any => {
    fetchImages();
  }, []);

  const fetchImages = async (): Promise<void> => {
    try {
      setLoading(true);
      const res: any = await Axios.get(`${process.env.BACKEND_URL}/gallery`);
      setImages(res.data);
      setLoading(false);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      {loading ? <Loading /> :
        <div>
          {images.length == 0 ? <p>No Content</p> :
            <div>
              <Navbar navigation={props.navigation} />
              <GridList cellHeight={160} cols={5}>
                {images.map((tile) => (
                  <GridListTile key={tile.url} cols={1}>
                    <img src={tile.url} alt={""} />
                  </GridListTile>
                ))}
              </GridList>
            </div>
          }
        </div>
      }
    </div>
  );
};

export default Gallery;
