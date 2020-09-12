import React from 'react';
import Axios from 'axios';
import { Typography } from '@material-ui/core';
import Navbar from '../../shared/components/navbar';
import Footer from '../../shared/components/footer';
import { AboutUs as AboutUsModel } from '../../shared/models/aboutus.model';
import Loading from '../../shared/components/loading';
import styles from './aboutUs.module.scss';
import ImageGallery from 'react-image-gallery';

const AboutUs = ({ history, width }: any): any => {
  const [loading, setLoading] = React.useState(true);
  const [data, setData] = React.useState<AboutUsModel>();

  React.useEffect((): any => {
    fetchData();
  }, []);

  const fetchData = async (): Promise<void> => {
    try {
      const res: { data: AboutUsModel } = await Axios.get(`${process.env.REACT_APP_BACKEND_URL}/about-us`);
      setData(res.data);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  const genImages = (): Array<any> => {
    let arr: any = [];
    data?.Images.map((image) => {
      arr.push(
        {
          original: image.url,
          thumbnail: image.formats ? image.formats.thumbnail.url : image.url
        });
    });
    return arr;
  };

  return (
    <div>
      <Navbar history={history} path={"aboutus"} />
      {loading ? <Loading loading={loading} /> :
        <div>
          <div className={styles.container}>
            <div className={styles.bg}>
              <h1>{data?.Title}</h1>
              <Typography align="center" color="textPrimary" variant="h6" className={styles.text1Margin} >{data?.Text1}</Typography>
              <Typography align="center" className={styles.text2Margin}>{data?.Text2}</Typography>
              <Typography align="center" className={styles.text3Margin}>{data?.Text3}</Typography>
            </div>
            {data?.Images.length === 0 ? null :
              <div className={styles.gallery}>
                <ImageGallery autoPlay={true} slideInterval={5000} showFullscreenButton={false} showThumbnails={false} showIndex={false} isRTL={true} items={genImages()} />
              </div>
            }
            {data?.Licenses.length === 0 ? null :
              <div className={styles.licensesContainer}>
                <h3>אישורים</h3>
                <div className={styles.licenses}>
                  {data?.Licenses.map((license) =>
                    <div key={license.id} className={styles.imageHolder}>
                      <a href={license.url} target='_black'><img src={license.url} alt={license.caption} /></a>
                    </div>
                  )}
                </div>
              </div>
            }
          </div>
        </div>
      }
      <Footer history={history} />
    </div>
  );
};

export default AboutUs;

