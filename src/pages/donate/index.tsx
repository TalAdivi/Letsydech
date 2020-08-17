import React from 'react';
import Axios from 'axios';
import { Typography, Button, Input } from '@material-ui/core';
import Navbar from '../../shared/components/navbar';
import { Donation } from '../../shared/models/donate.model';
import Loading from '../../shared/components/loading';
import styles from './donate.module.scss';
import { PayPalButton } from "react-paypal-button-v2";
import Footer from '../../shared/components/footer'


const Donate = ({ history, width }: any): any => {
  const [loading, setLoading] = React.useState(true);
  const [data, setData] = React.useState<Donation>();
  const [currAmount, setCurrAmount] = React.useState(0);

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
    
  }

  return (
    <div>
      <Navbar history={history} />
      {loading ? <Loading loading={loading} /> :
        <div className={styles.container}>
          <div >
            <h1>{data?.Title}</h1>
            <Typography align="center" color="textPrimary" variant="h6" className={styles.text1Margin} >{data?.Text}</Typography>
          </div>


          <div className={styles.paymentBox}>
            <div className={styles.alignInputs}>
              <Button variant="contained" onClick={() => setCurrAmount(10)}>10₪</Button>
              
            </div>
            <div className={styles.alignInputs}>
              <Button variant="contained" onClick={() => setCurrAmount(50)} >50₪</Button>
            </div>
            <div className={styles.alignInputs}>
              <Button variant="contained" onClick={() => setCurrAmount(100)}>100₪</Button>
            </div>
            <div className={[styles.alignInputs, styles.inputColor].join(' ')}>

              <Input disableUnderline={true} type='number' placeholder='סכום ידני...' onChange={(event) => {
                // console.log(typeof Number(event.target.value))
                setCurrAmount(Number(event.target.value))
              }} />
            </div>
          </div>
          <div className={styles.dunationSum}>
            <p className={styles.amountToDonate}>{`סכום לתרומה  ${currAmount}₪`}</p>
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
      <Footer />
    </div>
  );
};

export default Donate;

