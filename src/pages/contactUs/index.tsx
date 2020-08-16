import React from 'react';
import Axios from 'axios';
import { Grid, GridList, GridListTile, Typography } from '@material-ui/core';
import Navbar from '../../shared/components/navbar';
import withWidth, { isWidthUp } from '@material-ui/core/withWidth';
import { AboutUs as AboutUsModel } from '../../shared/models/aboutus.model';
import Loading from '../../shared/components/loading';
import styles from './contactUs.module.scss';

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

const ContactUs = ({ history, width }: any): any => {
  const [loading, setLoading] = React.useState(true);
  // const [data, setData] = React.useState<AboutUsModel>();
  const cols = getCols(width)


  return (
    <div>
      <Navbar history={history} />
      {loading ? <Loading loading={loading} /> :
        <div>
            <div>
              <div className={styles.bg}>
                <h1>לצידך</h1>
                <Typography align="center" color="textPrimary" variant="h6" className={styles.text1Margin} >blublublublu</Typography>
                <Typography align="center" className={styles.text2Margin}>blibliblibli</Typography>
                <Typography align="center" className={styles.text3Margin}>blablablabla</Typography>
              </div>
              <Grid justify="center" className={styles.images} >
              </Grid>
            </div> 
        </div>
      }
    </div>
  );
};

export default withWidth()(ContactUs);

