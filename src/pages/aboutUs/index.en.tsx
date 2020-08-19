import React from 'react';
import Axios from 'axios';
import { Typography } from '@material-ui/core';
import Navbar from '../../shared/components/navbar';
import Footer from '../../shared/components/footer';
import { AboutUs as AboutUsModel } from '../../shared/models/aboutus.model';
import Loading from '../../shared/components/loading';
import styles from './aboutUs.module.scss';
import ImageGallery from 'react-image-gallery';
import HeaderEu from '../../shared/components/navbar/navbar.en';
import FooterEn from '../../shared/components/footer/index.en';

const AboutUsEn = ({ history, width }: any): any => {
  const [loading, setLoading] = React.useState(true);
  const [data, setData] = React.useState<AboutUsModel>();
  React.useEffect((): any => {
    fetchData();
  }, []);


  const fetchData = async (): Promise<void> => {
    try {
      console.log(`${process.env.REACT_APP_BACKEND_URL}/about-us`);
      const res: { data: AboutUsModel } = await Axios.get(`${process.env.REACT_APP_BACKEND_URL}/about-us`);
      setData(res.data);
      console.log(res.data);
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
          thumbnail: image.formats ? image.formats.thumbnail : image.url
        });
    });
    return arr;
  }

  return (
    <div>
      <HeaderEu history={history} path={"aboutus"} />
      {loading ? <Loading loading={loading} /> :
        <div>
          <div className={styles.container}>
            <div className={styles.bg}>
              <h1>{data?.Title}</h1>
              <Typography align="center" color="textPrimary" variant="h6" className={styles.text1Margin} >Aid for Women Affected by Addictions A non-profit registered association, founded in 2012, by women who share the same ideology, out of an understanding of the unique needs of addicted women and in recognition of the lack of response at certain stages of rehabilitation for this population. The association aims to promote activity in a number of areas that serve both the individual and society in general:</Typography>
              <Typography align="center" className={styles.text2Margin}>Providing information and professional assistance in issues such as detoxification, mental health care, assistance in exercising rights. To be a safe, respectful and supportive place for women affected by addiction. Act with the authorities to adopt a progressive policy regarding the treatment of addicted women. Raise awareness among the public of the close link between violence and sexual violence in particular and the development of addictions among women.</Typography>
              <Typography align="center" className={styles.text3Margin}>The target population of the association is women affected by addictions, from the age of 18 and up. Studies conducted in Israel and around the world show that women who use addiction rehabilitation services have different demographic characteristics than men who need these services: these are mainly the unemployed, who, unlike men, are less likely to take part in criminal activities. Data from treatment centers for women addicted to drugs and alcohol in Israel and abroad show that over 90% of women in these settings have been sexually assaulted in the past and sexual trauma is seen as a decisive factor in their addiction. For many years, there was no awareness of this language among the welfare services and all addiction treatment programs were built according to a model that was mainly suitable for the male criminal population. Which also consists overwhelmingly of men.</Typography>
            </div>
            {data?.Images.length === 0 ? null :
              <div className={styles.gallery}>
                <ImageGallery autoPlay={true} slideInterval={5000} showFullscreenButton={false} showThumbnails={false} showIndex={false} isRTL={true} items={genImages()} />
              </div>
            }
            {data?.Licenses.length === 0 ? null :
              <div className={styles.licensesContainer}>
                <h3>approvals</h3>
                <div className={styles.licenses}>
                  {data?.Licenses.map((license) =>
                    <div key={license.id} className={styles.imageHolder}>
                      <a href={license.url} target='_black'><img src={license.url} /></a>
                    </div>
                  )}
                </div>
              </div>
            }
          </div>
        </div>
      }
      <FooterEn history={history} />
    </div>
  );
};

export default AboutUsEn;

