import React from 'react';
import Axios from 'axios';
import { Typography, Button, Input } from '@material-ui/core';
import Navbar from '../../shared/components/navbar';
import { Donation } from '../../shared/models/donate.model';
import Loading from '../../shared/components/loading';
import styles from './donate.module.scss';
import { PayPalButton } from "react-paypal-button-v2";
import Footer from '../../shared/components/footer'
import ReactMarkdown from "react-markdown";
import FooterEn from '../../shared/components/footer/index.en';
import HeaderEu from '../../shared/components/navbar/navbar.en';


const DonateEn = ({ history, width }: any): any => {
  const [loading, setLoading] = React.useState(true);
  const [data, setData] = React.useState<Donation>();
  const [currAmount, setCurrAmount] = React.useState(10);

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


  const onSuccess = (details: any, data: any) => {
    /** Here you can call your backend API
      endpoint and update the database */
    console.log(details, data);
    history.push('/success',{response:'Thank you for Your Donation!'});
  }

  return (
    <div>
      <HeaderEu history={history} path={"donate"} />
      {loading ? <Loading loading={loading} /> :
        <div className={styles.container}>
          <div >
            <h1>Any donate helps</h1>
            <ReactMarkdown source={`Your contribution will help us to continue to add to the activity and thus you will be partners in working for a reformed society.

Donation by deposit or bank transfer: Mizrahi Bank, account number 322799, branch 472.

A donation to the "By Your Side" organization will help address addicted women and provide optimal conditions for rehabilitation and growth!

The donation is recognized for tax credit purposes`} />
          </div>
          <div className={styles.paymentBox}>
            <div className={styles.alignInputs}>
              <Button className={styles.btnVal} variant="contained" onClick={() => setCurrAmount(10)}>10₪</Button>
            </div>
            <div className={styles.alignInputs}>
              <Button className={styles.btnVal} variant="contained" onClick={() => setCurrAmount(50)} >50₪</Button>
            </div>
            <div className={styles.alignInputs}>
              <Button className={styles.btnVal} variant="contained" onClick={() => setCurrAmount(100)}>100₪</Button>
            </div>
            <div className={[styles.alignInputs, styles.inputColor].join(' ')}>
              <Input disableUnderline={true} type='number' placeholder='Manually' onChange={(event) => {
                setCurrAmount(Number(event.target.value))
              }} />
            </div>
          </div>
          <div className={styles.dunationSum}>
            <p className={styles.amountToDonate}>{`Donation sum ${currAmount}₪`}</p>
          </div>
          <div className={styles.center}>
            <PayPalButton
              amount={currAmount}
              onSuccess={(details: any, data: any) => onSuccess(details, data)}
              options={{
                clientId: process.env.REACT_APP_PAYPAL_CLINET_ID,
                currency: "ILS"
              }}
            />
          </div>
        </div>
      }
      <FooterEn history={history} />
    </div>
  );
};

export default DonateEn;

