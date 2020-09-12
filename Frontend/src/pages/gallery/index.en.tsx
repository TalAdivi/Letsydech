import React from 'react';
import Axios from 'axios';
import styles from './gallery.module.scss';
import { Gallery as GalleryModel } from '../../shared/models/gallery.model';
import Gallery from 'react-grid-gallery';
import Footer from '../../shared/components/footer';
import Loading from '../../shared/components/loading';
import Navbar from '../../shared/components/navbar';
import FooterEn from '../../shared/components/footer/index.en';
import HeaderEn from '../../shared/components/navbar/navbar.en';

const GallaryComponentEn = ({ history }: any): any => {
  const [data, setData] = React.useState<GalleryModel>();
  const [loading, setLoading] = React.useState(false);

  React.useEffect((): any => {
    fetchData();
  }, []);

  const fetchData = async (): Promise<void> => {
    try {
      setLoading(true);
      const res: { data: GalleryModel } = await Axios.get(`${process.env.REACT_APP_BACKEND_URL}/gallery`);
      setData(res.data);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  const genImages = (): Array<any> => {
    const getThumbnail = (image: any): any => {
      if (!image.formats.small || !image.formats.medium || !image.formats.large)
        if (!image.formats.thumbnail)
          return image.url;
        else
          return image.formats.thumbnail.url;

      let choice = 1;

      if (1920 <= window.innerWidth)
        choice = 4;
      if (1280 <= window.innerWidth)
        choice = 3;
      if (960 <= window.innerWidth)
        choice = 2;

      switch (choice) {
        case 1:
          return image.formats.small ? image.formats.small.url : image.url;
        case 2:
          return image.formats.medium ? image.formats.medium.url : image.url;
        case 3:
          return image.formats.large ? image.formats.large.url : image.url;
        case 4:
          return image.formats.large ? image.formats.large.url : image.url;
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
      <HeaderEn history={history} path={"gallery"} />
      {loading ? <Loading loading={loading} /> :
        <>
          <div className={styles.container}>
            <h1>{data?.TitleEn}</h1>
          </div>
          <div className={styles.imageGallery}>
            <Gallery images={genImages()} enableLightbox={true} enableImageSelection={false} />
          </div>
        </>
      }
      <FooterEn history={history} />
    </div >
  );
};

export default GallaryComponentEn;
