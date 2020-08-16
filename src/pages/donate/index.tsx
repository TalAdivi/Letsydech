import React from 'react';
import Axios from 'axios';
import { Grid, GridList, GridListTile, Typography } from '@material-ui/core';
import Navbar from '../../shared/components/navbar';
import {Donation} from '../../shared/models/donate.model';
import Loading from '../../shared/components/loading';
import styles from './donate.module.scss';



const Donate = ({ history, width }: any): any => {
  const [loading, setLoading] = React.useState(true);
  const [data, setData] = React.useState<Donation>();

  React.useEffect((): any => {
    fetchImages();

  }, []);


  const fetchImages = async (): Promise<void> => {
    try {
      console.log(`${process.env.REACT_APP_BACKEND_URL}/donation`);
      const res: { data: Donation } = await Axios.get(`${process.env.REACT_APP_BACKEND_URL}/donation`);
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
          
            <div>
              <div className={styles.bg}>
                <h1>{data?.Title}</h1>
                <Typography align="center" color="textPrimary" variant="h6" className={styles.text1Margin} >{data?.Text}</Typography>
              </div>
              <Grid justify="center" className={styles.images} >
                <GridList className={styles.list} cols={1} >

                </GridList>
              </Grid>
            </div>
          
        </div>
      }
    </div>
  );
};

export default Donate;

