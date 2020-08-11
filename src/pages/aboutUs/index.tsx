import React from 'react';
import Axios from 'axios';
import { Grid, GridList, GridListTile, Typography } from '@material-ui/core';
import Navbar from '../../shared/components/navbar';
import withWidth, { isWidthUp } from '@material-ui/core/withWidth';
import { IAboutUs, IAboutUsData } from '../../shared/models/image.model';
import Loading from '../../shared/components/loading';
import styles from './aboutUs.module.scss';

const getCols = (screenWidth: any) => {
  console.log('screenWidth -> ' , screenWidth)
  if (isWidthUp('lg', screenWidth)) {
    return 5;
  }

  if (isWidthUp('md', screenWidth)) {
    return 3;
  }
  return 2;
};

const AboutUs = ({ history, width }:any): any => {
  const [loading, setLoading] = React.useState(true);
  const [allData, setAllData] = React.useState<IAboutUsData>();
  const cols = getCols(width)
  React.useEffect((): any => {
    fetchImages();
    
  }, []);


  const fetchImages = async (): Promise<void> => {
    try {
      console.log(`${process.env.REACT_APP_BACKEND_URL}/about-us`);
      const res: IAboutUs = await Axios.get(`${process.env.REACT_APP_BACKEND_URL}/about-us`);
      setAllData(res.data);
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
          {allData?.Images.length === 0 ? <h2>No Content</h2> :
            <div>
              <div className={styles.bg}>
                <h1>{allData?.Title}</h1>
              <Typography align="center" color="textPrimary" variant="h6" className={styles.text1Margin} >{allData?.Text1}</Typography>
              <Typography align="center" className={styles.text2Margin}>{allData?.Text2}</Typography>
              <Typography align="center" className={styles.text3Margin}>{allData?.Text3}</Typography>
              </div>
              <Grid justify="center" className={styles.images} >
                <GridList className={styles.list} cols={cols} >
                  {allData?.Images.map((image) => (
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
    </div>
  );
};

export default withWidth()(AboutUs);

