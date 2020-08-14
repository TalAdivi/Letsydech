import React from 'react';
import Axios from 'axios';
import styles from './gallery.module.scss';
import Image from '../../shared/models/image.model';
import GalleryModel from '../../shared/models/image.model';
import Loading from '../../shared/components/loading';
import Navbar from '../../shared/components/navbar';

const Gallery = ({ history }: any): any => {
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
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Navbar history={history} />
      {loading ? <Loading loading={loading} /> :
        <>
          {!data ? null :
            <>
              {data.Images.length === 0 ? <h2>No Content</h2> :
                <>
                  <div>
                    <h1>{data.Title}</h1>
                  </div>
                  <div className={styles.images}>
                    {data.Images.map((image) => (
                      <img key={image.id} className={styles.image} src={image.url} alt={""} />
                    ))}
                  </div>
                </>
              }
            </>
          }
        </>
      }
    </div>
  );
};

export default Gallery;
