import React from 'react';
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";
import { Grid, GridList, GridListTile, Typography, Box, Divider, Button } from '@material-ui/core';
import styles from './contactUs-en.module.scss';
import Axios from 'axios';
import Loading from '../../shared/components/loading';
import FooterEn from '../../shared/components/footer/index.en';
import { Info as InfoModel, Form as FormModel } from '../../shared/models/contactus.model';
import { useLocation } from 'react-router-dom';
import HeaderEu from '../../shared/components/navbar/navbar.en';

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

const ContactUsEn = ({ history, width }: any): any => {
  const { register, handleSubmit } = useForm<FormModel>();
  const [loading, setLoading] = React.useState(true);
  const [data, setData] = React.useState<InfoModel>();
  const location = useLocation();

  React.useEffect((): any => {
    console.log('location.pathname -> ', location.pathname)
    if(location.pathname.startsWith('/en/')){
      console.log('')
    }
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

    document.getElementById('submitBtn')?.setAttribute('disabled', 'true');
    try {
      await Axios.post(`${process.env.REACT_APP_BACKEND_URL}/sendmail`, postRequestParams);
      history.push('/success', { response: 'Mail send successfully!' });
    } catch (e) {
      document.getElementById('submitBtn')?.setAttribute('disabled', 'false');
      if (obj)
        obj.innerHTML = 'Error Occured. Please Try Again.';
    }
  };
// HeaderEu
  return (
    <div>
      <HeaderEu history={history} path={"contactus"} />
      {loading ? <Loading loading={loading} /> :
        <div className={styles.root}>
          <div className={styles.container}>
            <p className={styles.title}>We are here for you</p>
            <Button className={styles.btn} variant="contained" onClick={() => window.open('tel:0097236125115', '_blank')} >Call now</Button>
            <p className={styles.subTitle} > Or </p>
            <p className={styles.subTitle} >Fill the form and we will contact you </p>
          </div>
          <div className={styles.marginForm}>
            <Box borderRadius={16} m={'auto'} border={1} className={styles.main}>
              <form className={styles.myForm} onSubmit={handleSubmit(onSubmit)}>
                <div>
                  <label htmlFor="name">name</label>
                  <input className={styles.input} name="name" placeholder="name" ref={register} />
                </div>

                <div>
                  <label htmlFor="email">Email</label>
                  <input
                    className={styles.input}
                    name="email"
                    placeholder="mailAddress@gmail.com"
                    type="email"
                    ref={register}
                  />
                </div>
                <div>
                  <label htmlFor="phoneNumber">phone number</label>
                  <input className={styles.input} name="phoneNumber" pattern="05[0-9][0-9]{7}" placeholder="0501234567" ref={register} />
                </div>
                <div>
                  <label htmlFor="freeText">content</label>
                  <textarea className={[styles.content, styles.input].join(' ')} name="freeText" placeholder="Free text.." ref={register} />
                </div>
                <input id="submitBtn" className={styles.input} type="submit" value='send' />
                <p id="errorTxt" className={styles.error}></p>
              </form>
            </Box>
          </div>
        </div>
      }
      
      <FooterEn history={history} />
    </div>
  );
};

export default ContactUsEn;


