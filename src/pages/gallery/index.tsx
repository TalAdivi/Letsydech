import React from 'react';
import Axios from 'axios';
import styles from './gallery.module.scss';
import Image from '../../shared/models/image.model';
import GalleryModel from '../../shared/models/image.model';
import Loading from '../../shared/components/loading';
import Navbar from '../../shared/components/navbar';

const Gallery = ({ history }: any): any => {
  const [images, setImages] = React.useState<Array<Image>>([]);
  const [loading, setLoading] = React.useState(false);
  const [title, setTitle] = React.useState("");
  React.useEffect((): any => {
    fetchImages();
  }, []);

  const fetchImages = async (): Promise<void> => {
    try {
      setLoading(true);
      console.log(`${process.env.REACT_APP_BACKEND_URL}/gallery`);
      const res: GalleryModel = await Axios.get(`${process.env.REACT_APP_BACKEND_URL}/gallery`);
      setImages(res.data.Images);
      setTitle(res.data.Title);
      console.log(res.data);
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
        <div>
          {images.length === 0 ? <h2>No Content</h2> :
            <div>
              <div>
                <h1>{title}</h1>
              </div>
              <div className={styles.images}>
                {images.map((image) => (
                  <img key={image.id} className={styles.image} src={image.url} alt={""} />
                ))}
              </div>
            </div>
          }
        </div>
      }
    </div>
  );
};

export default Gallery;
