import React from 'react';
import Axios from 'axios';
import { Grid, GridList, GridListTile, Typography } from '@material-ui/core';
import Navbar from '../../shared/components/navbar';
import Footer from '../../shared/components/footer';
import withWidth, { isWidthUp } from '@material-ui/core/withWidth';
import { AboutUs as AboutUsModel } from '../../shared/models/aboutus.model';
import Loading from '../../shared/components/loading';
import styles from './aboutUs.module.scss';

const getCols = (screenWidth: any) => {
  console.log('screenWidth -> ', screenWidth)
  if (isWidthUp('lg', screenWidth)) {
    return 5;
  }

  if (isWidthUp('md', screenWidth)) {
    return 3;
  }
  return 2;
};

const AboutUs = ({ history, width }: any): any => {
  const [loading, setLoading] = React.useState(true);
  const [data, setData] = React.useState<AboutUsModel>();
  const cols = getCols(width)
  React.useEffect((): any => {
    fetchImages();

  }, []);


  const fetchImages = async (): Promise<void> => {
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

  return (
    <div>
      <Navbar history={history} />
      {loading ? <Loading loading={loading} /> :
        <div>
          {data?.Images.length === 0 ? <h2>No Content</h2> :
            <div>
              <div className={styles.bg}>
                <h1>{data?.Title}</h1>
                <Typography align="center" color="textPrimary" variant="h6" className={styles.text1Margin} >{data?.Text1}</Typography>
                <Typography align="center" className={styles.text2Margin}>{data?.Text2}</Typography>
                <Typography align="center" className={styles.text3Margin}>{data?.Text3}</Typography>
              </div>
              <Grid justify="center" className={styles.images} >
                <GridList className={styles.list} cols={cols} >
                  {data?.Images.map((image) => (
                    <GridListTile key={image.url}>
                      <img src={image.url} alt={image.id} />
                    </GridListTile>
                  ))}
                </GridList>
              </Grid>
            </div>
          }
        </div>
      }
      <Footer history={history} />
    </div>
  );
};

export default withWidth()(AboutUs);

