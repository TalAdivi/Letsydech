import React from 'react';
import Axios from 'axios';
import { Typography } from '@material-ui/core';
import Navbar from '../../shared/components/navbar';
import Footer from '../../shared/components/footer';
import Loading from '../../shared/components/loading';
import styles from './admission.module.scss';
import { Admission as AdmissionModel, Card } from '../../shared/models/admission.model';

const Admission = ({ history, width }: any): any => {
  const [loading, setLoading] = React.useState(true);
  const [data, setData] = React.useState<AdmissionModel>();
  React.useEffect((): any => {
    fetchData();
  }, []);

  const fetchData = async (): Promise<void> => {
    try {
      console.log(`${process.env.REACT_APP_BACKEND_URL}/admission`);
      const res: { data: AdmissionModel } = await Axios.get(`${process.env.REACT_APP_BACKEND_URL}/admission`);
      const res2: { data: Card[] } = await Axios.get(`${process.env.REACT_APP_BACKEND_URL}/cards`);
      setData({ ...res.data, Cards: res2.data });
      console.log({ ...res.data, Cards: res2.data });
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Navbar history={history} path={"admission"} />
      {loading ? <Loading loading={loading} /> :
        <div>
          <div className={styles.container}>
            <div className={styles.bg}>
              <h1>{data?.Title}</h1>
              <Typography align="center" color="textPrimary" variant="h6" className={styles.text1Margin} >{data?.Text}</Typography>
              <Typography align="center" className={styles.text2Margin}>{data?.Text}</Typography>
              <Typography align="center" className={styles.text3Margin}>{data?.Text}</Typography>
            </div>
            <div className={styles.gallery}>
            </div>
            <div className={styles.licensesContainer}>
              <h3>אישורים:</h3>
              <div className={styles.licenses}>
              </div>
            </div>
          </div>
        </div>
      }
      <Footer history={history} />
    </div>
  );
};

export default Admission;

