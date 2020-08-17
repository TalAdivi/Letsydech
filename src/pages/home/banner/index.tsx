import React from 'react';
import { Grid, Button } from '@material-ui/core';
import styles from './banner.module.scss';
import Axios from 'axios';

const Banner = ({ primaryText, secondaryText, history }: any) => {
  const [data, setData] = React.useState<{ Title: string, Text: string, Phone: string, Email: string, Facebook: string, Instagram: string }>();

  React.useEffect((): any => {
    fetchData();
  }, []);

  const fetchData = async (): Promise<void> => {
    try {
      const res: { data: { Title: string, Text: string, Phone: string, Email: string, Facebook: string, Instagram: string } } = await Axios.get(`${process.env.REACT_APP_BACKEND_URL}/footer`);
      setData(res.data);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Grid container spacing={2} justify='center'>
      <Grid className={[styles.item, styles.bgImg].join(' ')} item xs={12}>
        <p className={styles.title}>
          {primaryText}
        </p>
        <p className={styles.subTitle}>
          {secondaryText}
        </p>
        <div className={styles.buttons}>
          <Button className={styles.btn} size='medium' color='primary' variant="contained" onClick={() => history.push('/contactus')}>
            רוצים לדבר?
          </Button>
          <Button className={styles.btn} size='medium' color='primary' variant="contained" onClick={() => history.push('/donate')}>
            בוא לתמוך
          </Button>
        </div>
      </Grid>
    </Grid>
  );
};

export default Banner;