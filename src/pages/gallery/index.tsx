import React from 'react';
import Axios from 'axios';
import styles from './gallery.module.scss';
import { Gallery as GalleryModel } from '../../shared/models/gallery.model';
import Gallery from 'react-grid-gallery';

import Loading from '../../shared/components/loading';
import Navbar from '../../shared/components/navbar';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';

const shuffleArray = (arr: Array<any>): Array<any> => {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * i);
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }

  return arr;
}

const GallaryComponent = ({ history }: any): any => {
  const [data, setData] = React.useState<GalleryModel>();
  const [loading, setLoading] = React.useState(false);

  React.useEffect((): any => {
    fetchImages();
  }, []);

  const fetchImages = async (): Promise<void> => {
    try {
      setLoading(true);
      console.log(`${process.env.REACT_APP_BACKEND_URL}/gallery`);
      const res: { data: GalleryModel } = await Axios.get(`${process.env.REACT_APP_BACKEND_URL}/gallery`);
      setData(res.data);
      console.log(res.data);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  const getViewSize = (): number => {
    if (1920 <= window.innerWidth)
      return 4;
    if (1280 <= window.innerWidth)
      return 3;
    if (960 <= window.innerWidth)
      return 2;

    return 1;
  }

  const genImages = (): Array<any> => {
    const getThumbnail = (image: any): any => {
      const size = getViewSize();
      switch (size) {
        case 1:
          return image.formats.small.url;
        case 2:
          return image.formats.medium.url;
        case 3:
          return image.formats.large.url;
        case 4:
          return image.formats.large.url;
      }
    };
    let arr: Array<any> = [];
    data?.Images.map((image) => {
      arr.push(
        {
          src: image.url,
          thumbnail: getThumbnail(image),
          thumbnailWidth: 320,
          thumbnailHeight: 174,
          caption: image.caption
        });
    });
    return arr;
  }

  return (
    <div>
      <Navbar history={history} />
      {loading ? <Loading loading={loading} /> :
        <>
          <div className={styles.container}>
            <h1>{data?.Title}</h1>
          </div>
          <div className={styles.imageGallery}>
            <Gallery images={genImages()} enableLightbox={true} enableImageSelection={false} />
          </div>
        </>
      }
    </div >
  );
};

export default GallaryComponent;
