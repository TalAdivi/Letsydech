import React from 'react';
import Axios from 'axios';
import { Button } from '@material-ui/core';
import Loading from '../../shared/components/loading';
import styles from './admission.module.scss';
import { Admission as AdmissionModel, Card } from '../../shared/models/admission.model';
import ReactMarkdown from "react-markdown";
import FooterEn from '../../shared/components/footer/index.en';
import HeaderEn from '../../shared/components/navbar/navbar.en';

const AdmissionEn = ({ history, width }: any): any => {
  const [loading, setLoading] = React.useState(true);
  const [data, setData] = React.useState<AdmissionModel>();
  React.useEffect((): any => {
    fetchData();
  }, []);

  const fetchData = async (): Promise<void> => {
    try {
      const res: { data: AdmissionModel } = await Axios.get(`${process.env.REACT_APP_BACKEND_URL}/admission`);
      const res2: { data: Card[] } = await Axios.get(`${process.env.REACT_APP_BACKEND_URL}/cards`);
      setData({ ...res.data, Cards: res2.data });
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <HeaderEn history={history} path={"admission"} />
      {loading ? <Loading loading={loading} /> :
        <div className={styles.container}>
          <div className={styles.textContainer}>
            <p className={styles.title}>{data?.TitleEn}</p>
            <p className={styles.subTitle}>{data?.TextEn}</p>
            <Button className={styles.btn} size='large' color='primary' variant="contained" onClick={() => history.push('/en/contactus')}>
              We are here for you
            </Button>

          </div>
          <div className={styles.cardsContainer}>
            {data?.Cards.map((card: Card) =>
              <div className={styles.card}>
                <h3>{card.TitleEn}</h3>
                <ReactMarkdown source={card.TextEn} />
              </div>
            )}
          </div>
        </div>
      }
      <FooterEn history={history} />
    </div>
  );
};

export default AdmissionEn;

