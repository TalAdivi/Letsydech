import React from 'react';
import Axios from 'axios';
import { Button } from '@material-ui/core';
import Navbar from '../../shared/components/navbar';
import Footer from '../../shared/components/footer';
import Loading from '../../shared/components/loading';
import styles from './admission.module.scss';
import { Admission as AdmissionModel, Card } from '../../shared/models/admission.model';
import ReactMarkdown from "react-markdown";
import FooterEn from '../../shared/components/footer/index.en';
import HeaderEu from '../../shared/components/navbar/navbar.en';

const AdmissionEn = ({ history, width }: any): any => {
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
      <HeaderEu history={history} path={"admission"} />
      {loading ? <Loading loading={loading} /> :
        <div className={styles.container}>
          <div className={styles.textContainer}>
            <p className={styles.title}>Rehab</p>
            <p className={styles.subTitle}>Here you can find relevant information</p>
            <Button className={styles.btn} size='large' color='primary' variant="contained" onClick={() => history.push('/en/contactus')}>
              We are here for you
            </Button>

          </div>
          <div className={styles.cardsContainer}>
            {/* {data?.Cards.map((card: any) =>
              <div className={styles.card}>
                <h3>{card.Title}</h3>
                <ReactMarkdown source={card.Text} />
              </div>
            )} */}
            <div className={styles.card}>
              <h3>Rehab center</h3>
              <ReactMarkdown source={`Framework works for the purposes of diagnosis, physical detoxification, medical and psychosocial treatment and referral for further treatment
During the period of stay, the recipient receives individual and group professional support and care
The staff consists of women and accompanies the patients 24 hours a day`} />
            </div>
            <div className={styles.card}>
            <h3>License</h3>
              <ReactMarkdown source={`he institution of the Ministry of Health's license "License of a medical institution for the treatment of drug users". No. 15/6/30`} />
            </div>
            <div className={styles.card}>
            <h3>Criteria for admission</h3>
              <ReactMarkdown source={`Over the age of 18,
Addicted to substances,
Psychoactive,
With minimal motivation,
Perform the required tests`} />
            </div>
            <div className={styles.card}>
            <h3>Required tests</h3>
              <ReactMarkdown source={`Chest photo
A.C.G,
Blood count,
V.D.R.L,
.H.I.V`} />
            </div>
            <div className={styles.card}>
            <h3>Required documents</h3>
              <ReactMarkdown source={`ID,
Updated social report,
A medical report`} />
            </div>
          </div>
        </div>
      }
      <FooterEn history={history} />
    </div>
  );
};

export default AdmissionEn;

