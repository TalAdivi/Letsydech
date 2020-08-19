import React from 'react';
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";
import { Grid, GridList, GridListTile, Typography, Box, Divider, Button } from '@material-ui/core';
import Navbar from '../../shared/components/navbar';
import withWidth, { isWidthUp } from '@material-ui/core/withWidth';
import styles from './contactUs.module.scss';
import Axios from 'axios';
import Loading from '../../shared/components/loading';
import Footer from '../../shared/components/footer';
import { Info as InfoModel, Form as FormModel } from '../../shared/models/contactus.model';

const postRequestParams = {
  "sender": "letsydechWebsite@gmail.com",
  "from": {
    "name": "fadi.atamny",
    "email": "fadi.atamny@gmail.com",
    "phone": "132456"
  },
  "message": {
    "subject": "test",
    "text": "test"
  }
}

const ContactUs = ({ history, width }: any): any => {
  const { register, handleSubmit } = useForm<FormModel>();
  const [loading, setLoading] = React.useState(true);
  const [data, setData] = React.useState<InfoModel>();

  React.useEffect((): any => {
    fetchData();
  }, []);

  const fetchData = async (): Promise<void> => {
    try {
      const res: { data: InfoModel } = await Axios.get(`${process.env.REACT_APP_BACKEND_URL}/info`);
      setData(res.data);
      postRequestParams.sender = res.data?.Email!;
      postRequestParams.message.subject = res.data?.MailSubject!;
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  const validate = (data: FormModel): boolean => {
    if (data.name != '' && data.email != '' && data.phoneNumber != '' && data.freeText != '') return true;
    return false;
  };

  const onSubmit = async (data: FormModel) => {
    const obj = document.getElementById('errorTxt');
    if (obj)
      obj.innerHTML = '';
    postRequestParams.from.name = data.name;
    postRequestParams.from.email = data.email;
    postRequestParams.from.phone = data.phoneNumber;
    postRequestParams.message.text = data.freeText;
    postRequestParams.message.subject += `Message From: ${data.name} ${new Date().toISOString()}`

    if (!validate(data)) {
      if (obj)
        obj.innerHTML = 'Missing Form Variables';
      return;
    }

    console.log('postRequestParams => ', postRequestParams);
    document.getElementById('submitBtn')?.setAttribute('disabled', 'true');
    try {
      await Axios.post(`${process.env.REACT_APP_BACKEND_URL}/sendmail`, postRequestParams);
      history.push('/success', { response: 'Successfully Sent The Email!' });
    } catch (e) {
      document.getElementById('submitBtn')?.setAttribute('disabled', 'false');
      if (obj)
        obj.innerHTML = 'Error Occured. Please Try Again.';
    }
  };

  return (
    <div>
      <Navbar history={history} path={"contactus"} />
      {loading ? <Loading loading={loading} /> :
        <div className={styles.root}>
          <div className={styles.container}>
            <p className={styles.title}>אנחנו לצידך</p>
            <Button className={styles.btn} variant="contained" onClick={() => window.open('tel:0097236125115', '_blank')} >אפשר  להתקשר</Button>
            <p className={styles.subTitle} > או </p>
            <p className={styles.subTitle} >השאירו פרטים וניצור קשר בהקדם </p>
          </div>
          <div className={styles.marginForm}>
            <Box borderRadius={16} m={'auto'} border={1} className={styles.main}>
              <form className={styles.myForm} onSubmit={handleSubmit(onSubmit)}>
                <div>
                  <label htmlFor="name">שם</label>
                  <input className={styles.input} name="name" placeholder="שם" ref={register} />
                </div>

                <div>
                  <label htmlFor="email">אימייל</label>
                  <input
                    className={styles.input}
                    name="email"
                    placeholder="mailAddress@gmail.com"
                    type="email"
                    ref={register}
                  />
                </div>
                <div>
                  <label htmlFor="phoneNumber">מספר טלפון</label>
                  <input className={styles.input} name="phoneNumber" pattern="05[0-9][0-9]{7}" placeholder="050-1234567" ref={register} />
                </div>
                <div>
                  <label htmlFor="freeText">תוכן הפניה</label>
                  <textarea className={[styles.content, styles.input].join(' ')} name="freeText" placeholder="טקסט חופשי.." ref={register} />
                </div>
                <input id="submitBtn" className={styles.input} type="submit" value='שילחי' />
                <p id="errorTxt" className={styles.error}></p>
              </form>
            </Box>
          </div>
        </div>
      }
      <Footer history={history} />
    </div>
  );
};

export default ContactUs;


