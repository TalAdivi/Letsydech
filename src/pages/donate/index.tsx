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


const Donate = ({ history, width }: any): any => {
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
    history.push('/success',{response:'Thank you for Your Donation!'});

    console.log('Google DSC!')
  }

  return (
    <div>
      <Navbar history={history} path={"donate"} />
      {loading ? <Loading loading={loading} /> :
        <div className={styles.container}>
          <div >
            <h1>{data?.Title}</h1>
            <ReactMarkdown source={data?.Text} />
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
              <Input disableUnderline={true} type='number' placeholder='סכום ידני...' onChange={(event) => {
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
      <Footer history={history} />
    </div>
  );
};

export default Donate;

